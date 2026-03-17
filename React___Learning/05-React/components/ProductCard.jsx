import React, { useContext } from 'react'
import { ProductContext } from '../store/Context'

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(ProductContext);
    return (
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-600 mt-1">${product.price}</p>
                <button
                    onClick={() => addToCart(product.id)}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard