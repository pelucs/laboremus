import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FacebookLogo, InstagramLogo, TiktokLogo, YoutubeLogo } from "phosphor-react";

import plucs from '../assets/icons/plucs.svg';

export default () => {

  const { t } = useTranslation();

  return(
    <div className="flex-1 bg-gray-900">
      <div className="px-5 md:px-7 py-7 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase font-bold text-white text-2xl pb-2 border-b border-gray-600">
            {t("sobre")}
          </h1>

          <div className="flex flex-col gap-3">
            <Link to="/historia" className="text-gray-300 uppercase text-sm hover:text-orange-500 transition-colors">
              {t("historia")}
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="uppercase font-bold text-white text-2xl pb-2 border-b border-gray-600">
            {t("sobre-revendas")}
          </h1>

          <div className="flex flex-col gap-3">
            <Link to="/seja-revenda" className="text-gray-300 uppercase text-sm hover:text-orange-500 transition-colors">
              {t("seja-revendedor")}
            </Link>

            {/* <Link to="/onde-comprar" className="text-gray-300 uppercase text-sm hover:text-orange-500 transition-colors">
              Localizar revendas
            </Link> */}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="uppercase font-bold text-white text-2xl pb-2 border-b border-gray-600">
            {t("produtos")}
          </h1>

          <div className="flex flex-col gap-3">
            <Link to="/linha-agricola" className="text-gray-300 uppercase text-sm hover:text-orange-500 transition-colors">
              {t("linha-agricola")}
            </Link>

            <Link to="/linha-ecologica" className="text-gray-300 uppercase text-sm hover:text-orange-500 transition-colors">
              {t("linha-ecologica")}
            </Link>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------- */}

      <div className="px-5 md:px-7 py-7 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase font-bold text-white text-2xl pb-2 border-b border-gray-600">
            {t("contato")}
          </h1>

          <div className="flex flex-col gap-3">
            <a href="tel:8333353555" className="text-gray-300 hover:text-orange-500 transition-colors">
              (83) 3335 3555
            </a>

            <a href="tel:8308000833555" className="text-gray-300 hover:text-orange-500 transition-colors">
              (83) 0800 083 3555
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="uppercase font-bold text-white text-2xl pb-2 border-b border-gray-600">
            {t("localizacao")}
          </h1>

          <p className="text-gray-300 uppercase text-sm">
            Rua Dep. Raimundo Asfora, 3400 | Distrito Industrial do Velame <br></br>
            Campina Grande - PB | CEP: 58420-000
          </p>
        </div>


        <div className="flex flex-col gap-4">
          <h1 className="uppercase font-bold text-white text-2xl pb-2 border-b border-gray-600">
            {t("redes-sociais")}
          </h1>

          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/laboremusindustria/" 
              target="_blank"
              className="w-10 h-10 text-gray-300 hover:text-orange-500 transition-colors 
              bg-gray-700 rounded flex items-center justify-center"
            >
              <InstagramLogo
                size={30}
              />
            </a>

            <a 
              href="https://www.facebook.com/" 
              target="_blank"
              className="w-10 h-10 text-gray-300 hover:text-orange-500 transition-colors 
              bg-gray-700 rounded flex items-center justify-center"
            >
              <FacebookLogo
                size={30}
              />
            </a>

            <a 
              href="https://www.youtube.com/@laboremusbrasil" 
              target="_blank"
              className="w-10 h-10 text-gray-300 hover:text-orange-500 transition-colors 
              bg-gray-700 rounded flex items-center justify-center"
            >
              <YoutubeLogo
                size={30}
              />
            </a>

            <a 
              href="https://www.tiktok.com/@laboremusindustria" 
              target="_blank"
              className="w-10 h-10 text-gray-300 hover:text-orange-500 transition-colors 
              bg-gray-700 rounded flex items-center justify-center"
            >
              <TiktokLogo
                size={30}
              />
            </a>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------- */}

      <div className="px-5 md:px-7 py-5 bg-black flex flex-col gap-5 md:gap-0 md:flex-row items-center 
      justify-between text-gray-300">
        <h1 className="text-center text-xs md:text-sm">
          {t("copy")}
        </h1>
        
        <h1 className="flex items-center gap-1 text-xs md:text-sm font-medium">
          {t("dev")} <a href="https://pelucs.com/" target="_blank"><img src={plucs} className="w-[55px] relative bottom-[2px]"/></a>
        </h1>
      </div>
    </div>
  );
}