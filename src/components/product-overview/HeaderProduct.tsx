import { Link } from "react-router-dom";
import { IProducts } from "../../types";
import { Eye, Gear } from "phosphor-react";
import { useTranslation } from "react-i18next";

import Loading from "../Loading";
interface HeaderProductProps{
  product: IProducts
}

export default ({ product }: HeaderProductProps) => {

  const { t } = useTranslation();

  return(
    <div className="w-full h-16 px-5 md:px-7 py-3 flex items-center justify-between">
      {product.sticker ? (
        <img src={product.sticker.url} className="w-32"/>
      ) : (
        <div/>
      )}

      <div className="h-full flex items-center gap-2">
        <Link 
          to={`/${product.line === "linha agrícola" ? "linha-agricola" : "linha-ecologica"}/${product.slug}`}
          className="button"
        >
          <Eye size={20} className="text-orange-500"/>
          
          <span className="hidden md:block">{t("visao-geral")}</span>
        </Link>

        <Link 
          to={`/${product.line === "linha agrícola" ? "linha-agricola" : "linha-ecologica"}/${product.slug}/pecas-de-reposicao`}
          className="button"
        >
          <Gear size={20} className="text-orange-500"/>

          <span className="hidden md:block">{t("pecas-de-repo")}</span>
        </Link>
      </div>
    </div>
  );
}