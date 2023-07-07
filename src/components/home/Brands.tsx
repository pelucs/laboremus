import { useTranslation } from 'react-i18next';

import petrobras from '../../assets/icons/petrobras.svg';
import supply from '../../assets/icons/supply.svg';
import walmart from '../../assets/icons/walmart.svg';
import transocean from '../../assets/icons/transocean.svg';

export default () => {

  const { t } = useTranslation();

  return(
    <div className="w-full mt-20 px-5 md:px-7 pb-20 flex flex-col items-center border-b border-gray-200/50">
      <h1 className="text-2xl md:text-4xl uppercase text-center font-bold">
        {t("empresas-lideres")}
      </h1>

      <div className="w-full mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-4 place-items-center
      gap-10 md:gap-0">
        <img 
          src={petrobras} 
          alt="Logo Petrobras"
          className="w-full max-w-[200px]"
          loading="lazy"
        />

        <img 
          src={walmart} 
          alt=""
          className="w-full max-w-[200px]"
          loading="lazy"
        />

        <img 
          src={supply} 
          alt=""
          className="w-full max-w-[200px]"
          loading="lazy"
        />

        <img 
          src={transocean} 
          alt=""
          className="w-full max-w-[200px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}