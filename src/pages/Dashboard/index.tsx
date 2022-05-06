import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselItem } from "../../components/Carousel";
import { DashboardContext } from "../../contexts/DashboardContext";
import { Header } from "../../components/Header";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/grid";
import "swiper/scss/pagination";

import "./styles.scss";

// import required modules
import { Autoplay, Grid, Pagination } from "swiper";

export function Carousel() {
  const { pontos } = useContext(DashboardContext);

  console.log(pontos);

  return (
    <>
      <Header mesage={"Dashboard"} />
      <Swiper
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        grid={{
          rows: 3,
        }}
        spaceBetween={0}
        slidesPerGroup={1}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          701: {
            slidesPerView: 3,
            grid: { rows: 3 },
            spaceBetween: 0,
            slidesPerGroup: 2,
          },

          810: {
            slidesPerView: 4,
            grid: { rows: 3 },
            spaceBetween: 17,
            slidesPerGroup: 4,
          },
        }}
        modules={[Autoplay, Grid, Pagination]}
        className="mySwiper"
      >
        {pontos.map((ponto) => (
          <SwiperSlide>
            <CarouselItem
              key={ponto.id}
              id={ponto.id}
              name={ponto.name}
              last_record={ponto.last_record}
              total_error={ponto.total_error}
              success={ponto.success}
              waiting={ponto.waiting}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
