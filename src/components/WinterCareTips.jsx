import React from "react";
import doubleQuto from "../assets/double-quotes.png";

function WinterCareTips() {
  return (
    <div className="__top__ w-full px-5 my-20 mt-40 flex flex-col justify-center  gap-17 pb-10">
      <section className="__Heading-Tips__ font-bold text-5xl text-center">
        Winter Care Tips
      </section>
      <section className="__bottom__ flex flex-col md:flex-row gap-20 items-center justify-center">
        <section className="__Img__ w-[22rem] md:w-[30rem]  __left__ rounded-xl shadow overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581888475780-27b6b0bc3690?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
            alt=""
            className="c"
          />
        </section>
        <section className="__right__ w-[90%] md:w-[40%] flex flex-col gap-4 justify-center items-center">
          <section className="__inner_text__ flex flex-col gap-6">
            <h2 className="__heading__ font-bold text-xl select-none">Tips:</h2>
            <section className="__text__ relative">
              <span className="absolute select-none -top-5 -left-10 md:-top-5 md:-left-12">
                <img src={doubleQuto} alt="" className="rotate-180 w-10" />
              </span>
              <p className="flex text-justify ">
                Caring for your pets during winter is crucial to keeping them
                healthy, warm, and happy. As temperatures drop, provide a cozy,
                insulated bed and ensure their sleeping area is away from cold
                drafts or damp floors. Short-haired and small breeds may need
                warm sweaters or coats when venturing outside. Protect their
                paws from snow, ice, and road salt with paw balms or waterproof
                boots to prevent cracking and irritation. Maintain regular
                grooming to prevent matting, which can trap moisture and reduce
                insulation. Avoid overbathing to preserve natural oils, keeping
                their skin hydrated. Ensure access to fresh water, as indoor
                heating can cause dehydration, and adjust their diet for extra
                energy. Keep outdoor walks shorter during extreme cold and
                always dry them off afterward. Schedule a vet visit to check for
                seasonal health issues and update vaccinations. Proper winter
                care ensures your furry companion stays safe and comfortable all
                season long.
              </p>
              <span className="absolute select-none -bottom-5 -right-10 md:-bottom-5 md:-right-12">
                <img src={doubleQuto} alt="" className="w-10" />
              </span>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default WinterCareTips;
