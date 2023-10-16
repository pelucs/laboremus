import { WarningCircle } from "phosphor-react";
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
}

export default ({ slug }: ListSparePartsProps) => {

  const { data } = useGetSparePartsQuery();

  const [spareParts, setSpareParts] = useState<SparePartsType[]>([]);

  useEffect(() => {
    if(data?.spareParts){
      data.spareParts.forEach(parts => {
        if(parts.application.includes(slug)){
          setSpareParts(prevList => [parts, ...prevList]);
        }     
      })
    }
  }, [data]);

  return(
    <div>
      {spareParts.length > 0 ? (
        <div>
          <div className="">
            <strong className="text-2xl md:text-4xl uppercase font-bold">
              Peças de reposição - {slug.replace("-", " ")}
            </strong>

            <p className="w-fit mt-2 py-1 px-3 flex items-center gap-1 bg-zinc-200 text-sm">
              <WarningCircle size={20} className="text-orange-500"/>
              
              Imagens meramente ilustrativas
            </p>
          </div>

          <hr className="w-full h-[1px] bg-zinc-300 border-none my-5"/>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
            {spareParts.map(part => (
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