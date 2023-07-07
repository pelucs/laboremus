import { useParams } from "react-router-dom";

import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Loading from "../components/Loading";
import ProductOverviewContent from "../components/product-overview/ProductOverviewContent";
import SubHeader from "../components/header/SubHeader";

export default () => {

  window.scrollTo(0, 0)
  
  const { slug } = useParams<{ slug: string }>();

  return(
    <>
      <FloatingButtons/>
      <Header/>
      <SubHeader/>
      {
        slug ? <ProductOverviewContent slug={slug}/>
        : <Loading/>
      }
      <Footer/>
    </>
  );
}