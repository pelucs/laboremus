import { MagnifyingGlass, WarningCircle } from "phosphor-react";
import { useGetSparePartsQuery } from "../../graphql/generated";
import { useEffect, useState } from "react";

export interface SparePartsType{
  name: string;
  application: string[];
  reference?: string | null | undefined;
  image?: { url: string } | null | undefined;
}

interface ListSparePartsProps{
  slug: string;
  line: string;
}

export default ({ slug, line }: ListSparePartsProps) => {

  const { data } = useGetSparePartsQuery();

  const [search, setSearch] = useState<string>("");
  const [spareParts, setSpareParts] = useState<SparePartsType[]>([]);

  //PUXAR PEÇAS ESPECÍFICAS DA MÁQUINA 
  useEffect(() => {
    if(data?.spareParts){
      data.spareParts.forEach(parts => {
        if(parts.application.includes(slug)){
          setSpareParts(prevList => [parts, ...prevList]);
        }     
      })
    }
  }, [data]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const ref = searchParams.get("ref");

    if(ref){
      setSearch(ref);
    }
  }, []);

  const filteringSpareParts = search.length > 0
  ? spareParts.filter(spare => spare.name.toLowerCase().includes(search) || spare.reference?.includes(search) || spare.application.includes(search))
  : spareParts;

  return(
    <div>
      {spareParts.length > 0 ? (
        <div>
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

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
            {filteringSpareParts.map(part => (
              <div key={part.name}>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(`https://laboremus.com.br/${line}/${slug}/pecas-de-reposicao?ref=${part.reference}`)
                    alert("Copiado para área de transferência!")
                  }}
                  className="w-full h-[200px] bg-zinc-200 flex items-center justify-center overflow-hidden"
                >
                  <img src={part.image?.url}/>
                </button>
    
                <div className="w-full">
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
                </div>
              </div>
            ))}
          </div>
        </div>
        ) : (
          <strong className="mt-5 block text-4xl">
            Esta página está sendo desenvolvida!
          </strong>
        )}
    </div>
  );
}