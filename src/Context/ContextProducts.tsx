'use client'
import { IProduct } from "@/@Types/product";
import React from "react";
import { useState } from "react";

interface Children{
    children: React.ReactNode;
}

interface ProductsContextProps{
    cartItems: IProduct[];
    setCartItems: (newItem: IProduct[]) => void;
}

const initialValue:ProductsContextProps = {
    cartItems: [],
    setCartItems: () => {},
};

export const ProductContext = React.createContext(initialValue);

export const ProductsProvider = ({ children }:Children) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    return(
        <ProductContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </ProductContext.Provider>
    )
}