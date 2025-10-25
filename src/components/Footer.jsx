import React from "react";
import Twitter_icon from "../assets/twitter_icon.png";
import LinkedIn_icon from "../assets/linkedin_icon.png";
import FaceBook_icon from "../assets/facebook_icon.png";
import Email_icon from "../assets/email_icon.png";

import { MdOutlinePets } from "react-icons/md";

function Footer() {
  return (
    <div
      id="footer"
      className="w-full min-h-[40vh] bg-black text-white flex flex-col gap-4 items-center justify-center px-5 "
    >
      <div className="__container__ my-8 lg:my-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 mx-auto sm:w-[85%] w-[95%] ">
        <section className="__CS-Ticket_System__ col-span-2 sm:col-span-3 lg:col-span-2 order-1 w-full flex items-center flex-col gap-3 justify-center ">
          <section className="flex w-full justify-start items-center gap-4">
            <span className="w-10">
              <MdOutlinePets size={35} />
            </span>
            <h2 className="text-[27px] font-bold  w-full">Pet Care</h2>
          </section>
          <p className="text-white/40 text-justify tracking-normal">
            Hero IO is a modern web-based platform that recreates the core
            experience of a digital app marketplace. Users can seamlessly
            browse, explore, and interact with a variety of applications, each
            displaying complete details such as size, ratings, reviews, and
            download counts. It offers a responsive and engaging interface
            designed for intuitive navigation and immersive exploration. Built
            as a PWA-style solution, Hero IO provides smooth transitions,
            real-time data handling, and dynamic content rendering, delivering
            an app store-like environment entirely within the browser.
          </p>
        </section>
        <section className="__Company__ mt-6 lg:mt-0 w-full col-span-2 sm:col-span-1 lg:col-span-1 order-2 flex flex-col gap-2  justify-start items-center">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold w-full text-start text-[20px]">
              Company
            </h2>
            <ul className="flex flex-col gap-2 items-start justify-center text-white/40">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Our Mission</a>
              </li>
              <li>
                <a href="">Contact Saler</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="__Services__ mt-5 lg:mt-0 w-full col-span-1 order-3  flex flex-col gap-2 items-center justify-start">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold w-full text-start text-[20px]">
              Services
            </h2>
            <ul className="flex flex-col gap-2 items-start justify-center text-white/40">
              <li>
                <a href="">Products & Services</a>
              </li>
              <li>
                <a href="">Customer Stories</a>
              </li>
              <li>
                <a href="">Download Apps</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="__Information__ mt-5 lg:mt-0 w-full col-span-1 order-4  flex flex-col gap-2 items-center justify-start">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold w-full text-start text-[20px]">
              Information
            </h2>
            <ul className="flex flex-col gap-2 items-start justify-center text-white/40">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Join Us</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="__Social_Links__ mt-6 lg:mt-0 w-full col-span-2 sm:col-span-3 lg:col-span-2 order-5  flex flex-col gap-2 items-center justify-start">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold w-full text-center lg:text-start text-[20px] mb-4">
              Social Links
            </h2>
            <ul className="flex gap-4 items-start justify-center text-white/40">
              <li className="flex items-center justify-center gap-2">
                <span className="c">
                  <img className="" src={Twitter_icon} alt="" />
                </span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="c">
                  <img className="" src={LinkedIn_icon} alt="" />
                </span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="c">
                  <img className="" src={FaceBook_icon} alt="" />
                </span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="c">
                  <img className="" src={Email_icon} alt="" />
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <hr className="w-full border-t text-gray-100/30" />
      <h2 className="mb-6">Copyright © 2025 - All right reserved</h2>
    </div>
  );
}

export default Footer;
