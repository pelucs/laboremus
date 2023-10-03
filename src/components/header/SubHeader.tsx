import classNames from "classnames";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default () => {

  const { t } = useTranslation();

  return(
    <div
      className="hidden md:block w-full h-[60px] bg-black transition-all duration-700 border-b
      border-orange-500 overflow-hidden">
      <div className="px-7 flex justify-between">
        <div className="flex h-full">
          <Link 
            to="/" 
            className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold text-xs 
            text-gray-300 pr-4 hover:pl-4 hover:bg-gray-700 hover:text-white transition-all"
          >
            {t("inicio")}
          </Link>

          <Link 
            to="/historia" 
            className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold text-xs 
            text-gray-300 px-4 hover:bg-gray-700 hover:text-white transition-colors"
          >
            {t("sobre")}
          </Link>

          <Link 
            to="/onde-comprar" 
            className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold text-xs 
            text-gray-300 px-4 hover:bg-gray-700 hover:text-white transition-colors"
          >
            Onde comprar
          </Link>

          <Link 
            to="/seja-revenda" 
            className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold text-xs 
            text-gray-300 px-4 hover:bg-gray-700 hover:text-white transition-colors"
          >
            {t("seja-revendedor")}
          </Link>

          <Link 
            to="/pecas-de-reposicao" 
            className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold text-xs 
            text-gray-300 px-4 hover:bg-gray-700 hover:text-white transition-colors"
          >
            {t("pecas-de-reposicao")}
          </Link>
        </div>

        <div className="flex h-full">
          <Link 
            to="/linha-agricola" 
            className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold px-4
            text-gray-300 border-l border-gray-600 hover:bg-gray-700 transition-colors
            hover:text-white"
          >
            {t("linha-agricola")}
          </Link>

          <Link 
            to="/linha-ecologica" 
            className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold px-4
            text-gray-300 border-x border-gray-600 hover:bg-gray-700 transition-colors
            hover:text-white"
          >
            {t("linha-ecologica")}
          </Link>
        </div>
        
      </div>
    </div>
  );
}