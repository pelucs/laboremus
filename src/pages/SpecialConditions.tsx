import { useTranslation } from "react-i18next"
import FloatingButtons from "../components/FloatingButtons"
import Footer from "../components/Footer"
import Header from "../components/header/Header"
import SubHeader from "../components/header/SubHeader"

export default () => {

  const { t } = useTranslation();

  return(
    <div>
      <FloatingButtons/>
      <Header/>
      <SubHeader/>

      <div className="w-full h-screen px-5 md:px-7 flex items-center justify-center">
        <strong className="text-2xl md:text-4xl uppercase text-center">
          {t("condicoes-especiais-desc")}
        </strong>
      </div>

      <Footer/>
    </div>
  )
}