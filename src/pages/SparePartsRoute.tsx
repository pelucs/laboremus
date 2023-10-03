import Header from "../components/header/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import SubHeader from "../components/header/SubHeader";
import WorkContent from "../components/work/WorkContent";
import SparePartsContent from "../components/spareparts/SparePartsContent";

export default () => {
  
  document.documentElement.scrollTop = 0;

  return(
    <div className="min-h-screen">
      <FloatingButtons/>
      <Header/>
      <SubHeader/>
      <SparePartsContent/>
      <Footer/>
    </div>
  );
}