import sanitizeHtml from "sanitize-html";

export function sanitizeData(data) {
    let sanitize = {}
    for (const [key, value] of Object.entries(data)) {

        if (typeof value === 'string') {
            sanitize[key] = sanitizeHtml(value, { allowedAttributes: {}, allowedTags: ['b'] })
        } else {
            sanitize[key] = value
        }
    }
    return sanitize
}