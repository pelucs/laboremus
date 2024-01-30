import { MagnifyingGlass, WarningCircle } from "phosphor-react";
import { useGetSparePartsQuery } from "../../graphql/generated";
import { useEffect, useState } from "react";
import { SparePartsType } from "../product-overview/ListSpareParts";
import { useSearchParams } from "react-router-dom";

export default () => {

  const { data } = useGetSparePartsQuery();

  const [spareParts, setSpareParts] = useState<SparePartsType[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const ref = searchParams.get("ref");

    if(ref){
      setSearch(ref);
    }
  }, []);

  useEffect(() => {
    if(data?.spareParts){
      setSpareParts(data.spareParts);
    }
  }, [data]);

  //FILTRANDO PEÇAS DE REPOSIÇÃO
  const filteringSpareParts = search.length > 0
  ? spareParts.filter(spare => spare.name.toLowerCase().includes(search) || spare.reference?.includes(search) || spare.application.includes(search))
  : spareParts;

  return(
    <div className="mt-5 px-5 md:px-7 pb-10 md:pb-20 min-h-screen">
      <div>
        <strong className="text-2xl md:text-4xl uppercase font-bold">
          Peças de reposição
        </strong>

        <p className="w-fit mt-2 py-1 px-3 flex items-center gap-1 bg-zinc-200 text-sm">
          <WarningCircle size={20} className="text-orange-500"/>
          
          Imagens meramente ilustrativas
        </p>
      </div>

      <hr className="w-full h-[1px] bg-zinc-300 border-none my-5"/>

      <div
        className="w-full md:w-80 py-2 px-3 bg-zinc-200 flex items-center gap-2 text-gray-300 border
        border-transparent hover:border-gray-500 transition-all outline-none"
      >
        <MagnifyingGlass size={24}/>

        <input 
          value={search}
          placeholder="Busque aqui"
          onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
          className="flex-1 bg-transparent outline-none text-black"
        />
      </div>

      {search.length > 0 && (
        <h1 className="mt-5 text-lg font-bold">
          Resultado da pesquisa: {search}
        </h1>
      )}

      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
        {filteringSpareParts.length > 0 ? (
          filteringSpareParts.map((part, i) => (
            <div 
              key={i}
              className="w-full hover:scale-105 transition-all"
            >
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`https://laboremus.com.br/pecas-de-reposicao?ref=${part.reference}`)
                  alert("Copiado para área de transferência!")
                }}
                className="w-full h-[200px] bg-zinc-200 flex items-center justify-center overflow-hidden"
              >
                <img src={part.image?.url}/>
              </button>
  
              <div>
                <div className="py-2 px-3 bg-black">
                  <strong className="w-full text-white">
                    {part.name}
                  </strong>
                </div>
  
                <div className="bg-zinc-200">
                  <div className="py-2 px-3 flex items-center justify-between bg-zinc-900 text-white">
                    <strong>
                      Ref.: 
                    </strong>
  
                    <span>
                      {part.reference ? part.reference : "---"}
                    </span>
                  </div>
                </div>
  
                <div className="pt-2 pb-5 px-3 bg-zinc-200">
                  <strong>
                    Aplicações:
                  </strong>
  
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 border-y divide-y-[1px] md:divide-y-0">
                    {part.application.map((machine, i) => (
                      <span key={i} className="py-1 px-2 uppercase">
                        •  {machine.replace("-", " ")}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-zinc-500">
            <h1 className="text-2xl">
              Nenhum resultado encontrado
            </h1>

            <ul className="list-inside list-disc">
              <li>Confirme se você digitou corretamente;</li>
              <li>Você pode procurar por: referência, nome e máquina.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}