import Image from 'next/image';
import React from 'react';
import { Container, H1, BtnBack } from './styles';

const EmptyCart = () => {
  return (
    <Container>
        <H1> Parece que não há nada por aqui :( </H1>
        <Image src={'/img/empty_cart.png'} alt='Compra realizada com sucesso' width={447} height={265.36}/>
        <BtnBack href='/cart'> Recarregar Página </BtnBack>
    </Container>
  )
}

export default EmptyCart