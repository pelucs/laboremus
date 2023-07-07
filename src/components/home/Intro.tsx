import { CaretRight } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import avohay from '../../../public/video-avohay.mp4';

export default () => {

  const { t } = useTranslation();

  return(
    <div className="w-full mt-[60px] md:mt-[124px] md:h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <video autoPlay loop className="absolute inset-0 max-w-max md:w-full">
        <source src={avohay} type="video/mp4"/>
      </video>

      <div className="w-full h-full bg-gradient-to-l to-black from-transparent
      px-5 md:px-7 py-32 md:py-10 flex flex-col gap-5 justify-center text-white z-10">
        <strong className="text-4xl md:text-7xl w-full max-w-2xl">
          {t("primeira-cp")}
        </strong>

        <p className="text-xl md:text-2xl w-full max-w-2xl">
          {t("desc-cp")}
        </p>

        <Link to="/linha-agricola/avohay" className="button">
          <CaretRight size={18} weight="bold" className="text-orange-500"/>

          {t("botao-conhecer")}
        </Link>
      </div>
    </div>
  );
}