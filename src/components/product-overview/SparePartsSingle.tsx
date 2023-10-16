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

      <div className="md:mt-0 py-10 px-5 md:px-7">
        <ListSpareParts 
          slug={slug} 
          line={data.product.line === "linha agrícola" ? "linha-agricola" : "linha-ecologica"}
        />
      </div>
    </div>
  );
}