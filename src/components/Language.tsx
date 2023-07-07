import { useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useTranslation } from 'react-i18next';

import brasil from '../assets/icons/brasil.svg';
import states from '../assets/icons/united-states.svg';
import spain from '../assets/icons/spain.svg';
import classNames from "classnames";

const langs: Array<{ img: string, lng: string, value: string}> = [
  {
    img: brasil,
    lng: 'ptBR',
    value: 'Portugês BR'
  },
  {
    img: states,
    lng: 'en',
    value: 'English'
  },
  {
    img: spain,
    lng: 'es',
    value: 'Español'
  },
];

export default () => {

  const [image, setImage] = useState<string>(brasil);
  const { t, i18n } = useTranslation();

  //SETA O IDIOMA SELECIONADO
  const handleLang = (image: string, lang: string) => {
    setImage(image);
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);    
  }

  //RESGATA O IDIOMA PRÉ-SETADO
  useEffect(() => {
    let lang = localStorage.getItem("lang");

    if(lang){
      let img = langs.filter(item => item.lng === lang);
      setImage(img[0].img);      
    }

  }, []);

  return(
    <div className="flex items-center gap-2">
      {langs.map(lang => (
        <button 
          key={lang.lng}
          title={lang.value}
          className="w-7 h-7 flex items-center gap-2 text-white"
          onClick={() => handleLang(lang.img, lang.lng)}
        >
          <img 
            src={lang.img} 
            alt={lang.value}
            className={classNames("border-[3px] rounded-full", {
              "border-orange-500": lang.img === image,
              "border-transparent": lang.img !== image
            })}
          />
        </button>
      ))}
    </div>
  );
}