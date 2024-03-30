'use client';
import CardProduct from "@/components/card-product/CardProduct";
import SearchBar from "@/components/search-bar/SearchBar";
import { useEffect, useState } from "react";
import { getProducts } from '../services/products/products'
import { IProduct } from "@/@Types/product";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getData = async () => {
    const data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <main>
      <SearchBar/>
      {products.map(item=> (
        <CardProduct key={item.id} image={item.image} price={item.price} title={item.title}/>

      ))}
    </main>
  );
}
