import { useGetProductBySlugQuery } from "../../graphql/generated";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { File, Gear, Warning } from "phosphor-react";

import Loading from "../Loading";
import ImageProduct from "./ImageProduct";
import HeaderProduct from "./HeaderProduct";
import Production from "./Production";
import SameCategory from "./SameCategory";
import Specifications from "./Specifications";
import ProductVideo from "./ProductVideo";
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
    <div className="w-full min-h-screen">
      <HeaderProduct product={data.product}/>
      
      <div>
        <div className="py-10 px-7 space-y-16">
          <img 
            alt="" 
            className="mx-auto"
            src={data.product.image[data.product.image.length - 1].url} 
          />     
        </div>

        <div className="px-5 md:px-7">
          <h1 className="text-center text-3xl md:text-4xl font-bold leading-none">
            Garanta a produtividade <br/>
            e robustez na sua propriedade
          </h1>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div>
                <h1 className="text-xl font-semibold uppercase">
                  {data.product.category === "offshore" || data.product.category ===  "compostagem" 
                  ? "Triturador" 
                  : data.product.category.split('')[0].toUpperCase() + data.product.category.substring(1, data.product.category.length)}
                </h1>

                <strong className="text-5xl font-bold">
                  {data.product.name}
                </strong>
              </div>

              <div>
                <span className="uppercase font-semibold text-muted-foreground">Descrição</span>

                <p className="text-xl md:text-2xl font-medium leading-none">
                  {data.product.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {data.product.manual && (
                  <a target="_blank" href={data.product.manual.url} className="w-full button">
                    <Gear className="w-4 h-4 text-orange-500 relative -top-[1px]"/>

                    Manual
                  </a>
                )}

                {data.product.folder && (
                  data.product.folder.length > 0 && (
                  <a target="_blank" href={data.product.folder[0].url} className="w-full button">
                    <File className="w-4 h-4 text-orange-500 relative -top-[1px]"/>

                    Panfleto
                  </a>
                  )
                )}
              </div>
            </div>

            <ImageProduct images={data.product.image}/>
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
