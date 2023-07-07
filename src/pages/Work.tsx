import Header from "../components/header/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import SubHeader from "../components/header/SubHeader";
import WorkContent from "../components/work/WorkContent";
import WarningModal from "../components/warning-modal/WarningModal";

export default () => {
  
  document.documentElement.scrollTop = 0;

  return(
    <div className="min-h-screen">
      {/* <WarningModal/> */}
      <FloatingButtons/>
      <Header/>
      <SubHeader/>
      <WorkContent/>
      <Footer/>
    </div>
  );
}