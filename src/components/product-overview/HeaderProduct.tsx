import { Link } from "react-router-dom";
import { IProducts } from "../../types";
import { CaretRight, Gear } from "phosphor-react";
import { useTranslation } from "react-i18next";

interface HeaderProductProps{
  product: IProducts
}

export default ({ product }: HeaderProductProps) => {

  const { t } = useTranslation();

  return(
    <div className="w-full h-16 px-5 md:px-7 py-5 border-b  flex items-center justify-between">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl md:text-4xl font-bold flex items-center gap-2">
          {product.category === "offshore" || product.category ===  "compostagem" 
          ? "Triturador" 
          : product.category.split('')[0].toUpperCase() + product.category.substring(1, product.category.length)} {product.name}
        </h1>

        <div className="hidden md:flex items-center gap-2 underline">
          <Link to={`/${product.line}`} className="hover:text-orange-500 transition-colors capitalize">
            {product.line}
          </Link>

          <CaretRight size={18}/>

          <Link to={`/${product.line}/${product.slug}`} className="hover:text-orange-500 transition-colors capitalize">
            {product.name}
          </Link>
        </div>
      </div>

      <Link 
        to={`/${product.line === "linha agrícola" ? "linha-agricola" : "linha-ecologica"}/${product.slug}/pecas-de-reposicao`}
        className="button py-3 px-4"
      >
        <Gear size={20} className="text-orange-500"/>

        <span className="hidden md:block">{t("pecas-de-repo")}</span>
      </Link>
    </div>
  );
}