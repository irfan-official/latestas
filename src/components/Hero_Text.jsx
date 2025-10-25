import React from "react";
import "../index.css";

function Hero_Text() {
  return (
    <section className="w-full h-full flex flex-col gap-5 items-center justify-center">
      <span className="hero-text-style text-4xl md:text-9xl font-semibold ">
        WE CARE &
      </span>
      <span className="hero-text-style text-4xl md:text-9xl font-semibold ">
        WE PROCTECT
      </span>
    </section>
  );
}

export default Hero_Text;
