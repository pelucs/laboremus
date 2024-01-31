import { ArrowDown, Phone } from "phosphor-react";
import { useTranslation } from "react-i18next";

export default () => {

  const { t } = useTranslation();

  return(
    <div className="w-full h-[80vh] md:h-screen px-5 bg-[url(/bg1.png)] md:bg-[url(/bg.png)] bg-bottom md:bg-center bg-cover flex flex-col items-center">
      <h1 className="pt-14 text-4xl md:text-6xl text-center font-bold">
        Há Um Século Cultivando <br/>
        Inovação e Qualidade
      </h1>

      <h2 className="mt-2 text-2xl text-center">
        Desde 1924 a máquina do agronegócio.
      </h2>

      <div className="mt-5 grid grid-cols-2 gap-5">
        <button className="button">
          Conhecer produtos 
          
          <ArrowDown size={16} className="text-orange-500"/>
        </button>

        <a 
          target="_blank"
          className="button"
          href="https://api.whatsapp.com/send/?phone=5583998270016&text&type=phone_number&app_absent=0" 
        >
          <Phone size={18} className="text-orange-500"/>
          
          Alguma dúvida?
        </a>
      </div>
    </div>
  );
}