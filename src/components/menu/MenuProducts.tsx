import classNames from "classnames";
import { CaretDown, CaretRight } from "phosphor-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface MenuProductsProps{
  setActiveMenu: (newState: boolean) => void;
}

export default ({ setActiveMenu }: MenuProductsProps) => {

  const { t } = useTranslation();
  const [activeProducts, setActiveProducts] = useState<boolean>(true);
  
  const handleMenuProducts = () => {
    setActiveMenu(false);
  }

  return(
    <div>
      <button 
        onClick={() => setActiveProducts(!activeProducts)}
        className="bg-gray-700 w-full h-20 px-5 uppercase text-white text-2xl font-bold
        flex items-center justify-between"
      >
          {t("produtos")}

          <CaretDown
            size={18}
            weight="bold"
            className={classNames("text-orange-500 transition-all", {
              "rotate-180": activeProducts,
              "rotate-0": !activeProducts
            })}
          />
        </button>

        <div className={classNames("transition-all overflow-hidden", {
          "h-[160px]": activeProducts,
          "h-0": !activeProducts
        })}>
          <Link
            to="/linha-agricola"
            onClick={handleMenuProducts}
            className="bg-gray-200 w-full h-20 px-5 uppercase text-gray-500 text-lg 
            font-bold flex items-center justify-between transition-colors border-b border-gray-100
            hover:text-black"
          >
            <div className="flex flex-col">
              <h1>
                {t("linha-agricola")}
              </h1>

              <p className="text-sm capitalize font-normal">
                {t("desc-agricola")}
              </p>
            </div>

            <CaretRight
              size={18}
              weight="bold"
              className="text-orange-500"
            />
          </Link>

          <Link
            to="/linha-ecologica"
            onClick={handleMenuProducts}
            className="bg-gray-200 w-full h-20 px-5 uppercase text-gray-500 text-lg 
            font-bold flex items-center justify-between transition-colors hover:text-black"
          >
            <div className="flex flex-col">
              <h1>
                {t("linha-ecologica")}
              </h1>

              <p className="text-sm capitalize font-normal">
                {t("desc-ecologica")}
              </p>
            </div>

            <CaretRight
              size={18}
              weight="bold"
              className="text-orange-500"
            />
          </Link>
        </div>
    </div>
  );
}