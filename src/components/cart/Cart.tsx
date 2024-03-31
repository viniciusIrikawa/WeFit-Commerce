'use client';
import React, { useContext } from 'react';
import { ProductContext } from '../../Context/ContextProducts'
import { CartWrapper, ImageWrapper, MyCart, Counter } from './styles';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const { cartItems } = useContext(ProductContext);

  return (
    <CartWrapper>
        <div>
          <MyCart href={'/cart'}> Meu Carrinho </MyCart>
          <Counter> {cartItems.length} itens </Counter>
        </div>
        <ImageWrapper>
          <Link href={'/cart'}>
            <Image src='/img/bag.png' alt='' width={24} height={20.57}/>
          </Link>
        </ImageWrapper>
    </CartWrapper>
  )
}

export default Cart