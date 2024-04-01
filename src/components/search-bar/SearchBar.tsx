'use client';
import React, { useContext, useState } from 'react';
import { BtnSearch, InputBar, WrapperInputBar } from './styles';
import Image from 'next/image';
import { PRODUCTS } from '@/services/axiosBaseUrl';
import { ProductContext } from '@/Context/ContextProducts';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setProducts } = useContext(ProductContext);

  const searchMovie = async () => {
    try {
      const response = await PRODUCTS.get(`/products`, {
        params: {
          title: searchTerm,
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.log('Could not find the movie.');
    }
  };

  return (
    <WrapperInputBar>
      <InputBar placeholder='Buscar filme pelo nome' onChange={(e) => setSearchTerm(e.target.value)}/>
      <BtnSearch onClick={searchMovie}> <Image src='/img/loup.png' alt='Cart icon' width={18} height={18}/> </BtnSearch>
    </WrapperInputBar>
  )
}

export default SearchBar