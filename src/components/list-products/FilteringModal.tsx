import { FunnelSimple } from "phosphor-react";
import { Popover, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { agri, eco } from "../../utils/categoryProducts";
import { useTranslation } from "react-i18next";

interface FilterProps{
  category: string;
  filtered: Array<string>;
  handleFiltered: (newArray: Array<string>) => void;
}

export default ({ handleFiltered, filtered, category }: FilterProps) => {

  const { t } = useTranslation();;
  const [buttonTitles, setButtonTitles] = useState<string[]>([]); 

  useEffect(() => {
    if(category === "linha-agricola"){
      setButtonTitles(agri);
    } else{
      setButtonTitles(eco);
    }
  }, [category]);

  const funcFiltered = (productTitle: string) => {
    let checkFilter = filtered.includes(productTitle);
    
    if(checkFilter){
      handleFiltered([...filtered]);
    } else{
      handleFiltered([...filtered, productTitle]);
    }
  }
  
  return(
    <Popover className="relative">
      <Popover.Button className="py-1 px-2 rounded flex items-center gap-2 text-gray-300 outline-none
      hover:bg-gray-100 focus:shadow-sm transition-all">
        <FunnelSimple
          size={20}
          weight="bold"
        />

        {t("filtrar")}

        <span className="w-6 h-6 flex items-center justify-center rounded bg-gray-100 font-bold">
          {filtered.length}
        </span>
      </Popover.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="absolute right-0 top-10"
      >
        <Popover.Panel className="w-[228px] rounded bg-white py-2 px-3 shadow-sm">
          {buttonTitles.map((productTitle, key) => (
            <Popover.Button
              key={key}
              onClick={() => funcFiltered(productTitle)}
              className="w-full p-2 hover:bg-gray-100 rounded flex justify-start capitalize"
            >
              {productTitle}
            </Popover.Button>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}