import React from "react";
import { FaStar } from "react-icons/fa";

function MeetOurExpertCard() {
  return (
    <div className="w-[22rem] md:w-[35rem] p-5 md:p-10 flex flex-col justify-between border rounded-lg shadow-sm gap-8 bg-[#F6F2ED]">
      <section className="__top__ flex items-center gap-4">
        <section className="__img__ rounded-full w-[5rem] h-[5rem] overflow-hidden border-2">
          <img
            src="https://wordpress.themehour.net/babet/wp-content/uploads/2025/09/testi1-2.jpg"
            alt=""
            className="w-full h-full"
          />
        </section>
        <section className="__info__ flex flex-col justify-center">
          <h2 className="text-xl font-bold">Mary Doglas</h2>
          <h4 className="text-gray-600/40 font-semibold">Pet Lover</h4>
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
        <section className="c">
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
          porro necessitatibus aperiam veritatis similique nulla id voluptas
          ipsa voluptate vel."
        </section>
      </section>
    </div>
  );
}

export default MeetOurExpertCard;
