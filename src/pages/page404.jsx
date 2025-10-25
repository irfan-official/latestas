import React from "react";
import { NavLink } from "react-router";

function page404() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center overflow-hidden text-black">
      <div className="relative flex justify-center 2xl:scale-[1] lg:scale-[0.89]">
        <h1 className="text-center text-8xl font-semibold absolute top-24 ">
          404
        </h1>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
        <div className="absolute bottom-5 flex flex-col gap-8">
          <p className="text-center">
            <strong>
              Look like you're lost <br /> the page you are looking for not
              avaible!
            </strong>
          </p>
          <span className="text-center">
            <NavLink
              className="px-5 py-2 rounded-sm bg-[#39AC31] text-white text-center font-semibold"
              to="/"
            >
              Go to Home
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default page404;
