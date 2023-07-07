import { useParams } from "react-router-dom";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Loading from "../components/Loading";
import ListProductsContent from "../components/list-products/ListProductsContent";
import SubHeader from "../components/header/SubHeader";

export default () => {

  document.documentElement.scrollTop = 0;

  const { line } = useParams<{ line: string} >();

  return(
    <>
      <FloatingButtons/>
      <Header/>
      <SubHeader/>
      {
        line ? <ListProductsContent lineProducts={line} />
        : <Loading/>
      }
      <Footer/>
    </>
  );
}