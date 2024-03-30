'use client';
import CardProduct from "@/components/card-product/CardProduct";
import SearchBar from "@/components/search-bar/SearchBar";
import { useEffect, useState } from "react";
import { getProducts } from '../services/products/products'
import { IProduct } from "@/@Types/product";
import { ProductsContainer } from './styles';
import Spinner from "@/components/spinner/Spinner";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
      
    } catch (error) {
      console.log('Something went wrong.');
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <main>
      <SearchBar/>
      <ProductsContainer>
        {loading ? ( 
          <Spinner/> 
        ) : products.map(item=> (
          <CardProduct key={item.id} image={item.image} price={item.price} title={item.title}/>
        ))}
      </ProductsContainer>
    </main>
  );
}
