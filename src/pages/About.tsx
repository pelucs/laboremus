import Header from "../components/header/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import SubHeader from "../components/header/SubHeader";
import AboutContent from "../components/about/AboutContent";

export default () => {

  document.documentElement.scrollTop = 0;

  return(
    <div className="min-h-screen">
      <FloatingButtons/>
      <Header/>
      <SubHeader/>
      <AboutContent/>
      <Footer/>
    </div>
  );
}