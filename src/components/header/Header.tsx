import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import Menu from '../menu/Menu';
import MenuContent from '../menu/MenuContent';
import Language from '../Language';
import Search from '../Search';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export default () => {

  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const { t } = useTranslation();

  return(
    <>
      <div className="w-full sticky top-0 left-0 z-40">
        <div className="w-full h-16 px-5 md:px-7 bg-black flex items-center 
        justify-between z-40 border-b border-gray-500">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo Laboremus"
              className="w-[120px] md:w-[150px]"
            />
          </Link>

          <div className="flex items-center gap-4">
            <Search/>
            <Language/>
            <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
          </div>

        </div>

        {/* SUBHEADER */}
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
            </div>

            <div className="flex">
              <Link 
                to="/linha-agricola" 
                className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold text-xs 
                text-gray-300 px-4 hover:bg-gray-700 hover:text-white transition-colors"
              >
                {t("linha-agricola")}
              </Link>

              <Link 
                to="/linha-ecologica" 
                className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold text-xs 
                text-gray-300 px-4 hover:bg-gray-700 hover:text-white transition-colors"
              >
                {t("linha-ecologica")}
              </Link>

              <Link 
                to="/pecas-de-reposicao" 
                className="h-[60px] flex items-center justify-center gap-3 uppercase font-bold text-xs 
                text-gray-300 px-4 hover:bg-gray-700 hover:text-white transition-colors"
              >
                {t("pecas-de-reposicao")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link 
        to="/linha-agricola/avohay" 
        className="w-full py-4 px-5 flex items-center justify-center gap-2 text-xl text-center leading-none text-white
        hover:opacity-95 transition-opacity bg-gradient-to-r to-green-600 from-orange-500"
      >
        A Laboremus aceita o desafio e lança a primeira colheitadeira de palma do mundo.

        <span className="hidden md:flex items-center gap-1 underline">
          Ver mais

          <ArrowRight size={18}/>
        </span>
      </Link>

      <MenuContent activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
    </>
  );
}