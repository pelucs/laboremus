import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { MachineTypes } from "../../types/slideProducts";

interface InfoButtonProps{
  item: MachineTypes;
}

export default ({ item }: InfoButtonProps) => {

  const { t } = useTranslation();

  return(
    <div className="flex flex-col">
      <Disclosure>
        {({ open }) => (
          <div className="max-w-[400px] flex flex-col items-end">
            <Disclosure.Button className="w-[250px] py-2 flex items-center justify-between 
            text-white border-b border-white">
              {t("producao")}

              <CaretDown
                size={23}
                weight="bold"
                className={`transition-all duration-200 ${ open ? 'rotate-180 transform' : '' }`}
              />
            </Disclosure.Button>

            <Transition
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-00 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="transition-all">
                <p className="py-2  text-white text-right">
                  {item.production}
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="max-w-[400px] flex flex-col items-end">
            <Disclosure.Button className="w-[250px] py-2 flex items-center justify-between 
            text-white border-b border-white">
              {t("estrutura")}

              <CaretDown
                size={23}
                weight="bold"
                className={`transition-all duration-200 ${ open ? 'rotate-180 transform' : '' }`}
              />
            </Disclosure.Button>

            <Transition
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="transition-all">
                <p className="py-2  text-white text-right">
                  {item.struture}
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="max-w-[400px] flex flex-col items-end">
            <Disclosure.Button className="w-[250px] py-2 flex items-center justify-between 
            text-white border-b border-white">
              {t("potencia")}

              <CaretDown
                size={23}
                weight="bold"
                className={`transition-all duration-200 ${ open ? 'rotate-180 transform' : '' }`}
              />
            </Disclosure.Button>

            <Transition
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="transition-all">
                <p className="py-2  text-white text-right">
                  {item.potency}
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
}