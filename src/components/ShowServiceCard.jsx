import React from "react";
import "../index.css";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

function ShowServiceCard({
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
}) {
  return (
    <div className="px-5  pt-4 pb-5 w-[22rem] h-[44rem] md:w-[24rem] md:h-[40rem] lg:w-[23rem] lg:h-[40rem] 2xl:w-[25rem] 2xl:h-[40rem] border flex flex-col rounded-lg gap-4 shadow text-[0.9rem] justify-between">
      <h2 className="text-center font-semibold text-xl ">{serviceName}</h2>
      <section className="__img__ w-full h-[17rem] xl:h-[18rem] flex flex-col gap-2 justify-start ">
        <section className="__container__ relative h-full justify-start  rounded-2xl overflow-hidden">
          <img
            className="h-full w-full bg-center object-center"
            src={image}
            alt=""
          />

          <span className="px-5 py-3 absolute bottom-0 left-0 bg-white/40 backdrop-blur-2xl flex items-center gap-2 rounded-tr-2xl overflow-hidden ">
            <span className="c">Rating: {rating}</span>
            <span className="text-yellow-400">
              <FaStar size={21} />
            </span>
          </span>
        </section>
      </section>
      <section className="__middle__ flex flex-col gap-3 mt-1">
        <section className="__category__">
          Category: <span className="font-semibold">{category}</span>
        </section>
        <section className="__provider_info__ flex items-center justify-between">
          <section className="__provider_name__ font-semibold text-md 2xl:text-lg text-blue-400">
            {providerName}
          </section>
          <section className="__provider_email__ text-orange-600">
            {providerEmail}
          </section>
        </section>
        <section className="__description__ mt-3">{description}</section>
        <section className="flex items-center justify-between mt-1">
          <section className="c">Slots Available: {slotsAvailable}</section>
          <section className="px-5 py-2 text-white font-semibold bg-slate-900 rounded-md">
            Price: {price}
          </section>
        </section>
      </section>
      <section className="__view_details__ flex justify-center mt-2 ">
        <NavLink
          className="px-7 py-3 shadow-md text-black rounded-lg bg-blue-100 hover:bg-blue-200"
          to={`/services/${serviceId}`}
        >
          View Details
        </NavLink>
      </section>
    </div>
  );
}

export default ShowServiceCard;
