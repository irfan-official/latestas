import React, { useState, useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
// import RatingsChart from "./RatingsChart.jsx";
import { toast } from "react-toastify";
import Page404 from "../pages/page404.jsx";
import ClientComment from "../components/ClintComment.jsx";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { Data_Context } from "../context/DataContext.jsx";
import Rating from "../components/Rating.jsx";

function ServicesDetails() {
  const { id } = useParams();

  // const { apps, setApps, totalApps, setTotalApps } = useContext(UserContext);

  const [Booked, setBooked] = useState(false);
  const [selectedApp, setSelectedApp] = useState({});
  const [excedID, setExcedID] = useState(false);
  const [checkService, setCheckService] = useState(null);
  const [sortedRatings, setSortedRatings] = useState([]);
  let { serviceData, loader, DataFetching } = useContext(Data_Context);

  useEffect(() => {
    if (serviceData.length < 1) {
      DataFetching();
    }

    const foundService = serviceData.find(
      (obj) => Number(obj.serviceId) === Number(id)
    );

    if (!foundService) {
      setExcedID(true); // triggers 404 if not found
    } else {
      setCheckService(foundService);

      setSortedRatings(
        [...(foundService.ratings || [])].sort((a, b) => {
          const getNum = (str) => parseInt(str.split(" ")[0]);
          return getNum(b.name) - getNum(a.name);
        })
      );
    }
  }, [id, serviceData]);

  function formatDownloads(num) {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return String(num);
    }
  }

  if (loader || !checkService) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-2  text-black px-6 sm:px-20  py-20">
      <h1 className="text-5xl font-bold mb-10">{checkService?.serviceName}</h1>
      <section className="_top_ w-full flex flex-col lg:flex-row lg:items-center lg:justify-between border-b border-b-gray-600/40 py-6 lg:gap-8">
        <span className="_left_ rounded-xl overflow-hidden shadow-lg inline-block ">
          <img
            className="w-full lg:w-[50rem] "
            src={checkService?.image}
            alt=""
          />
        </span>
        <section className="_right_ w-full lg:w-[70%] flex flex-col items-start justify-center  gap-2">
          <section className="_title_ w-full flex flex-col gap-3 py-5 ">
            <h1 className="text-3xl font-bold ">
              {"Title"} {checkService?.providerName}
            </h1>
            <p className="font-semibold text-violet-500">
              {checkService?.providerEmail}
            </p>
          </section>

          <section className="font-semibold text-balck flex items-center justify-start gap-2">
            <span className="c">Category:</span>
            <span className="c">{checkService?.category}</span>
          </section>

          <section className="_ratings-overview_ flex flex-col sm:flex-row gap-4 sm:gap-0  w-full items-center border-t-2 border-t-violet-500">
            <section className="downloads_ flex items-end justify-center gap-4  px-2 sm:px-6 py-2">
              <section className="_left_ text-black flex flex-col gap-3">
                <section className="text-[1rem] sm:text-[0.8rem] sm:text-gray-700/80">
                  Service Taken
                </section>
                <section className="font-extrabold text-4xl ">
                  {formatDownloads(checkService?.serviceTaken)}
                </section>
              </section>
              <section className="_right_ text-[#632EE3] flex items-center justify-center  md:w-[5vw]">
                <FaHandHoldingMedical size={50} />
              </section>
            </section>

            <hr className="w-full text-gray-600/20 sm:hidden" />

            <section className="_ratings_ flex items-end gap-4 justify-center md:border-l border-dotted border-l-gray-600/20  px-6 py-2">
              <section className="_left_ text-black flex flex-col gap-3">
                <section className="text-[1rem]  sm:text-[0.8rem] sm:text-gray-700/80 text-nowrap">
                  Avarage Ratings
                </section>
                <section className="font-extrabold text-4xl">
                  {checkService?.ratingAvg}
                </section>
              </section>
              <section className="_right_ text-black flex items-center justify-center md:w-[5vw]">
                <svg
                  stroke="#632EE3"
                  fill="#632EE3"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
              </section>
            </section>

            <hr className="w-full text-gray-600/20 sm:hidden" />

            <section className="_review_ flex items-end gap-6 justify-center md:border-l border-dotted border-l-gray-600/20 px-6 py-2   ">
              <section className="_left_ text-black flex flex-col gap-3">
                <section className="text-[1rem]  sm:text-[0.8rem] sm:text-gray-700/80 text-nowrap">
                  Total Reviews
                </section>
                <section className="__reviews__ font-extrabold text-4xl">
                  {formatDownloads(checkService?.reviews)}
                </section>
              </section>
              <section className="_right_ text-black flex items-center justify-center ">
                <svg
                  stroke="#632EE3"
                  fill="#632EE3"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"></path>
                </svg>
              </section>
            </section>
          </section>
          <section className="__Price__ px-5 py-3 bg-blue-100 rounded mt-5 flex items-center justify-start gap-2 font-semibold">
            <span className="c">Price:</span>
            <span className="c">${checkService?.price}</span>
          </section>
          <section className="_install_ border-t-2 md:border-none pt-5 border-t-gray-600/40 w-full">
            <button className="text-center  text-[1.1rem] px-4 py-2 md:px-5 md:py-3 rounded-lg bg-violet-500 text-white font-semibold md:text-[1.3rem] shadow-lg cursor-pointer">
              {Booked ? "Booked" : `Book service now `}
            </button>
          </section>
        </section>
      </section>
      <section className="_middle_ _graph_ w-full">
        <div className="w-full h-[400px] bg-gray-50 p-5 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Ratings</h2>
          <Rating sortedRatings={sortedRatings} />
        </div>
      </section>

      <section className=" _descriptions_ flex flex-col items-start justify-center gap-4 mt-20">
        <h2 className="font-bold text-4xl">Description</h2>
        <span className="flex flex-col items-center justify-center gap-4 text-gray-700/70 text-justify">
          <p key={1}>{checkService?.serviceDetails}</p>
        </span>
      </section>

      <section className=" _descriptions_ w-full flex flex-col items-start justify-start gap-7 mt-20 ">
        <section className=" flex gap-4 items-end mb-2">
          <h2 className="font-bold text-4xl ">Reviews</h2>
          <span className=" text-3xl">
            <BsFillChatRightTextFill />
          </span>
        </section>
        <hr className="w-full border-b-2" />
        <section className="w-full flex flex-col items-start justify-start gap-4">
          {(checkService?.reviewComments || []).map(
            ({ image, name, rating, comment }) => (
              <ClientComment
                image={image}
                name={name}
                rating={rating}
                comment={comment}
              />
            )
          )}
        </section>
      </section>
    </div>
  );
}

export default ServicesDetails;
