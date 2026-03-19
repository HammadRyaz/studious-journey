import React, { useState } from 'react';
import { useFetch } from './useFetch';
import './HookFetch_App.css';

/**
 * Ecommerce Products Component using useFetch hook
 * Fetches products from dummyjson API with filtering and sorting
 */
function HookFetch_App() {
    const [category, setCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    // Fetch products from dummyjson API
    const {
        data: productsData,
        loading,
        error,
        refetch,
        abort,
    } = useFetch('https://dummyjson.com/products?limit=0', {
        method: 'GET',
        timeout: 10000,
        retries: 3,
        cache: true,
        cacheTTL: 10 * 60 * 1000, // 10 minutes cache
        onRequestStart: () => {
            console.log('📡 Fetching products...');
        },
        onResponseSuccess: (data) => {
            console.log(`✅ Successfully loaded ${data.products.length} products`);
        },
        onResponseError: (err) => {
            console.error('❌ Error fetching products:', err.message);
        },
    });

    // Filter and sort products
    const products = productsData?.products || [];

    const filteredProducts = category === 'all'
        ? products
        : products.filter((p) => p.category === category);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.title.localeCompare(b.title);
        }
    });

    // Get unique categories
    const categories = ['all', ...new Set(products.map((p) => p.category))];

    return (
        <div className="hook-fetch-container">
            <header className="header">
                <h1>🛍️ Ecommerce Products</h1>
                <p>Fetched from DummyJSON API using useFetch Hook</p>
            </header>

            {/* Error State */}
            {error && (
                <div className="error-banner">
                    <strong>⚠️ Error:</strong> {error.message}
                    <button onClick={refetch} className="retry-btn">
                        Retry
                    </button>
                </div>
            )}

            {/* Loading State */}
            {loading && (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading products...</p>
                </div>
            )}

            {/* Filters & Controls */}
            {!loading && products.length > 0 && (
                <>
                    <div className="controls">
                        <div className="filter-group">
                            <label htmlFor="category">Category:</label>
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="select"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="sort">Sort By:</label>
                            <select
                                id="sort"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="select"
                            >
                                <option value="name">Name (A-Z)</option>
                                <option value="price-low">Price (Low to High)</option>
                                <option value="price-high">Price (High to Low)</option>
                                <option value="rating">Rating (Highest)</option>
                            </select>
                        </div>

                        <button onClick={refetch} className="refresh-btn">
                            🔄 Refresh
                        </button>

                        <button onClick={abort} className="abort-btn">
                            ⏹️ Cancel
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="products-info">
                        <p>
                            Showing <strong>{sortedProducts.length}</strong> of{' '}
                            <strong>{products.length}</strong> products
                        </p>
                    </div>

                    {sortedProducts.length > 0 ? (
                        <div className="products-grid">
                            {sortedProducts.map((product) => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image">
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/200?text=No+Image';
                                            }}
                                        />
                                        <span className="category-badge">{product.category}</span>
                                    </div>

                                    <div className="product-info">
                                        <h3 className="product-title">{product.title}</h3>
                                        <p className="product-description">{product.description}</p>

                                        <div className="product-meta">
                                            <span className="rating">
                                                ⭐ {product.rating.toFixed(1)} / 5
                                            </span>
                                            <span className="stock" data-stock={product.stock > 0}>
                                                {product.stock > 0
                                                    ? `${product.stock} in stock`
                                                    : 'Out of stock'}
                                            </span>
                                        </div>

                                        <div className="product-footer">
                                            <div className="price">
                                                <span className="original-price">
                                                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                                </span>
                                                <span className="current-price">${product.price.toFixed(2)}</span>
                                                <span className="discount">{product.discountPercentage}% OFF</span>
                                            </div>
                                            <button
                                                className="add-to-cart"
                                                disabled={product.stock === 0}
                                            >
                                                {product.stock > 0 ? '🛒 Add to Cart' : 'Sold Out'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-products">
                            <p>No products found in this category.</p>
                        </div>
                    )}
                </>
            )}

            {/* Empty State */}
            {!loading && products.length === 0 && !error && (
                <div className="empty-state">
                    <p>No products available</p>
                </div>
            )}
        </div>
    );
}

export default HookFetch_App;
