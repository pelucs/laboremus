import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from "../../graphql/generated";
import { IProducts } from '../../types';
import Loading from "../Loading";
import { CaretRight } from 'phosphor-react';

interface SameProductsProps{
  category: string;
  slug: string;
}

export default  ({ category, slug }: SameProductsProps) => {

  const { t } = useTranslation();

  const [products, setProducts] = useState<IProducts[] | undefined>([]);
  const { data } = useGetProductsByCategoryQuery({
    variables: { category: category }
  });
  
  useEffect(() => {
    let filteringProducts = data?.products.filter(product => product.slug !== slug);

    setProducts(filteringProducts);
  }, [slug, data]);

  if(!data || !data.products){
    return <Loading/>
  }

  return(
    <div className="mt-14">
      {products && (
        products.length > 0 ? (
          <div className="w-full flex flex-col items-center">
            <strong className="text-2xl md:text-4xl uppercase font-bold text-center">
              {t("mesma-categoria")}
            </strong>

            <div className={`w-full mt-5 grid grid-cols-1 md:grid-cols-4 place-items-center gap-5 md:gap-10`}>
              {products.map(product => (
                <Link 
                  key={product.id}
                  className="hover:opacity-50 transition-all relative flex flex-col items-center"
                  to={`/${ product.line === "linha agrícola" ? "linha-agricola" : "linha-ecologica"}/${product.slug}`}
                >
                  <div className="h-[280px] rounded flex items-center justify-center overflow-hidden">
                    <img className="scale-110" src={product.image[0].url}/>
                  </div>

                  <h1 className="text-3xl font-bold">
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
        ) : ""
      )}
    </div>
  );
}