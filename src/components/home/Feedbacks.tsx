import classNames from "classnames";

import { CaretDown } from "phosphor-react";
import { useState } from "react";

import chico from '../../assets/chico.jpg';
import casaAgri from '../../assets/casa-do-agri.jpg';
import irrigacao from '../../assets/nord-irrigacao.jpg';
import rancho from '../../assets/rancho-alegre.jpg';
import { useTranslation } from "react-i18next";

interface FeedbacksType {
  name: string;
  type: string;
  message: string;
  img: string;
}

export default () => {
  
  const { t } = useTranslation();
  const [activeFeedbacks, setActiveFeedbacks] = useState<boolean>(false);

  const feedbacks: FeedbacksType[] = [
    {
      name: "Casa do Agricultor",
      type: t("revenda"),
      message: t("comentario-revenda-1"),
      img: casaAgri,
    },
    {
      name: "Chico Queiroz",
      type: t("revenda"),
      message: t("comentario-revenda-2"),
      img: chico,
    },
    {
      name: "Lojas Rancho Alegre",
      type: t("revenda"),
      message: t("comentario-revenda-3"),
      img: rancho,
    },
    {
      name: "Nordeste Irrigação",
      type: t("revenda"),
      message: t("comentario-revenda-4"),
      img: irrigacao,
    },
  ];

  return(
    <div className="w-full px-5 md:px-7 mt-10 md:my-20 relative border-b border-gray-200/50">
      <div className="w-full h-28 block md:hidden bg-gradientFeedbacks absolute bottom-0 left-0"></div>

      <button 
        onClick={() => setActiveFeedbacks(!activeFeedbacks)}
        className="block md:hidden p-2 rounded-full bg-orange-500 absolute -bottom-5 left-1/2 -translate-x-1/2
      hover:bg-orange-600 transition-colors"
      >
        <CaretDown 
          size={23}
          className={classNames("text-white transform transition-all", {
            "rotate-180": activeFeedbacks,
            "rotate-0": !activeFeedbacks
          })}
        />
      </button>

      <h1 className="text-2xl md:text-4xl uppercase text-center font-bold">
        {t("feedback-title")}
      </h1>

      <div className={classNames("mt-10 md:mt-16 pb-20 md:pb-0 md:px-2 grid grid-cols-1 md:grid-cols-4 gap-5 overflow-hidden", {
        "h-auto": activeFeedbacks,
        "h-[350px]": !activeFeedbacks
      })}>
        {
          feedbacks.map(feed => (
            <div key={feed.name} className="card">
              <div className="flex items-center gap-3">
                <img className="w-8 rounded-full" src={feed.img} alt={feed.name} loading="lazy"/>

                <div>
                  <strong>
                    {feed.name}
                  </strong>

                  <p className="text-sm text-gray-300">
                    {feed.type}
                  </p>
                </div>
              </div>

              <div>
                <p className="mt-3">
                  {feed.message}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}