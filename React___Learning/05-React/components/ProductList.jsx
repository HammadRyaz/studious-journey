import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { ProductContext } from '../store/Context';
import Message from './Message';

const ProductList = () => {
    const { products } = useContext(ProductContext)

    return (
        <>
            <h1 className='text-6xl text-center py-12 '>STORE PAGE</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12">
                {
                    products.length > 0
                        ? products.map((item) => (
                            <ProductCard product={item} key={item.id} />
                        ))
                        : <Message msg={"Loading..."} />
                }

            </div>
        </>
    )
}

export default ProductList