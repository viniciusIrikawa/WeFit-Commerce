'use client';
import CardProduct from "@/components/card-product/CardProduct";
import SearchBar from "@/components/search-bar/SearchBar";
import { useContext, useEffect, useState } from "react";
import { getProducts } from '../services/products/products'
import { ProductsContainer } from './styles';
import Spinner from "@/components/spinner/Spinner";
import { ProductContext } from "@/Context/ContextProducts";

export default function Home() {
  const [loading, setLoading] = useState<Boolean>(false);
  const { products, setProducts } = useContext(ProductContext);

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
        ) : products.map(item => (
          <CardProduct key={item.id} items={item}/>
        ))}
      </ProductsContainer>
    </main>
  );
}
