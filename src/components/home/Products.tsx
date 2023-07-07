import { CaretRight } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';

export default () => {

  const { t } = useTranslation();

  return(
    <div className="mt-10 md:mt-20 px-5 md:px-7">
      <div>
        <h1 className="text-2xl md:text-4xl uppercase text-center font-bold">
          {t("confira-os-produtos")}
        </h1>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2">
          <Link 
            to="/linha-agricola"
            className="rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-bl-md overflow-hidden 
            group-hover:scale-50 transition-all relative group">
            <div className="group-hover:scale-110 transition-all">
              <img src={banner1} className="w-full" loading="lazy"/>
            </div>

            <div className="w-full h-full p-5 flex flex-col justify-end gap-2 md:gap-5 items-start 
            absolute inset-0 bg-black/50">
              <div>
                <p className="text-gray-200 text-base">{t("produto-card-agri")}</p>
                <strong className="text-white text-2xl capitalize">{t("linha-agricola")}</strong>
              </div>

              <span
                className="w-[130px] p-2 bg-black flex items-center justify-center gap-2 
                text-gray-100 uppercase font-bold border border-orange-500"
              >
                <CaretRight
                  size={18}
                  weight="bold"
                  className="text-orange-500"
                />

                {t("botao-conhecer")}
              </span>
            </div>
          </Link>

          <Link 
            to="/linha-residuos"
            className="rounded-bl-md md:rounded-bl-none md:rounded-tr-md rounded-br-md overflow-hidden 
            transition-all relative group"
          >
            <div className="group-hover:scale-110 transition-all">
              <img src={banner2} className="w-full" loading="lazy"/>
            </div>

            <div className="w-full h-full p-5 flex flex-col justify-end gap-2 md:gap-5 items-start 
            absolute inset-0 bg-black/50">
              <div>
                <p className="text-gray-200 text-base">{t("produto-card-eco")}</p>
                <strong className="text-white text-2xl capitalize">{t("linha-ecologica")}</strong>
              </div>

              <span
                className="w-[130px] p-2 bg-black flex items-center justify-center gap-2 
                text-gray-100 uppercase font-bold border border-orange-500"
              >
                <CaretRight
                  size={18}
                  weight="bold"
                  className="text-orange-500"
                />

                {t("botao-conhecer")}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}