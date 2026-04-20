import FoodRadioSlider from "./layouts/components/FoodRadioSlider";
import { Hero } from "./layouts/components/Hero";
import ProductList from "./layouts/components/ProductList";
import Feed from "./layouts/components/Feed";

export default async function Home() {
  return (
    <>
    <Hero/>
    <FoodRadioSlider/>
    <Feed/>
    </>
  );
}
