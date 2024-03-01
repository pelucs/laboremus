import { useGetSpecificationsByNameQuery } from "../../graphql/generated";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import Loading from "../Loading";

interface SpecificationsProps{
  ncm: string | undefined | null;
  name: string;
  line: string;
  lang: string;
}

export default ({ name, line, lang, ncm }: SpecificationsProps) => {

  const { t } = useTranslation();
  const { data } = useGetSpecificationsByNameQuery({
    variables: {
      name: name
    }
  });

  if(!data || !data.specifications){
    return <Loading/>
  }

  return(
    <div className="mt-14 w-full flex flex-col items-center">
      <strong className="text-2xl md:text-4xl uppercase font-bold text-center">
        {t("especificacoes-tec")}
      </strong>
      
      <div className={classNames("mt-14 w-full grid grid-cols-1 gap-10", {
        "md:grid-cols-2": data.specifications.length > 1,
        "md:grid-cols-1": data.specifications.length < 1
      })}>
        {data.specifications.map((spec, i) => (
          <div key={i} className="w-full max-w-2xl">
            <img src={spec.image.url} loading="lazy"/>

            <div className="mt-10 w-full">
              <div className="w-full py-3 bg-black flex items-center justify-center rounded-tl-xl rounded-tr-xl">
                <strong className="text-white">
                  {t("especificacoes")}
                </strong>
              </div>
              
              {lang === "en" ? (
                <div>
                  {spec.titleEn.map((title, i) => (
                    <div key={i} className={classNames("py-3 px-4 flex items-center justify-between", {
                      "bg-zinc-300": i % 2 === 0,
                      "bg-zinc-200": i % 2 === 1
                    })}>
                      <span>
                        {title}
                      </span>

                      <span>
                        {spec.dataEn[i]}
                      </span>
                    </div>
                  ))}
                </div>
              ) : lang === "es" ? (
                <div>
                  {spec.titleEs.map((title, i) => (
                    <div key={i} className={classNames("py-3 px-4 flex items-center justify-between", {
                      "bg-zinc-300": i % 2 === 0,
                      "bg-zinc-200": i % 2 === 1
                    })}>
                      <span>
                        {title}
                      </span>

                      <span>
                        {spec.dataEs[i]}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {spec.title.map((title, i) => (
                    <div key={i} className={classNames("py-3 px-4 flex items-center justify-between", {
                      "bg-zinc-300": i % 2 === 0,
                      "bg-zinc-200": i % 2 === 1
                    })}>
                      <span>
                        {title}
                      </span>

                      <span>
                        {spec.data[i]}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 h-12 bg-black text-white flex items-center rounded-bl-xl rounded-br-xl">
              {ncm && (
                <h1>
                  <span className="font-bold">NCM:</span> {ncm}
                </h1>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}