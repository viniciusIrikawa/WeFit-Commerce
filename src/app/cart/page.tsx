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
  TotalPrice, 
  TableMobile,
  TotalWrapperMobile,
  WrapperPriceMobile
} from './styles';
import { ProductContext } from '@/Context/ContextProducts';
import { IProduct } from '@/@Types/product';
import Image from 'next/image';
import EmptyCart from '@/components/cart/empty/EmptyCart';

const page = () => {
  const { cartItems, setCartItems } = useContext(ProductContext);
 let subTotalCart = 0;

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
    cartItems.length > 0 ? (
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
            {cartItems.map((item: IProduct) => {
              subTotalCart += (item?.quantity ?? 0) * item?.price
              return (  
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
                  <TableData> R$ {((item?.quantity ?? 0) * item?.price).toFixed(2)} </TableData>
                  <TableData>
                    <Image src={'/img/trash.png'} onClick={() => removeItem(item.id)} alt='Trash button' width={18} height={18}/>
                  </TableData>
                </tr>
              )
            })}
          </tbody>
        </Table>

        <TableMobile>
          <tbody>
          {cartItems.map((item: IProduct) => {
              subTotalCart += (item?.quantity ?? 0) * item?.price
              return (  
                <tr>
                  <TableData> 
                    <ProductWrapper>
                      <Image src={item.image} alt='' width={64} height={80}/> 
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
                  <TableData> {((item?.quantity ?? 0) * item?.price).toFixed(2)} </TableData>
                  <TableData>
                    <Image src={'/img/trash.png'} onClick={() => removeItem(item.id)} alt='Trash button' width={16} height={18}/>
                  </TableData>
                </tr>
              )
            })}
          </tbody>
        </TableMobile>
        <Divisor/>
        <TotalWrapper>
          <BtnCheckout href={'/success'} onClick={() => setCartItems([])}> Finalizar Pedido </BtnCheckout>
          <div>
            <TxtTotal> Total </TxtTotal>
            <TotalPrice> R$ {subTotalCart.toFixed(2)} </TotalPrice>
          </div>
        </TotalWrapper>

        <TotalWrapperMobile>
          <WrapperPriceMobile>
            <TxtTotal> Total </TxtTotal>
            <TotalPrice> R$ {subTotalCart.toFixed(2)} </TotalPrice>
          </WrapperPriceMobile>
          <BtnCheckout href={'/success'} onClick={() => setCartItems([])}> Finalizar Pedido </BtnCheckout>
        </TotalWrapperMobile>
      </CartContainer>

    ): (
      <EmptyCart/>
    )
  )
}

export default page