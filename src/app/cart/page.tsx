'use client'
import React from 'react';
import { CartContainer, Table, TableHeader, TableData, Divisor, BtnCheckout, TotalWrapper, TxtTotal, Price } from './styles';

const page = () => {
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
          <tr>
            <TableData> Homem Aranha</TableData>
            <TableData> 2 </TableData>
            <TableData> R$29.99 </TableData>
            <TableData> excluir  </TableData>
          </tr>
          <tr>
            <TableData> Homem Aranha</TableData>
            <TableData> 2 </TableData>
            <TableData> R$29.99 </TableData>
            <TableData> excluir  </TableData>
          </tr>
          <tr>
            <TableData> Homem Aranha</TableData>
            <TableData> 2 </TableData>
            <TableData> R$29.99 </TableData>
            <TableData> excluir  </TableData>
          </tr>
        </tbody>
      </Table>
      <Divisor/>
      <TotalWrapper>
        <BtnCheckout> Finalizar Pedido </BtnCheckout>
        <div>
          <TxtTotal> Total </TxtTotal>
          <Price> R$ 29,99</Price>
        </div>
      </TotalWrapper>
    </CartContainer>
  )
}

export default page