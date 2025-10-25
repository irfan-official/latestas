import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Nav from "./Nav.jsx";

import Hero_Text from "./Hero_Text.jsx";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Hero() {
  return (
    <div className="w-full h-[45vh] md:h-[100vh] overflow-hidden bg-white">
      <section className="m-5 md:m-10 h-[40vh] md:h-[90vh] relative rounded-3xl overflow-hidden">
        <section className="w-full hidden md:absolute text-white bg-black/20 backdrop-blur-sm md:block left-0 z-30">
          <Nav />
        </section>

        <div className=" h-full bg-black flex  justify-center ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <section className="bg-red-600 flex items-center justify-center w-full h-full">
                <section className="w-full h-full relative">
                  <img
                    className="h-full w-full object-center"
                    src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
                    alt=""
                  />
                  <section className="w-full h-full bg-black/40 absolute top-0 right-0 z-20">
                    <Hero_Text />
                  </section>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide className="">
              <section className="bg-red-600 flex items-center justify-center w-full h-full">
                <section className="w-full h-full relative">
                  <img
                    className="h-full w-full object-center"
                    src="https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
                    alt=""
                  />
                  <section className="w-full h-full bg-black/40 absolute top-0 right-0 z-20">
                    <Hero_Text />
                  </section>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide className="">
              <section className="bg-red-600 flex items-center justify-center w-full h-full">
                <section className="w-full h-full relative">
                  <img
                    className="h-full w-full object-center"
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
                    alt=""
                  />
                  <section className="w-full h-full bg-black/40 absolute top-0 right-0 z-20">
                    <Hero_Text />
                  </section>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide className="">
              <section className="bg-red-600 flex items-center justify-center w-full h-full">
                <section className="w-full h-full relative">
                  <img
                    className="h-full w-full object-center bg-center"
                    src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                    alt=""
                  />
                  <section className="w-full h-full bg-black/40 absolute top-0 right-0 z-20">
                    <Hero_Text />
                  </section>
                </section>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Hero;
