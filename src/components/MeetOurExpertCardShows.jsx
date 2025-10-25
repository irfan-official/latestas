import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MeetOurExpertCard from "./MeetOurExpertCard";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-5xl text-center mt-30">
        Meet Our Expert Vets
      </h2>
      <div
        className=" w-full flex justify-center mt-20 mb-20 px-5"
        data-aos="fade-down"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          navigation={true} // ✅ enables arrow buttons
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {[...Array(7)].map((_, i) => (
            <SwiperSlide key={i} className="">
              <section className="flex items-center justify-center">
                <MeetOurExpertCard />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
