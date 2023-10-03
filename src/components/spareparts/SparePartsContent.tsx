import { MagnifyingGlass, WarningCircle } from "phosphor-react";
import { useGetSparePartsQuery } from "../../graphql/generated";
import { useEffect, useState } from "react";
import { SparePartsType } from "../product-overview/ListSpareParts";

export default () => {

  const { data } = useGetSparePartsQuery();

  const [spareParts, setSpareParts] = useState<SparePartsType[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {

    if(data?.spareParts){
      setSpareParts(data.spareParts);
    }

  }, [data]);

  const filteringSpareParts = search.length > 0
  ? spareParts.filter(spare => spare.name.toLowerCase().includes(search) || spare.reference?.includes(search) || spare.application.includes(search))
  : spareParts;

  return(
    <div className="mt-20 md:mt-24 px-5 md:px-7 pb-10 md:pb-20 min-h-screen">
      <div className="">
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
            placeholder="Busque aqui"
            onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
            className="flex-1 bg-transparent outline-none text-black"
          />
        </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        {filteringSpareParts.map(part => (
          <div key={part.name}>
            <div className="w-full h-[200px] bg-zinc-200 flex items-center justify-center overflow-hidden">
              <img src={part.image?.url}/>
            </div>

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

              <div className="py-2 px-3 bg-zinc-200">
                <strong>
                  Aplicações:
                </strong>

                <div className="mt-2 flex flex-col gap-1">
                  {part.application.map(machine => (
                    <span key={machine} className="uppercase text-lg italic">
                      • {machine}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}