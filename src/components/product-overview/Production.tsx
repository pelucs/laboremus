import { WarningCircle } from "phosphor-react";
import { useGetProductionBySlugQuery } from "../../graphql/generated";
import Loading from '../Loading';
import classNames from "classnames";
import { useTranslation } from "react-i18next";

interface ProductOverviewProps{
  slug: string;
  lang: string;
}

export default ({ slug, lang }: ProductOverviewProps) => {

  const { t } = useTranslation();
  const { data } = useGetProductionBySlugQuery({
    variables: {
      slug,
    }
  });

  if(!data || !data.production){
    return <Loading/>
  }

  return(
    <div className="mt-14 w-full flex flex-col items-center">
      <strong className="text-2xl md:text-4xl uppercase font-bold text-center">
        {t("producoes")}
      </strong>
      
      <div className="mt-14 w-full max-w-2xl">
        <div className="w-full py-3 bg-black flex items-center justify-center rounded-tl-xl rounded-tr-xl">
          <strong className="text-white">
            {t("producao")}
          </strong>
        </div>
        
        {lang === "en" ? (
          <div>
            {data.production.materialEn.map((mat, i) => (
              <div key={i} className={classNames("py-3 px-4 flex items-center justify-between", {
                "bg-zinc-300": i % 2 === 0,
                "bg-zinc-200": i % 2 === 1
              })}>
                <span>
                  {mat}
                </span>

                <span>
                  {data.production?.productionEn[i]}
                </span>
              </div>
            ))}
          </div>
        ) : lang === "es" ? (
          <div>
            {data.production.materialEs.map((mat, i) => (
              <div key={i} className={classNames("py-3 px-4 flex items-center justify-between", {
                "bg-zinc-300": i % 2 === 0,
                "bg-zinc-200": i % 2 === 1
              })}>
                <span>
                  {mat}
                </span>

                <span>
                  {data.production?.productionEs[i]}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {data.production.material.map((mat, i) => (
              <div key={i} className={classNames("py-3 px-4 flex items-center justify-between", {
                "bg-zinc-300": i % 2 === 0,
                "bg-zinc-200": i % 2 === 1
              })}>
                <span>
                  {mat}
                </span>

                <span>
                  {data.production?.production[i]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full max-w-2xl p-3 bg-black rounded-bl-xl rounded-br-xl text-white
      flex items-center gap-2">
        <WarningCircle size={24} className="text-orange-500"/>

        {t("valores")}
      </div>
    </div>
  );
}