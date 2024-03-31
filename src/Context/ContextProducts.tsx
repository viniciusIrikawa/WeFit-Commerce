'use client'
import { CartItem } from "@/@Types/cartItem";
import { IProduct } from "@/@Types/product";
import React from "react";
import { useState } from "react";

interface Children{
    children: React.ReactNode;
}

interface ProductsContextProps{
    products: IProduct[];
    setProducts: (newProduct: IProduct[]) => void;
    cartItems: CartItem[];
    setCartItems: (newItem: CartItem[]) => void;
}

const initialValue:ProductsContextProps = {
    products: [],
    setProducts: () => {},
    cartItems: [],
    setCartItems: () => {},
};

export const ProductContext = React.createContext(initialValue);

export const ProductsProvider = ({ children }:Children) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);

    return(
        <ProductContext.Provider value={{ products, setProducts, cartItems, setCartItems }}>
            {children}
        </ProductContext.Provider>
    )
}