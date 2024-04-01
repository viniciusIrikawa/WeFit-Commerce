'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { CardWrapper, Price, H2, BtnAddToCart } from './styles';
import { IProduct } from '@/@Types/product';
import { ProductContext } from '@/Context/ContextProducts';

interface IProductProps{
  items: IProduct
}

const CardProduct = ({ items }: IProductProps) => {
  const { cartItems, setCartItems } = useContext(ProductContext);

  const addToCart = (products: IProduct) => {
    const itemExistsInCart = cartItems.find((item: IProduct) => item.id === products.id);

    if(itemExistsInCart){
      setCartItems(cartItems.map((item: IProduct) => item.id === products.id ? 
      {...itemExistsInCart, quantity: (itemExistsInCart.quantity || 0) + 1 }: item));

    }else{
      setCartItems([...cartItems, {...items, quantity: 1}]);
    }
  };

  const countQuantity = () => {
    const productQuantity = cartItems.find(item => item.id === items.id);
    return productQuantity?.quantity;
  };

  return (
    <CardWrapper>
      <Image src={items.image} alt='' width={147} height={188}/>
      <H2> {items.title} </H2>
      <Price> R$ {items.price} </Price>
      <BtnAddToCart onClick={() => addToCart(items)}> {countQuantity()} Adicionar ao carrinho </BtnAddToCart>
    </CardWrapper>
  )
}

export default CardProduct;