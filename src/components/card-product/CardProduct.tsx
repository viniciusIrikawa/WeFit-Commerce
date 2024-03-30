'use client';
import Image from 'next/image';
import React from 'react';
import { CardWrapper, Price, H2, BtnAddToCart } from './styles';
import { IProduct } from '@/@Types/product';


const CardProduct = ({ image, title, price }: IProduct) => {
  return (
    <CardWrapper>
      <Image src={image} alt='' width={147} height={188}/>
      <H2> {title} </H2>
      <Price> R$ {price} </Price>
      <BtnAddToCart> Adicionar ao carrinho </BtnAddToCart>
    </CardWrapper>
  )
}

export default CardProduct;