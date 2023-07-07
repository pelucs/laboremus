import Header from "../components/header/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import SubHeader from "../components/header/SubHeader";
import WarningModal from "../components/warning-modal/WarningModal";
import FinalClientContent from "../components/client/FinalClientContent";

export default () => {
  
  document.documentElement.scrollTop = 0;

  return(
    <div className="min-h-screen">
      {/* <WarningModal/> */}
      <FloatingButtons/>
      <Header/>
      <SubHeader/>
      <FinalClientContent/>
      <Footer/>
    </div>
  );
}