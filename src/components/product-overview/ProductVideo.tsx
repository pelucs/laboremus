import { t } from "i18next";
import VideoSettings from "../VideoSettings";
import { useTranslation } from "react-i18next";
import { CaretRight } from "phosphor-react";

interface ProductVideoProps{
  id: string;
}

export default ({ id }: ProductVideoProps) => {

  const { t } = useTranslation();

  return(
    <div className="mt-14 w-full flex flex-col items-center">
      <strong className="text-2xl md:text-4xl uppercase font-bold text-center">
        {t("video-maquina")}
      </strong>

      <VideoSettings videoId={id}/>

      <a 
        target="_blank"
        className="button mt-5"
        href={`https://www.youtube.com/watch?v=${id}`}
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