import React from "react";
import { FaStar } from "react-icons/fa";

function MeetOurExpertCard({ name, nickName, image, rating, statement }) {
  return (
    <div className="w-[22rem] md:w-[35rem] h-[17rem] p-5 md:p-10 flex flex-col justify-between border rounded-lg shadow-sm gap-8 bg-[#F6F2ED]">
      <section className="__top__ flex items-center gap-4">
        <section className="__img__ rounded-full w-[5rem] h-[5rem] overflow-hidden border-2">
          <img src={`${image}`} alt="Vet Image" className="w-full h-full" />
        </section>
        <section className="__info__ flex flex-col justify-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <h4 className="text-gray-600/40 font-semibold">{nickName}</h4>
        </section>
      </section>
      <section className="__bottom__ flex flex-col gap-2">
        <section className="flex gap-2 text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </section>
        <section className="c">"{statement}"</section>
      </section>
    </div>
  );
}

export default MeetOurExpertCard;
