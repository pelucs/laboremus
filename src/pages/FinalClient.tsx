import Header from "../components/header/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import FinalClientContent from "../components/client/FinalClientContent";

export default () => {
  
  document.documentElement.scrollTop = 0;

  return(
    <div className="min-h-screen">
      <FloatingButtons/>
      <Header/>
      <FinalClientContent/>
      <Footer/>
    </div>
  );
}