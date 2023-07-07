import { Circle } from "phosphor-react";
import { useGetSparePartsByMachineQuery } from "../../graphql/generated";
import PopoverSparePart from "./PopoverSparePart";
import Loading from "../Loading";

interface ListSparePartsProps{
  slug: string;
}

export default ({ slug }: ListSparePartsProps) => {

  const { data } = useGetSparePartsByMachineQuery({
    variables: {
      machine: slug
    }
  });
  
  if(!data || !data.spareParts){
    return <Loading/>
  }

  return(
    <div>
      {data.spareParts[0] ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          {data.spareParts.map(part => (
            <div key={part.name} className="">
              <div className="w-full h-[200px] bg-zinc-200 flex items-center justify-center overflow-hidden">
                <img src={part.image?.url} loading="lazy"/>
              </div>
    
              <div className="w-full">
                <div className="py-2 px-3 flex items-center justify-between bg-black">
                  <strong className="w-full text-white">
                    {part.name}
                  </strong>
    
                  {part.state === "notConfirmed" ? (
                    <PopoverSparePart/>
                  ) : (
                    <></>
                  )}
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
      ) : (
        <div className="mt-11 w-full h-screen">
          <strong className="text-2xl md:text-4xl ">
            Estamos desenvolvendo esta página!
          </strong>
        </div>
      )}
    </div>
  );
}