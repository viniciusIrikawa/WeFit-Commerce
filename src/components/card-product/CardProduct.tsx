'use client';
import Image from 'next/image';
import React from 'react';
import { Container, CardWrapper, Price, H2, BtnAddToCart } from './styles';

const CardProduct = () => {
  return (
    <Container>
      <CardWrapper>
        <Image src='/img/black_widow.jpg' alt='' width={147} height={188}/>
        <H2> Viúva Negra </H2>
        <Price> R$30,99 </Price>
        <BtnAddToCart> Adicionar ao carrinho </BtnAddToCart>
      </CardWrapper>
    </Container>
  )
}

export default CardProduct;