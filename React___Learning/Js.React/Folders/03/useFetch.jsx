

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Production-ready useFetch custom hook for ecommerce applications
 * Features: error handling, caching, retry logic, abort controller, timeout, interceptors
 * 
 * @param {string} url - API endpoint URL
 * @param {Object} options - Configuration options
 * @param {string} options.method - HTTP method (GET, POST, PUT, DELETE, PATCH)
 * @param {Object} options.headers - Custom headers
 * @param {Object} options.body - Request body (auto-stringified for JSON)
 * @param {number} options.timeout - Request timeout in ms (default: 30000)
 * @param {number} options.retries - Number of retry attempts (default: 3)
 * @param {boolean} options.cache - Enable response caching (default: true)
 * @param {number} options.cacheTTL - Cache time-to-live in ms (default: 5 minutes)
 * @param {Function} options.onRequestStart - Interceptor before request
 * @param {Function} options.onResponseSuccess - Interceptor on success
 * @param {Function} options.onResponseError - Interceptor on error
 * @param {boolean} options.skip - Skip the fetch request (default: false)
 * 
 * @returns {Object} { data, loading, error, refetch, abort }
 */
export function useFetch(url, options = {}) {
    // Configuration with defaults
    const config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        timeout: 30000,
        retries: 3,
        cache: true,
        cacheTTL: 5 * 60 * 1000, // 5 minutes
        skip: false,
        ...options,
    };

    // State management
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Refs for cleanup and caching
    const cacheRef = useRef(new Map()); // Cache storage
    const abortControllerRef = useRef(null); // Request cancellation
    const timeoutIdRef = useRef(null); // Timeout management
    const retryCountRef = useRef(0);
    const cacheTimestampRef = useRef(null);

    /**
     * Format error response for consistent error handling
     */
    const formatError = useCallback((err, statusCode = null) => {
        return {
            message: err?.message || 'An error occurred',
            statusCode,
            timestamp: new Date().toISOString(),
            raw: err,
        };
    }, []);

    /**
     * Build query string from URL and parameters
     */
    const buildUrl = useCallback((baseUrl, params = {}) => {
        const urlObj = new URL(baseUrl, window.location.origin);
        Object.entries(params).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                urlObj.searchParams.append(key, value);
            }
        });
        return urlObj.toString();
    }, []);

    /**
     * Get cached data if available and not expired
     */
    const getCachedData = useCallback(() => {
        if (!config.cache || !cacheRef.current.has(url)) {
            return null;
        }

        const { data: cachedData, timestamp } = cacheRef.current.get(url);
        const isExpired = Date.now() - timestamp > config.cacheTTL;

        if (isExpired) {
            cacheRef.current.delete(url);
            return null;
        }

        return cachedData;
    }, [url, config.cache, config.cacheTTL]);

    /**
     * Store data in cache
     */
    const setCachedData = useCallback((data) => {
        if (config.cache) {
            cacheRef.current.set(url, {
                data,
                timestamp: Date.now(),
            });
        }
    }, [url, config.cache]);

    /**
     * Main fetch function with retry and error handling
     */
    const executeRequest = useCallback(async (retryAttempt = 0) => {
        try {
            setLoading(true);
            setError(null);

            // Check cache first
            const cachedData = getCachedData();
            if (cachedData) {
                setData(cachedData);
                setLoading(false);
                return;
            }

            // Create abort controller
            abortControllerRef.current = new AbortController();

            // Request interceptor
            if (config.onRequestStart) {
                config.onRequestStart({ url, method: config.method });
            }

            // Set timeout
            timeoutIdRef.current = setTimeout(() => {
                abortControllerRef.current?.abort();
            }, config.timeout);

            // Prepare request
            const requestOptions = {
                method: config.method,
                headers: config.headers,
                signal: abortControllerRef.current.signal,
            };

            // Add body for non-GET requests
            if (config.body && config.method !== 'GET') {
                requestOptions.body =
                    typeof config.body === 'string'
                        ? config.body
                        : JSON.stringify(config.body);
            }

            // Make request
            const response = await fetch(url, requestOptions);

            // Clear timeout
            clearTimeout(timeoutIdRef.current);

            // Handle HTTP errors
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: response.statusText }));
                throw new Error(errorData.message || `HTTP ${response.status}`);
            }

            // Parse response
            const result = await response.json();

            // Response success interceptor
            if (config.onResponseSuccess) {
                config.onResponseSuccess(result);
            }

            // Cache and set data
            setCachedData(result);
            setData(result);
            setError(null);
            retryCountRef.current = 0;

        } catch (err) {
            // Handle abort errors silently
            if (err.name === 'AbortError') {
                console.warn('Request aborted or timed out');
                return;
            }

            // Retry logic for network errors
            if (retryAttempt < config.retries && !url.includes('?')) {
                retryCountRef.current = retryAttempt + 1;
                console.warn(`Retrying request (attempt ${retryAttempt + 1}/${config.retries})`);

                // Exponential backoff: 1s, 2s, 4s, etc.
                const backoffDelay = Math.pow(2, retryAttempt) * 1000;
                setTimeout(() => {
                    executeRequest(retryAttempt + 1);
                }, backoffDelay);
                return;
            }

            // Response error interceptor
            if (config.onResponseError) {
                config.onResponseError(err);
            }

            // Set error state
            const formattedError = formatError(err, null);
            setError(formattedError);
            setData(null);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }, [url, config, getCachedData, setCachedData, formatError]);

    /**
     * Public refetch function
     */
    const refetch = useCallback(() => {
        cacheRef.current.delete(url); // Clear cache
        executeRequest(0);
    }, [url, executeRequest]);

    /**
     * Public abort function
     */
    const abort = useCallback(() => {
        abortControllerRef.current?.abort();
        clearTimeout(timeoutIdRef.current);
        setLoading(false);
    }, []);

    /**
     * Execute request on mount and when dependencies change
     */
    useEffect(() => {
        if (config.skip) {
            return;
        }

        executeRequest(0);

        // Cleanup on unmount
        return () => {
            abortControllerRef.current?.abort();
            clearTimeout(timeoutIdRef.current);
        };
    }, [url, config.skip, executeRequest]);

    return {
        data,
        loading,
        error,
        refetch,
        abort,
        retryCount: retryCountRef.current,
    };
}