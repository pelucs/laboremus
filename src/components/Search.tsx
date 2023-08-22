import * as Dialog from '@radix-ui/react-dialog'

import { MagnifyingGlass, SmileySad } from "phosphor-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { IProducts } from '../types';
import { useGetProductsQuery } from "../graphql/generated";

import Loading from "./Loading";

interface ResearchedTypes{
  name: string;
  slug: string;
  line: string;
  category: string;
  image: string;
}

export default () => {

  const { data } = useGetProductsQuery();
  const [open, setOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts[]>([]);
  const [researched, setResearched] = useState<ResearchedTypes[]>([]);

  //LIMPAR A VARIÁVEL DE PRODUTOS CASO O MODAL ESTEJA FECHADO
  useEffect(() => {
    if(!open){
      setProducts([]);
    }
  }, [open]);

  //RECÉM PESQUISADOS
  useEffect(() => {
    let result = localStorage.getItem("researched");

    if(result && result.length > 0){
      let resultF = JSON.parse(result); //TRANSFORMA EM ARRAY DE OBJETOS

      setResearched(resultF);
    }
  }, []);
  
  if(!data || !data.products){
    return <Loading/>
  }

  //SISTEMA DE FILTRAGEM
  const handleSearch= (value: string) => {
    let valueF = value.toLowerCase();

    //IRÁ FILTRAR POR NOME, CATEGORIA, LINHA E DESCRIÇÃO
    let filteringProducts = data.products.filter(product => product.name.toLowerCase().includes(valueF) ||
    product.category.toLowerCase().includes(valueF) || product.description.toLowerCase().includes(valueF) ||
    product.line.toLowerCase().includes(valueF));

    if(value.length > 0){
      setProducts(filteringProducts);
    } else{
      setProducts([]);
    }
  }

  //SETAR NO LOCALSTORAGE NO CAMPO DE PESQUISAS RECENTES 
  const setLocalStorage = (product: IProducts) => {
    let SummarizeProduct = {
      name: product.name, 
      slug: product.slug,
      line: product.line, 
      category: product.category,
      image: product.image[0].url
    }

    //VERIFICANDO SE JÁ EXISTE O PRODUTO NO LOCALSTORAGE
    let existProduct = researched.some(product => product.name === SummarizeProduct.name);

    if(!existProduct){
      setResearched([SummarizeProduct, ...researched.slice(0, 1)]);
      localStorage.setItem("researched", JSON.stringify([SummarizeProduct, ...researched.slice(0, 1)]));
    } else{
      setResearched(researched.slice(0, 1));
    }
  }

  return(
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger 
        className="md:w-48 md:py-2 md:px-3 md:bg-zinc-900 flex items-center gap-2 text-gray-300 border
        border-transparent hover:border-gray-500 transition-all outline-none"
      >
        <MagnifyingGlass size={24}/>

        <span className="hidden md:block">
          Busque aqui
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-full h-screen fixed inset-0 bg-black/30 backdrop-blur-[1px] z-50"/>
 
        <Dialog.Content 
          className="w-full max-w-xl h-[450px] bg-white rounded-md fixed inset-0 md:top-1/2 md:left-1/2 
          md:-translate-x-1/2 md:-translate-y-1/2 z-50 overflow-hidden flex flex-col"
          >

          <div className="flex items-center gap-2 py-4 px-5 border-b border-zinc-200">
            <MagnifyingGlass
              size={24}
            />

            <input
              type="text"
              placeholder="Busque aqui"
              className="flex-1 text-lg outline-none"
              onChange={e => handleSearch(e.target.value)}
            />

            <Dialog.Close className="rounded bg-zinc-200 py-1 px-2 text-[10px] text-zinc-500 font-bold">
              ESC
            </Dialog.Close>
          </div>

          <div className="flex-1 h-full flex flex-col overflow-y-scroll py-6 space-y-6">
            {products.length > 0 && (
              <div className="px-5">
                <h1 className="text-sm uppercase font-bold text-zinc-400">Resultado da pesquisa</h1>

                <div className="mt-5 flex flex-col gap-4">
                  {products.map(product => (
                    <Link 
                      onClick={() => { 
                        setLocalStorage(product)
                        setOpen(false)
                      }}
                      key={product.name}
                      className="flex items-center gap-4 hover:bg-zinc-200 transition-all rounded"
                      to={`/${product.line === "linha agrícola" ? "linha-agricola" : "linha-ecologica"}/${product.slug}`} 
                    >
                      <div className="w-20 h-20 rounded bg-zinc-200 overflow-hidden flex items-center justify-center">
                        <img 
                          src={product.image[0].url} 
                          className="w-full scale-125"
                        />
                      </div>

                      <div>
                        <h1 className="text-xl md:text-2xl font-bold capitalize">{product.category} {product.name}</h1>
                        <h2 className="text-base md:text-lg text-zinc-500 capitalize">{product.line}</h2>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {researched.length > 0 && (
              <div className="px-5">
                <h1 className="text-sm uppercase font-bold text-zinc-400">Pesquisas recentes</h1>

                <div className="mt-5 flex flex-col gap-4">
                  {researched.map(product => (
                    <Link 
                      key={product.name}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 hover:bg-zinc-200 transition-all rounded"
                      to={`/${product.line === "linha agrícola" ? "linha-agricola" : "linha-ecologica"}/${product.slug}`}
                    >
                      <div className="w-20 h-20 rounded bg-zinc-200 overflow-hidden flex items-center justify-center">
                        <img 
                          src={product.image} 
                          className="w-full scale-125"
                        />
                      </div>

                      <div>
                        <h1 className="text-xl md:text-2xl font-bold capitalize">{product.category} {product.name}</h1>
                        <h2 className="text-base md:text-lg text-zinc-500 capitalize">{product.line}</h2>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {researched.length === 0 && products.length === 0 && (
              <div className="flex-1 h-full flex flex-col items-center justify-center gap-4 text-zinc-400
              text-lg">
                <SmileySad size={44}/>
                
                Nenhum Resultado
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}