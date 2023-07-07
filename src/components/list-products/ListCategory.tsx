import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../graphql/generated";
import { IProducts } from '../../types';
import Loading from "../Loading";
import ListProductsByCategory from "./ListProductsByCategory";

interface CategoryProps{
  line: string;
  filtered: string[];
  handleFiltered: (newArray: Array<string>) => void;
}

export default ({ line, filtered, handleFiltered }: CategoryProps) => {

  const { data } = useGetProductsQuery();
  const [products, setProducts] = useState<string[]>([]);

  if(!data || !data.products){
    return <Loading/>
  }  

  //CHECAR SE É LINHA AGRÍCOLA OU RESÍDUO
  useEffect(() => {
    let formatLine = line === "linha-agricola" ? "linha agrícola" : "linha ecológica", //FORMATANDO LINHA
        filteringProducts = data.products.filter(filter => filter.line === formatLine); //FILTRANDO PRODUTOS POR LINHA
    
    checkProductsByCategory(filteringProducts);
  }, [line, filtered]);

  //RESETAR A FILTRAGEM
  useEffect(() => { handleFiltered([]) }, [line]);

  const checkProductsByCategory = (filteringProducts: IProducts[]) => {
    let category = filteringProducts.map(item => item.category),
        newFiltering = category.filter((item, i) => category.indexOf(item) === i), //LISTAR OS PRODUTOS NA ORDEM CORRETA E ELIMINAR CATEGORIAS REPETIDAS   
        orderProducts = [];
      
    if(filtered.length === 0){

      //PONDO A COLHEITADEIRA EM PRIMEIRO LUGAR
      let subProduct = newFiltering.slice(0, newFiltering.length - 1);
      
      orderProducts.push(newFiltering[newFiltering.length - 1]);
      
      subProduct.forEach(name => {
        orderProducts.push(name);
      });

      setProducts(orderProducts);
    } else{
      setProducts(filtered);
    }
  }

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