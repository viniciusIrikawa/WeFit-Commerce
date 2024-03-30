'use client';
import React from 'react';
import { Container, H1, BtnBack } from './styles';
import Image from 'next/image';

const page = () => {
  return (
    <Container>
        <H1> Compra realizada com sucesso! </H1>
        <Image src={'/img/success.png'} alt='Compra realizada com sucesso' width={294.96} height={307}/>
        <BtnBack href='/'> Voltar </BtnBack>
    </Container>
  )
}

export default page