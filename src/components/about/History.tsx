import { useState } from 'react';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

import SlideSettings from '../SlideSettings';

import img1 from '../../assets/about/img.jpg';
import img2 from '../../assets/about/img5.jpg';
import img3 from '../../assets/about/fatiador.jpg';
import img4 from '../../assets/about/conjug.jpeg';
import img6 from '../../assets/about/bl.jpeg';
import img7 from '../../assets/about/img8.jpeg';
import img8 from '../../assets/about/tro.jpg';
import img9 from '../../assets/about/mix.jpeg';
import img10 from '../../assets/about/cpl.jpg';

interface TypeSlides{
  year: string;
  desc: string;
  infos: {
    desc: string,
    img: string | null
  }[];
}

export default () => {

  const { t } = useTranslation();

  const [slidesView, setSlidesView] = useState(5);
  const [activeSlide, setActiveSlide] = useState<any>();

  const slides: TypeSlides[] = [
    {
      year: "1924 - 1940",
      desc: t("1924-1940-title"),
      infos: [
        {
          desc: t("1924-1940-desc-1"),
          img: img1
        },
        {
          desc: t("1924-1940-desc-1"),
          img: img2
        },
      ]
    },
    {
      year: "1950 - 1960",
      desc: t("1950-1960-title"),
      infos: [
        {
          desc: t("1950-1960-desc-1"),
          img: img3
        },
        {
          desc: t("1950-1960-desc-2"),
          img: img4
        },
      ]
    },
    {
      year: "1980 - 1990",
      desc: t("1980-1990-title"),
      infos: [
        {
          desc: t("1980-1990-desc-1"),
          img: ""
        },
        {
          desc: t("1980-1990-desc-2"),
          img: img6
        },
      ]
    },
    {
      year: "2000 - 2010",
      desc: t("2000-2010-title"),
      infos: [
        {
          desc: t("2000-2010-desc-1"),
          img: img8
        },
        {
          desc: t("2000-2010-desc-2"),
          img: img7
        },
      ]
    },
    {
      year: t("button-slide"),
      desc: t("2020-hoje-title"),
      infos: [
        {
          desc: t("2020-hoje-desc-1"),
          img: img9
        },
        {
          desc: t("2020-hoje-desc-2"),
          img: img10
        },
      ]
    }
  ];
  
  const buttons = [
    "1924 - 1940", "1950 - 1960", 
    "1980 - 1990", "2000 - 2010", 
    t("button-slide")
  ]; 

  const settingsButton: SwiperProps = {
    slidesPerView: slidesView,
    onSwiper: setActiveSlide,  
  }

  const settingsSliders: SwiperProps = {
    slidesPerView: 1,
    thumbs: { swiper: activeSlide },
  }

  const resizeSliders = () => {
    let widthX = document.documentElement.clientWidth;

    if(widthX < 768){
      setSlidesView(2);
    } else{
      setSlidesView(5);
    }
  }

  window.addEventListener("resize", resizeSliders);

  return(
    <div onLoad={resizeSliders} className="mt-20 px-5 md:px-20">
      <h1 className="text-2xl md:text-4xl uppercase text-center font-bold">
        {t("historia")}
      </h1>

      <div className="mt-10">
        <SlideSettings settings={settingsButton}>
          {buttons.map((years, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-20">
              <button
                className="w-full text-xl font-bold hover:text-black/50 transition-colors relative"
              >
                {years}

                <div className="w-full absolute -bottom-6 flex items-center justify-center">
                  <hr className={`flex-1 h-[1px] border-none ${ index === 0 ? "bg-transparent" : "bg-gray-300" }`}/>
                  <div className="w-3 h-3 rounded-full bg-orange-500"/>
                  <hr className={`flex-1 h-[1px] border-none ${ index === buttons.length - 1 ? "bg-transparent" : "bg-gray-300" }`}/>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </SlideSettings>

        <SlideSettings
          settings={settingsSliders}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.year}>
              <div className="w-full h-auto mt-10">
                <h1 className="text-xl md:text-2xl text-center font-bold">
                  {slide.year}
                </h1>

                <h1 className="text-xl md:text-2xl text-center font-bold">
                  {slide.desc}
                </h1>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {slide.infos.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-10">
                      <p className="text-lg md:text-xl text-center">
                        {item.desc}
                      </p>

                      {item.img &&  (
                        <img 
                          src={item.img} 
                          loading="lazy"
                          className="w-full max-w-md rounded-md"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SlideSettings>
      </div>
    </div>
  );
}