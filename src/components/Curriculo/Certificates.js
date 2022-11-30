import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/certificates.css"

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Certificates() {
  return (
    <>
      <p className="certificadoTitle">Certificados:</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper1"></SwiperSlide>
        <SwiperSlide className="swiper2"></SwiperSlide>
        <SwiperSlide className="swiper3"></SwiperSlide>
        <SwiperSlide className="swiper4"></SwiperSlide>
        <SwiperSlide className="swiper5"></SwiperSlide>
        <SwiperSlide className="swiper6"></SwiperSlide>
        <SwiperSlide className="swiper7"></SwiperSlide>
        <SwiperSlide className="swiper8"></SwiperSlide>
        <SwiperSlide className="swiper9"></SwiperSlide>
      </Swiper>
    </>
  );
}
