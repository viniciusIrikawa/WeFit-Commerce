import React from 'react';
import { MyCart, Counter } from './styles';

const Cart = () => {
  return (
    <div>
        <div>
            <MyCart> Meu Carrinho </MyCart>
            <Counter> 0 itens </Counter>
        </div>
        {/* <div> icon </div> */}
    </div>
  )
}

export default Cart