import classNames from "classnames";
import { CaretRight } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MenuProducts from "./MenuProducts";

interface MenuContentProps{
  activeMenu: boolean;
  setActiveMenu: (newState: boolean) => void;
}

export default ({ activeMenu, setActiveMenu }: MenuContentProps) => {

  const { t } = useTranslation();
  const handleMenu = () => {
    setActiveMenu(false);
  }

  return(
    <div className={classNames("relative w-full bg-gray-200 overflow-hidden transition-all", {
      "h-screen": activeMenu,
      "h-0": !activeMenu
    })}>
      <div>
        <MenuProducts setActiveMenu={setActiveMenu}/>

        <Link
          to="/"
          onClick={handleMenu}
          className="hover:bg-gray-500 bg-gray-600 w-full h-20 px-5 uppercase text-white text-lg 
          font-bold flex items-center justify-between transition-colors"
        >
          {t("inicio")}

          <CaretRight
            size={18}
            weight="bold"
            className="text-orange-500"
          />
        </Link>

        <Link
          to="/historia"
          onClick={handleMenu}
          className="hover:bg-gray-500 bg-gray-600 w-full h-20 px-5 uppercase text-white text-lg 
          font-bold flex items-center justify-between transition-colors"
        >
          {t("sobre")}

          <CaretRight
            size={18}
            weight="bold"
            className="text-orange-500"
          />
        </Link>

        <Link
          to="/onde-comprar"
          onClick={handleMenu}
          className="hover:bg-gray-500 bg-gray-600 w-full h-20 px-5 uppercase text-white text-lg 
          font-bold flex items-center justify-between transition-colors"
        >
          Onde comprar?

          <CaretRight
            size={18}
            weight="bold"
            className="text-orange-500"
          />
        </Link>
        
        <Link
          to="/seja-revenda"
          onClick={handleMenu}
          className="hover:bg-gray-500 bg-gray-600 w-full h-20 px-5 uppercase text-white text-lg 
          font-bold flex items-center justify-between transition-colors"
        >
          {t("seja-revendedor")}

          <CaretRight
            size={18}
            weight="bold"
            className="text-orange-500"
          />
        </Link>

        <Link
          to="/pecas-de-reposicao"
          onClick={handleMenu}
          className="hover:bg-gray-500 bg-gray-600 w-full h-20 px-5 uppercase text-white text-lg 
          font-bold flex items-center justify-between transition-colors"
        >
          {t("pecas-de-reposicao")}

          <CaretRight
            size={18}
            weight="bold"
            className="text-orange-500"
          />
        </Link>
      </div>

      <div className="mt-10">
        {/* <div className="grid grid-cols-2 gap-5"> */}
        <div className="flex items-center justify-center">
          {/* <Link
            to="/"
            onClick={handleMenu}
            className="flex flex-col items-center gap-2 font-bold uppercase text-gray-300 
            hover:text-gray-500 transition-colors"
          >
            <UserCircle
              size={40}
              className="text-orange-500"
            />

            Minha conta
          </Link> */}

          {/* <Link
            to="/condicoes-especiais"
            onClick={handleMenu}
            className="flex flex-col items-center gap-2 font-bold uppercase text-gray-300 
            hover:text-gray-500 transition-colors"
          >
            <Tag
              size={40}
              className="text-orange-500"
            />

            {t("condicoes-especiais")}
          </Link> */}

          {/* <Link
            to="/onde-comprar"
            onClick={handleMenu}
            className="flex flex-col items-center gap-2 font-bold uppercase text-gray-300 
            hover:text-gray-500 transition-colors"
          >
            <MapPin
              size={40}
              className="text-orange-500"
            />

            Onde comprar
          </Link> */}
        </div>
      </div>
    </div>
  );
}