import React from "react";
import { FaStar } from "react-icons/fa";
import BackGroundSVG from "../assets/abstract-contour-topographic-line-pattern-260nw-1972516931-removebg-preview.png";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function ClientFeedbackCard({ user_img, rating, feedback }) {
  return (
    <div className="___card__ border w-[20rem]  min-h-[11vw] rounded-xl shadow-md border-gray-300/30 flex flex-col justify-between gap-3 p-5 mx-4 my-2">
      <section className="__img__ w-full flex items-center justify-center">
        <span className="flex items-center justify-center rounded-full overflow-clip h-20 w-20 border-3 border-gray-400">
          <img src={user_img} alt="" className="c" />
        </span>
      </section>
      <section className="_stars_ratings_ flex items-center justify-center">
        <span className="flex items-center justify-center gap-2 ">
          {(() => {
            const stars = [];
            for (let i = 0; i < 5; i++) {
              if (i < rating) {
                stars.push(
                  <span className="text-yellow-400" key={i}>
                    <FaStar />
                  </span>
                );
              } else {
                stars.push(
                  <span className="text-yellow-500" key={i}>
                    <FaRegStar />
                  </span>
                );
              }
            }
            return stars;
          })()}
        </span>
      </section>
      <section className="__comment_feed_back__">
        <p className="text-center">{feedback}</p>
      </section>
    </div>
  );
}

export default ClientFeedbackCard;
