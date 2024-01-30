import { useParams } from "react-router-dom";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Loading from "../components/Loading";
import ListProductsContent from "../components/list-products/ListProductsContent";

export default () => {

  document.documentElement.scrollTop = 0;

  const { line } = useParams<{ line: string} >();

  return(
    <>
      <FloatingButtons/>
      <Header/>
      {
        line ? <ListProductsContent lineProducts={line} />
        : <Loading/>
      }
      <Footer/>
    </>
  );
}