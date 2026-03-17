import { createContext, useEffect, useState } from "react";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=20&limit=3");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);
    const addToCart = (id) => {

        setCart((prev) => {
            const existing = prev.find((item) => item.id === id)
            if (existing) {
                return prev.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            } else {
                return [...prev, { ...products, qty: 1 }]
            }
        })
    }
    console.log(products[0]);

    return (
        <ProductContext.Provider value={{ products, cart, addToCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export {
    ProductContext, ProductProvider
}