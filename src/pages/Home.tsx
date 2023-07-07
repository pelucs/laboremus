import { useEffect } from "react";

import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import HomeContents from "../components/home/HomeContents";

export default () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return(
    <div className="min-h-screen">
      <FloatingButtons/>
      <Header/>
      <HomeContents/>
      <Footer/>
    </div>
  );
}