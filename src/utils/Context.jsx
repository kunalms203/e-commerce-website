import React, { useEffect, createContext, useState } from 'react';
import axios from './Axios';

export const ProductContext = createContext();

const Context = (props) => {
    const [products, setProducts] = useState(null);
    const getProducts = async () => {
            const {data} = await axios("/products");
            setProducts(data);
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;
