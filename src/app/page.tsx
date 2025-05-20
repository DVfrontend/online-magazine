import Category from "./product-pages/page";
import Products from "@/components/ui/products";
import Carousel from "@/components/ui/carousel";
export default function Home() {
  return (
    <>
      <Carousel />
      <Category />
      <Products />
    </>
  );
}
