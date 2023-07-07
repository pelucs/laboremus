import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProducts } from "../../types";
import { useGetProductsQuery } from "../../graphql/generated";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default () => {

  const { t } = useTranslation();
  const { data } = useGetProductsQuery();
  const [products, setProducts] = useState<IProducts[]>([]);
  const [lang, setLang] = useState<string>("");

  useEffect(() => {
    let currentLang = i18next.language;

    if(currentLang){
      setLang(currentLang);
    }
  }, [i18next.language]);

  useEffect(() => {
    if(data){
      let machines = data.products.filter(item => item.slug === "mc1001n" || item.slug === "bl300pro"
      || item.slug === "brava" || item.slug === "lc6000n" || item.slug === "fp1001n");

      setProducts(machines);
    }    
  }, []);

  return(
    <div className="mt-10 md:mt-20 px-5 md:px-7">
      <h1 className="text-2xl md:text-4xl uppercase text-center font-bold">
        {t("mais-vendidas")}
      </h1>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        {products && (
          products.map(product => (
            <Link 
              key={product.id}
              to={`/${ product.line === "linha agrícola" ? "linha-agricola" : "linha-eco"}/${product.slug}`}
              className="hover:opacity-50 transition-all flex flex-col items-center"
            >
              <div className="h-[250px] rounded flex items-center justify-center overflow-hidden">
                <img className="scale-150" src={product.image[0].url} loading="lazy"/>
              </div>

              <h1 className="mt-4 text-base md:text-xl font-bold uppercase">
                {lang === "en" ? product.categoryEn : lang === "es" ? product.categoryEs : product.category}
              </h1>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}