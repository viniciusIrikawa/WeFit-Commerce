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
  const { cartItems } = useContext(ProductContext);

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
          {cartItems.map((items: IProduct) => (
            <tr>
              <TableData> 
                <ProductWrapper>
                  <Image src={items.image} alt='' width={91} height={114}/> 
                  <TitlePriceWrapper>
                    <Title>
                      {items.title}
                    </Title>
                    <Price>
                      R$ {items.price}
                    </Price>
                  </TitlePriceWrapper>
                </ProductWrapper>
              </TableData>
              <TableData>
                <QuantityWrapper>
                  <BtnQuantity> 
                    <Image src={'/img/btn_decrement.png'} alt='Decrement button' width={14} height={14}/>
                  </BtnQuantity>
                  <Quantity value={2}/>
                  <BtnQuantity> 
                    <Image src={'/img/btn_increment.png'} alt='Increment button' width={14} height={14}/>
                  </BtnQuantity>
                </QuantityWrapper>
              </TableData>
              <TableData> Subtotal </TableData>
              <TableData>
                <Image src={'/img/trash.png'} alt='Trash button' width={18} height={18}/>
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