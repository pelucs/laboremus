import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../graphql/generated";

import Loading from "../Loading";
import ListProductsByCategory from "./ListProductsByCategory";

interface CategoryProps{
  line: string;
}

export default ({ line }: CategoryProps) => {

  const { data } = useGetProductsQuery();
  const [products, setProducts] = useState<string[]>([]);

  if(!data || !data.products){
    return <Loading/>
  }  

  useEffect(() => {
    let formatLine = line === "linha-agricola" ? "linha agrícola" : "linha ecológica"; // Formatar linha
    let filteringProducts = data.products.filter(filter => filter.line === formatLine); // Filtrar produtos por linha
  
    // Mover 'colheitadeira de palma' para o topo da lista
    filteringProducts.sort((a, b) => {
      if (a.category === "colheitadeira de palma") return -1;
      if (b.category === "colheitadeira de palma") return 1;
      return 0;
    });
  
    // Extrair categorias únicas na ordem correta
    let uniqueCategories = [...new Set(filteringProducts.map(item => item.category))];
  
    setProducts(uniqueCategories);
  }, [line, data.products]);

  return(
    <div className="px-5 md:px-7">
      {products.map(item => (
        <ListProductsByCategory
          key={item}
          category={item}
        />
      ))} 
    </div>
  );
}