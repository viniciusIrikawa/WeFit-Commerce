import CardProduct from "@/components/card-product/CardProduct";
import Header from "@/components/header/Header";
import SearchBar from "@/components/search-bar/SearchBar";

export default function Home() {
  return (
    <main>
      <Header/>
      <SearchBar/>
      <CardProduct/>
    </main>
  );
}
