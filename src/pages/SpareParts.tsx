import { useParams } from "react-router-dom";

import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Loading from "../components/Loading";
import SparePartsSingle from "../components/product-overview/SparePartsSingle";

export default () => {

  document.documentElement.scrollTop = 0;
  
  const { slug } = useParams<{ slug: string }>();

  return(
    <>
      <FloatingButtons/>
      <Header/>
      {
        slug ? <SparePartsSingle slug={slug}/>
        : <Loading/>
      }
      <Footer/>
    </>
  );
}