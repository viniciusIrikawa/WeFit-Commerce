import Image from 'next/image';
import React from 'react';
import { Container, H1, BtnBack } from './styles';
import { useRouter } from 'next/navigation';

const EmptyCart = () => {

  const router = useRouter();

  const reloadPage = () => {
    router.refresh();
  };

  return (
    <Container>
        <H1> Parece que não há nada por aqui :( </H1>
        <Image src={'/img/empty_cart.png'} alt='Compra realizada com sucesso' width={447} height={265.36}/>
        <BtnBack onClick={reloadPage} href='/cart'> Recarregar Página </BtnBack>
    </Container>
  )
}

export default EmptyCart