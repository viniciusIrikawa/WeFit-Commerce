import React from 'react';
import { CartWrapper, ImageWrapper, MyCart, Counter } from './styles';
import Image from 'next/image';

const Cart = () => {
  return (
    <CartWrapper>
        <div>
            <MyCart href='/cart'> Meu Carrinho </MyCart>
            <Counter> 0 itens </Counter>
        </div>
        <ImageWrapper>
          <Image src='/img/bag.png' alt='' width={24} height={20.57}/>
        </ImageWrapper>
    </CartWrapper>
  )
}

export default Cart