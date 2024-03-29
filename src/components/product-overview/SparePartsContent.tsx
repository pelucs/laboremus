import { WarningCircle } from "phosphor-react";
import { useGetProductBySlugQuery } from "../../graphql/generated";
import Loading from "../Loading";
import HeaderProduct from "./HeaderProduct";
import ListSpareParts from "./ListSpareParts";

interface SparePartsContent{
  slug: string;
}

export default ({ slug }: SparePartsContent) => {

  const { data } = useGetProductBySlugQuery({
    variables: {
      slug: slug
    }
  });

  if(!data || !data.product){
    return <Loading/>
  }

  return(
    <div className="w-full min-h-screen">
      <HeaderProduct product={data.product}/>

      <div className="mt-10 md:mt-0 py-10 px-5 md:px-7">
        <strong className="text-2xl md:text-4xl uppercase font-bold">
          Peças de reposição
        </strong>

        <p className="mt-2 flex items-center gap-2">
          <WarningCircle size={20} className="text-orange-500"/>
          
          Imagens meramente ilustrativas
        </p>

        <ListSpareParts line={data.product.line} slug={slug}/>
      </div>
    </div>
  );
}