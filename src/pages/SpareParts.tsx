import { useParams } from "react-router-dom";

import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Loading from "../components/Loading";
import SubHeader from "../components/header/SubHeader";
import SparePartsContent from "../components/product-overview/SparePartsContent";

export default () => {

  document.documentElement.scrollTop = 0;
  
  const { slug } = useParams<{ slug: string }>();

  return(
    <>
      <FloatingButtons/>
      <Header/>
      <SubHeader/>
      {
        slug ? <SparePartsContent slug={slug}/>
        : <Loading/>
      }
      <Footer/>
    </>
  );
}