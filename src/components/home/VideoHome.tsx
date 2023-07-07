import { CaretRight } from "phosphor-react";
import { useTranslation } from "react-i18next";
import VideoSettings from "../VideoSettings";

export default () => {

  const { t } = useTranslation();

  return(
    <div className="w-full my-20 px-5 md:px-7 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl uppercase text-center font-bold">
        {t("visitar-youtube")}
      </h1>

      <VideoSettings videoId={"4zsibHCIj4M"}/>

      <a 
        href="https://www.youtube.com/@laboremusbrasil"
        target="_blank"
        className="button mt-10"
      >
        <CaretRight
          size={18}
          weight="bold"
          className="text-orange-500"
        />

        {t("botao-visitar")}
      </a>
    </div>
  );
}