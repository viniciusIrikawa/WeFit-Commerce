'use client';
import React, { useContext, useState } from 'react';
import { BtnSearch, InputBar, WrapperInputBar } from './styles';
import Image from 'next/image';
import { PRODUCTS } from '@/services/axiosBaseUrl';
import { ProductContext } from '@/Context/ContextProducts';
import toast from 'react-hot-toast';
import { getProducts } from '@/services/products/products';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products, setProducts } = useContext(ProductContext);

  const searchMovie = async () => {
    try {
      const response = await PRODUCTS.get(`/products`, {
        params: {
          title: searchTerm,
        }
      });

      if(response.data.length > 0) {
        setProducts(response.data);
      }else{
        toast.error('Could not find the product.');
        const allProducts = await getProducts();
        setProducts(allProducts);
      }

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