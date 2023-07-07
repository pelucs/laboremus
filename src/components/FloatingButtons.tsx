import classNames from "classnames";
import { CaretUp, WhatsappLogo } from "phosphor-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default () => {

  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;

    if(scroll > 350){
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  });

  return(
    <div className="flex flex-col items-end gap-2 fixed right-5 bottom-5 z-20">
      <button 
        onClick={() => document.documentElement.scrollTop = 0}
        className={classNames("w-10 md:w-14 h-10 md:h-14 p-1 md:p-0 rounded flex items-center justify-center text-white bg-orange-600 focus:outline outline-2 outline-offset-2 outline-orange-600 transition-transform", {
        "scale-100": activeButton,
        "scale-0": !activeButton
        })}
      >
        <CaretUp weight="bold" size={30}/>
      </button>
      
      <div className="group">
        <a 
          href="https://wa.me/5583998270016" 
          target="_blank"
          className="w-14 h-14 rounded-md bg-green-600 flex items-center justify-center 
          hover:bg-green-700 transition-all text-lg text-white group-hover:w-auto
          group-hover:px-4 group-hover:gap-3"  
        >
          <span className="w-0 overflow-hidden group-hover:w-auto transition-all">
            {t("fale-conosco")}
          </span>

          <WhatsappLogo
            size={40}
            weight="light"
            className="text-white"
          />
        </a>
      </div>
    </div>
  );
}