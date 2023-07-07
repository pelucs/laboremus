import { useEffect } from "react";
import Brands from "./Brands";
import Cards from "./Cards";
import FeaturedMachine from "./FeaturedMachine";
import Feedbacks from "./Feedbacks";
import Products from "./Products";
import SlideProduct from "./SlideProduct";
import Trending from "./Trending";
import Video from "./VideoHome";
import Intro from "./Intro";

export default () => {

  return(
    <>
      <Intro/>
      <Trending/>
      <Cards/>
      <SlideProduct/>
      <FeaturedMachine/>
      <Products/>
      <Brands/>
      <Feedbacks/>
      <Video/>
    </>
  );
}