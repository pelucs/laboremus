import { useGetProductBySlugQuery } from "../../graphql/generated";
import { useEffect, useState } from "react";

import Loading from "../Loading";
import ImageProduct from "./ImageProduct";
import HeaderProduct from "./HeaderProduct";
import Production from "./Production";
import SameCategory from "./SameCategory";
import Specifications from "./Specifications";
import ProductVideo from "./ProductVideo";

import { useTranslation } from "react-i18next";
import { Warning } from "phosphor-react";

interface ProductOverviewProps{
  slug: string;
}

export default ({ slug }: ProductOverviewProps) => {

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { data } = useGetProductBySlugQuery({
    variables: {
      slug: slug
    }
  });
  const [lang, setLang] = useState<string>("");

  useEffect(() => setLang(i18n.language), [i18n.language]);

  if(!data || !data.product){
    return <Loading/>
  }

  return(
    <div className="mt-16 w-full min-h-screen ">
      <HeaderProduct product={data.product}/>
      
      <div>
        <ImageProduct product={data.product}/>

        <div className="mt-10 w-full bg-black grid grid-cols-1 md:grid-cols-2">
          <div className="px-5 md:px-7 text-white py-14 flex items-center justify-center">
            <p className="text-xl">
              {lang === "en" ? ( 
                data.product.descriptionEn 
              ) : lang === "es" ? ( 
                data.product.descriptionEs 
              ) : ( 
                data.product.description 
              )}
            </p>
          </div>

          <div className="bg-zinc-200 flex flex-col justify-center">
            <img src={data.product.image[4].url} className="h-full"/>
          </div>
        </div>

        {(data.product.slug === "brava" || data.product.slug === "brava2") && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="bg-zinc-200 hidden md:flex flex-col justify-center">
              <img src={data.product.image[5].url} className="h-full"/>
            </div>

            <div className="px-5 md:px-7 bg-black text-white py-14 flex flex-col gap-4 items-start justify-center">
              <div className="px-3 py-2 text-white bg-orange-500 uppercase font-bold animate-bounce">
                {t("novidade")}
              </div>

              <p className="text-xl">
                {t("desc-novidade")}
              </p>

              <div className="text-sm flex items-center gap-2 border border-orange-500 rounded px-4 py-3 bg-zinc-900">
                <Warning size={24} weight="bold"/>

                {t("patente")}
              </div>
            </div>

            <div className="bg-zinc-200 md:hidden flex flex-col justify-center">
              <img src={data.product.image[5].url} className="h-full"/>
            </div>
          </div>
        )}

        <div className="py-7 px-5 md:px-14">
          <Production slug={data.product.slug} lang={lang}/>
        </div>

        <div className="py-7 px-5 md:px-14">
          <Specifications 
            name={data.product.slug} 
            line={data.product.line} 
            ncm={data.product.ncm}
            lang={lang}
          />
        </div>

        <div className="py-7 px-5 md:px-14">
          {data.product.videoId && (
            <ProductVideo id={data.product.videoId}/>
          )}
        </div>

        <div className="py-7 px-5 md:px-7">
          <SameCategory category={data.product.category} slug={data.product.slug}/>
        </div>
      </div>
    </div>
  );
}
