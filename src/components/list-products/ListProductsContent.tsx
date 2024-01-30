import classNames from "classnames";

import { useEffect, useState } from "react";

import FilteringModal from "./FilteringModal";
import ListCategory from "./ListCategory";

import { X } from "phosphor-react";
import { useTranslation } from "react-i18next";

interface ProductsProps{
  lineProducts: string;
}

export default ({ lineProducts }: ProductsProps) => {

  const { t } = useTranslation();

  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);

  //REMOVENDO PRODUTO DO FILTRO
  const removeFilter = (product: string) => {
    let filtered = filteredProducts.filter(item => item !== product); 

    setFilteredProducts(filtered);
  }

  useEffect(() => {
    document.title = `${lineProducts === "linha-agricola" ? "Linha Agrícola" : "Linha Ecológica"} - Indústria Laboremus`;
  }, [lineProducts]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [filteredProducts]);

  return(
    <div className="min-h-screen pb-20">
      <div className="bg-gray-50 border-b border-gray-200/50">
        <div className="w-full h-14 md:h-20 px-5 md:px-7 flex items-center justify-between z-50">
          <strong className="text-xl md:text-4xl capitalize">
            {lineProducts === "linha-agricola" ? t("linha-agricola") : t("linha-ecologica")}
          </strong>

          <FilteringModal 
            category={lineProducts} 
            filtered={filteredProducts} 
            handleFiltered={setFilteredProducts}
          />
        </div>

        <div className={classNames("max-w-screen h-14 px-5 md:px-7 bg-gray-100 flex items-center justify-between overflow-hidden transition-all", {
          "h-14": filteredProducts.length > 0,
          "h-0": filteredProducts.length === 0
        })}>
          <div className="max-w-screen h-full flex items-center gap-5 overflow-x-auto">
            <h1 className="text-base text-gray-400">
              {t("filtros")}
            </h1>

            <hr className="w-[1px] h-5 bg-gray-400"></hr>

            <div className="max-w-screen h-full flex items-center gap-5 overflow-x-auto">
              {filteredProducts.map((product, key) => (
                <div 
                  key={key}
                  className="h-7 px-3 rounded flex items-center gap-1 bg-gray-100 shadow-sm"
                >
                  <h1 className="text-sm text-gray-400 capitalize">
                    {product}
                  </h1>
    
                  <button onClick={() => removeFilter(product)}>
                    <X
                      size={15}
                      weight="bold"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setFilteredProducts([])}
            className="text-sm text-gray-400 h-7 px-2 rounded flex items-center bg-gray-100
            hover:shadow-sm"
          >
            {t("limpar")}
          </button>
        </div>
      </div>

      <ListCategory 
        line={lineProducts}
        filtered={filteredProducts}
        handleFiltered={setFilteredProducts}
      />
    </div>
  );
}