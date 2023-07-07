import { CaretRight } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import brava from '../../assets/brava.png';

export default () => {

  const { t } = useTranslation();

  return(
    <div className="mt-20 flex-1 px-5 md:px-7 border-b pb-20 border-gray-200/50">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <div className="md:block flex flex-col items-center">
          <h1 className="text-center md:text-left font-semibold text-orange-500">
            {t("lancamento")}
          </h1>

          <strong className="text-center md:text-left block mt-3 font-extrabold text-4xl">
            {t("lancamento-title")}
          </strong>

          <div className="block md:hidden">
            <img src={brava} alt="Máquina Brava" loading="lazy"/>
          </div>

          <p className="text-center md:text-left mt-3 max-w-[500px] text-gray-300">
            {t("lancamento-desc")}
          </p>

          <div className="hidden mt-5 md:grid grid-cols-2">
            <div>
              <div className="flex items-end">
                <div className="w-8 h-8 bg-orange-500 flex items-center justify-center text-white
                rounded">
                  1
                </div>

                <strong className="ml-2 text-xl leading-4">
                  {t("card-1-title")}
                </strong>
              </div>

              <p className="mt-2 max-w-[300px]">
                {t("card-1-desc")}
              </p>
            </div>

            <div>
              <div className="flex items-end">
                <div className="w-8 h-8 bg-orange-500 flex items-center justify-center text-white
                rounded">
                  2
                </div>

                <strong className="ml-2 text-xl leading-4">
                  {t("card-2-title")}
                </strong>
              </div>

              <p className="mt-2 max-w-[300px]">
                {t("card-2-desc")}
              </p>
            </div>
          </div>

          <Link 
            to="/linha-agricola/brava2"
            className="button mt-10"
          >
            <CaretRight
              size={18}
              weight="bold"
              className="text-orange-500"
            />

            {t("botao-conhecer")}
          </Link>
        </div>

        <div className="hidden md:block">
          <img src={brava} alt="Máquina Brava"/>
        </div>
      </div>
    </div>
  );
}