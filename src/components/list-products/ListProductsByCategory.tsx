import { useGetProductsByCategoryQuery } from "../../graphql/generated";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import Loading from "../Loading";
import i18next from "i18next";
import { CaretRight } from "phosphor-react";

interface TestProps{
  category: string;
}

export default ({ category }: TestProps) => {

  const { t } = useTranslation();
  const [lang, setLang] = useState<string>("");
  
  useEffect(() => {
    let currentLang = i18next.language;

    if(currentLang){
      setLang(currentLang);
    }
  }, [i18next.language]);

  const { data } = useGetProductsByCategoryQuery({
    variables: { category: category }
  });
  
  if(!data || !data.products){
    return <Loading/>
  }

  return(
    <div className="py-14 border-b border-zinc-300">
      <h1 className="text-3xl uppercase font-bold text-center md:text-left">
        {category === "compostagem" || category === "offshore" ? `Triturador ${category}` : category}
      </h1>

      <div className={`w-full mt-5 grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 md:gap-10`}>
        {data.products.map(product => (
          <Link 
            key={product.id}
            className="hover:opacity-50 transition-all relative flex flex-col items-center"
            to={`/${ product.line === "linha agrícola" ? "linha-agricola" : "linha-ecologica"}/${product.slug}`}
          >
            {product.slug === "brava" || product.slug === "brava2" || product.slug === "mc1001n" || product.slug === "mc3n" || product.slug === "fp1001n" || product.slug === "mtcn" || product.category === "pesagem" || product.category === "ensiladeira" || product.slug === "sbl35n" || product.slug === "tcg15eco" ? (
              <strong className="py-1 px-2 uppercase text-xs bg-orange-500 text-white
              absolute top-3 left-2 animate-bounce z-10">
                {t("destaque")}
              </strong>
              ) : (
              <div/>
            )}

            <div className="h-[280px] rounded flex items-center justify-center overflow-hidden">
              <img className="scale-110" src={product.image[0].url}/>
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              {product.name}
            </h1>

            <button className="button mt-5">
              <CaretRight
                size={18}
                weight="bold"
                className="text-orange-500"
              />

              {t("botao-conhecer")}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}