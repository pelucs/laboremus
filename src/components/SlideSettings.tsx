import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import "swiper/css/free-mode";

interface SlideProps{
  settings: SwiperProps;
  children: ReactNode;
}

export default ({ children, settings }: SlideProps) => {
  return(
    <Swiper modules={[ Navigation, Pagination, Autoplay, Thumbs ]} {...settings}>
      {children}
    </Swiper>
  );
}