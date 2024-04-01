'use client';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { CardWrapper, Price, H2, BtnAddToCart, IconCart } from './styles';
import { IProduct } from '@/@Types/product';
import { ProductContext } from '@/Context/ContextProducts';

interface IProductProps{
  items: IProduct
}

const CardProduct = ({ items }: IProductProps) => {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const [ buttonColor , setButtonColor ] = useState<string>('#009EDD');

  const addToCart = (products: IProduct) => {
    const itemExistsInCart = cartItems.find((item: IProduct) => item.id === products.id);

    if(itemExistsInCart){
      setCartItems(cartItems.map((item: IProduct) => item.id === products.id ? 
      {...itemExistsInCart, quantity: (itemExistsInCart.quantity || 0) + 1 }: item));
    }else{
      setCartItems([...cartItems, {...items, quantity: 1}]);
    }
    setButtonColor('#039B00');
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
      <BtnAddToCart buttonColor={buttonColor} onClick={() => addToCart(items)}> 
        <IconCart src='/img/cart.png' alt='Cart icon' width={11.42} height={11.9}/>
        {countQuantity()} Adicionar ao carrinho 
      </BtnAddToCart>
    </CardWrapper>
  )
}

export default CardProduct;