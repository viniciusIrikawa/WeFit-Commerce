'use client';
import React from 'react';
import { BtnSearch, InputBar, WrapperInputBar } from './styles';
import Image from 'next/image';

const SearchBar = () => {
  return (
    <WrapperInputBar>
      <InputBar placeholder='Buscar filme pelo nome'/>
      <BtnSearch> <Image src='/img/loup.png' alt='Cart icon' width={18} height={18}/> </BtnSearch>
    </WrapperInputBar>
  )
}

export default SearchBar