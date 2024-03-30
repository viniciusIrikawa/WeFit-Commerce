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

  const addToCart = (items: IProduct) => {
    // const itemExistsInCart = cartItems.filter((item: IProduct) => item.id === items.id);
    setCartItems([...cartItems, items]);
  };

  return (
    <CardWrapper>
      <Image src={items.image} alt='' width={147} height={188}/>
      <H2> {items.title} </H2>
      <Price> R$ {items.price} </Price>
      <BtnAddToCart onClick={() => addToCart(items)}> Adicionar ao carrinho </BtnAddToCart>
    </CardWrapper>
  )
}

export default CardProduct;