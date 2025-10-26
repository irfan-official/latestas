import React, { useState, useEffect, useMemo } from "react";
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

  let [vetsData, setVetsData] = useState(null);

  useMemo(() => {
    fetch("vets.json")
      .then((res) => res.json())
      .then((data) => setVetsData(data))
      .catch((err) => console.error("Error loading JSON:", err));
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
          {vetsData ? (
            vetsData.map(
              ({ name, nickName, image, rating, statement }, index) => (
                <SwiperSlide key={index} className="">
                  <section className="flex items-center justify-center">
                    <MeetOurExpertCard
                      name={name}
                      nickName={nickName}
                      image={image}
                      rating={rating}
                      statement={statement}
                    />
                  </section>
                </SwiperSlide>
              )
            )
          ) : (
            <span className="loading loading-spinner loading-xl"></span>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
