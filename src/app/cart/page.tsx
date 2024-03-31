'use client'
import React, { useContext } from 'react';
import { 
  CartContainer, 
  Table, 
  TableHeader, 
  TableData, 
  ProductWrapper, 
  TitlePriceWrapper,
  QuantityWrapper, 
  Title, 
  Price,
  Quantity,
  BtnQuantity,
  Divisor, 
  BtnCheckout, 
  TotalWrapper, 
  TxtTotal, 
  TotalPrice 
} from './styles';
import { ProductContext } from '@/Context/ContextProducts';
import { IProduct } from '@/@Types/product';
import Image from 'next/image';

const page = () => {
  const { cartItems, setCartItems } = useContext(ProductContext);
  
  const removeItem = (productID: number | undefined) => {
    const items:IProduct[] = cartItems.filter(item => item.id !== productID);
    setCartItems(items); 
  };

  const decrementQuantity = (productID: number | undefined) => {
    const findItem: IProduct = cartItems.find(item => item.id === productID)!;

    if(findItem?.quantity && findItem.quantity > 0) {
      setCartItems(cartItems.map((item) => item.id === productID ? 
        {...findItem, quantity: (findItem?.quantity || 0) - 1} : item));
    }else{
      removeItem(productID);
    }
  };

  const incrementQuantity = (productID: number | undefined) => {
    const findItem: IProduct = cartItems.find(item => item.id === productID)!;

    setCartItems(cartItems.map((item) => item.id === productID ? 
      {...findItem, quantity: (findItem?.quantity || 0) + 1} : item));
  };

  return (
    <CartContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader> PRODUTO </TableHeader>
            <TableHeader> QTD </TableHeader>
            <TableHeader> SUBTOTAL </TableHeader>
            <TableHeader> </TableHeader>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: IProduct) => (
            <tr>
              <TableData> 
                <ProductWrapper>
                  <Image src={item.image} alt='' width={91} height={114}/> 
                  <TitlePriceWrapper>
                    <Title>
                      {item.title}
                    </Title>
                    <Price>
                      R$ {item.price}
                    </Price>
                  </TitlePriceWrapper>
                </ProductWrapper>
              </TableData>
              <TableData>
                <QuantityWrapper>
                  <BtnQuantity onClick={() => decrementQuantity(item.id)}> 
                    <Image src={'/img/btn_decrement.png'} alt='Decrement button' width={14} height={14}/>
                  </BtnQuantity>
                  <Quantity value={item.quantity}/>
                  <BtnQuantity onClick={() => incrementQuantity(item.id)}> 
                    <Image src={'/img/btn_increment.png'} alt='Increment button' width={14} height={14}/>
                  </BtnQuantity>
                </QuantityWrapper>
              </TableData>
              <TableData> Subtotal </TableData>
              <TableData>
                <Image src={'/img/trash.png'} onClick={() => removeItem(item.id)} alt='Trash button' width={18} height={18}/>
              </TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <Divisor/>
      <TotalWrapper>
        <BtnCheckout href={'/success'}> Finalizar Pedido </BtnCheckout>
        <div>
          <TxtTotal> Total </TxtTotal>
          <TotalPrice> R$ 29,99</TotalPrice>
        </div>
      </TotalWrapper>
    </CartContainer>
  )
}

export default page