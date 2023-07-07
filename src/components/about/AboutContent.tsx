//IMAGENS HISTÓRICAS
import { useTranslation } from 'react-i18next';
import History from './History';
import { useEffect } from 'react';

export default () => {

  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Sobre - Indústria Laboremus";
  }, []);

  return(
    <div className="flex-1 min-h-screen">
      <div className="relative min-h-screen bg-banner1Md md:bg-banner1 bg-cover bg-center">
        <div className="mt-16 md:mt-0 px-5 py-10 md:py-0 md:px-20 w-full min-h-screen flex flex-col 
        items-center md:items-start justify-start md:justify-center">
          <strong className="text-3xl md:text-5xl text-white uppercase text-center">
            {t("laboremus-industria")}
          </strong>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
            <p className="text-white text-xl md:text-2xl text-center md:text-left">
              {t("desc")}
            </p>
          </div>
        </div>
      </div>
      
      <History/>

      <div className="w-full mt-5 px-5 md:px-20 py-10 flex flex-col items-center md:flex-row flex-wrap 
      justify-center gap-10">
        <div className="w-full md:w-2/5 flex flex-col items-center p-6 bg-zinc-100 border rounded-md">
          <strong className="uppercase text-xl">
            {t("missao-title")}
          </strong>

          <p className="text-center text-base md:text-lg">
            {t("missao-desc")}
          </p>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-center p-6 bg-zinc-100 border rounded-md">
          <strong className="uppercase text-xl">
            {t("pioneirismo-title")}
          </strong>

          <p className="text-center text-base md:text-lg">
            {t("pioneirismo-desc")}
          </p>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-center p-6 bg-zinc-100 border rounded-md">
          <strong className="uppercase text-xl">
            {t("responsabilidade-title")}
          </strong>

          <p className="text-center text-base md:text-lg">
            {t("responsabilidade-desc")}
          </p>
        </div>
      </div>

      <div className="relative min-h-screen bg-banner2Md md:bg-banner2 bg-cover bg-center">
        <div className="px-5 py-10 md:py-0 md:px-20 w-full min-h-screen flex flex-col 
        items-center md:items-start justify-start md:justify-center">
          <strong className="text-3xl md:text-5xl text-black uppercase text-center">
            {t("tradicao-title")}
          </strong>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
            <p className="text-black text-base md:text-lg text-center md:text-left">
              {t("tradicao-desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}