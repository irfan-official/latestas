import React, { useContext, useEffect, useState, useMemo } from "react";
import { Auth_Context } from "../context/AuthContext";
import { Data_Context } from "../context/DataContext.jsx";
import ClientFeedbackCard from "../components/ClientFeedbackCard.jsx";
import usersFeedBackData from "../seeds/usersFeedback.js";
import Marquee from "react-fast-marquee";
import ClientFeedback from "../components/ClientFeedback.jsx";
import Nav from "../components/Nav.jsx";
import { NavLink } from "react-router";
import Hero from "../components/Hero.jsx";
import ShowServiceCard from "../components/ShowServiceCard.jsx";
import MeetOurExpertCard from "../components/MeetOurExpertCard.jsx";
import MeetOurExpertCardShows from "../components/MeetOurExpertCardShows.jsx";
import Footer from "../components/Footer.jsx";
import WinterCareTips from "../components/WinterCareTips.jsx";
import GetInTouch from "../components/GetInTouch.jsx";

function Home() {
  let { user } = useContext(Auth_Context);
  let { serviceData, loader } = useContext(Data_Context);

  return (
    <div className="w-full bg-white min-h-screen text-black flex-col justify-center items-center backdrop-blur-lg">
      <section className="w-full md:hidden bg-slate-900  text-white font-bold">
        <Nav />
      </section>
      <Hero />
      <section
        id="services"
        className="__Our-Services__ mt-10 md:mt-20 flex flex-col justify-center items-center gap-20"
      >
        <h2 className="font-bold text-5xl text-center">Our Services</h2>
        {loader ? (
          <section className="w-full min-h-28 flex justify-center ">
            <span className="loading loading-spinner loading-xl scale-200"></span>
          </section>
        ) : (
          <section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-5 2xl:gap-10 md:gap-15 justify-center items-center content-center mb-10">
            {serviceData.length >= 1 &&
              serviceData.map(
                (
                  {
                    serviceId,
                    serviceName,
                    providerName,
                    providerEmail,
                    price,
                    rating,
                    slotsAvailable,
                    description,
                    image,
                    category,
                  },
                  index
                ) => (
                  <ShowServiceCard
                    key={index}
                    serviceId={serviceId}
                    serviceName={serviceName}
                    providerName={providerName}
                    providerEmail={providerEmail}
                    price={price}
                    rating={rating}
                    slotsAvailable={slotsAvailable}
                    description={description}
                    image={image}
                    category={category}
                  />
                )
              )}
          </section>
        )}
      </section>
      <MeetOurExpertCardShows />
      <ClientFeedback />
      <WinterCareTips />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Home;
