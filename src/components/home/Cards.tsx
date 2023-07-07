import { useTranslation } from "react-i18next";

import pionnerism from "../../assets/icons/pionnerism.svg";
import quality from "../../assets/icons/quality.svg";
import inovation from "../../assets/icons/inovation.svg";

export default () => {

  const { t } = useTranslation();

  return(
    <div className="w-full mt-20 px-5 md:px-7">
      <h1 className="text-2xl md:text-4xl uppercase text-center font-bold">
        {t("title-cards")}
      </h1>

      <div className="mt-16 flex flex-col items-center md:grid md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center">
          <img loading="lazy" src={pionnerism} className="w-[40px]"/>

          <h1 className="text-2xl mt-5 font-bold">
            {t("pioneirismo")}
          </h1>

          <p className="text-gray-300 mt-3">
            {t("pioneirismo-short-desc")}
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img loading="lazy" src={inovation} className="w-[40px]"/>

          <h1 className="text-2xl mt-5 font-bold">
            {t("inovacao")}
          </h1>

          <p className="text-gray-300 mt-3">
            {t("inovacao-short-desc")}
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img loading="lazy" src={quality} className="w-[40px]"/>

          <h1 className="text-2xl mt-5 font-bold">
            {t("qualidade")}
          </h1>

          <p className=" text-gray-300 mt-3">
            {t("qualidade-short-desc")}
          </p>        
        </div>
      </div>
    </div>
  );
}