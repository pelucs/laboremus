import 'swiper/css';
import { Link } from 'react-router-dom';
import { SwiperProps, SwiperSlide } from "swiper/react";
import { MachineTypes } from '../../types/slideProducts';
import { CaretRight } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

import Slide from '../SlideSettings';
import ToggleButton from './ToggleButton';

import brava from '../../assets/brava-slide.png';
import tcg15 from '../../assets/tcg15eco-slide.png';
import offshore from '../../assets/offshore-slide.png';

export default () => {
  
  const { t } = useTranslation();

  const settings: SwiperProps = {
    slidesPerView: 1,
    navigation: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
      waitForTransition: false
    },
    pagination: {
      clickable: true,
    }
  }

  const machine: MachineTypes[] = [
    {
      id: 1,
      name: "TRO Offshore",
      colorPrimary: "666666",
      colorSecundary: "888888",
      img: offshore,
      url: "/linha-ecologica/tro4000-offshore",
      shortDesc: t("short-desc-tro"),
      description: t("desc-tro"),
      production: t("producao-tro"),
      struture: t("estrutura-tro"),
      potency: t("potencia-tro")
    },
    {
      id: 2,
      name: "Brava",
      colorPrimary: "121218",
      colorSecundary: "666666",
      img: brava,
      url: "/linha-agricola/brava",
      shortDesc: t("short-desc-brava"),
      description: t("desc-brava"),
      production: t("producao-brava"),
      struture: t("estrutura-brava"),
      potency: t("potencia-brava")
    }, {
      id: 3,
      name: "TCG15eco",
      colorPrimary: "245237",
      colorSecundary: "0E2016",
      img: tcg15,
      url: "/linha-ecologica/tcg15eco",
      shortDesc: t("short-desc-tcg"),
      description: t("desc-tcg"),
      production: t("producao-tcg"),
      struture: t("estrutura-tcg"),
      potency: t("potencia-tcg")
    }
  ];

  return(
    <div className="min-h-screen mt-24">
      <Slide settings={settings}>
        {machine.map(item => (
          <SwiperSlide key={item.id} style={{ backgroundColor: `#${item.colorPrimary}` }}>
            <div className="hidden md:block w-full min-h-screen">
              <div className="w-full px-5 md:px-7 py-16 md:py-20 grid grid-cols-2">
                <div className="flex flex-col gap-36">
                  <strong className="text-white font-extrabold text-5xl md:text-8xl">
                    O{item.id}
                  </strong>

                  <div className="w-[50px] md:w-[100px] h-2 bg-white"></div>

                  <div>
                    <p className="text-white max-w-[460px]">
                      {item.description}
                    </p>

                    <Link 
                      to={item.url}
                      className="w-[200px] p-4 bg-black flex items-center justify-center gap-2 
                      text-gray-100 uppercase font-bold mt-10 border border-orange-500"
                    >
                      <CaretRight
                        size={18}
                        weight="bold"
                        className="text-orange-500"
                      />

                      {t("botao-conhecer")}
                    </Link>
                  </div>
                </div>

                <div className="hidden md:flex items-end justify-end">
                  <ToggleButton item={item}/>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <img src={item.img} className="w-full" loading="lazy"/>
              </div>
            </div>

            <div className="w-full min-h-screen mt-20 pb-20 md:hidden flex flex-col items-center justify-center gap-10">
              <div className="text-center">
                <strong className="text-5xl font-bold text-white uppercase">
                  {item.name}
                </strong>

                <h1 className="mt-3 text-center font-bold text-gray-200 w-80 text-xs uppercase">
                  {item.shortDesc}
                </h1>
              </div>

              <img src={item.img} className="w-full"/>

              <Link 
                to={item.url}
                className="button"
              >
                <CaretRight
                  size={18}
                  weight="bold"
                  className="text-orange-500"
                />

                {t("botao-conhecer")}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Slide>
    </div>
  );
}