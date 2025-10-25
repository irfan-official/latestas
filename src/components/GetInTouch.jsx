import React from "react";

function GetInTouch() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("submitted");
  }
  return (
    <div className="w-full min-h-[30vh]  gap-15 flex flex-col items-center py-10 mb-10 px-5">
      <h2 className="text-4xl md:text-5xl font-bold">GetInTouch</h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="max-auto w-[90%] md:w-[80%] h-[25rem] md:h-[30rem] shadow bg-gray-200 rounded-md flex items-center justify-center px-5"
      >
        <section className="mx-auto w-[30rem] flex flex-col gap-5">
          <input
            required
            type="email"
            placeholder="example@domain"
            className="border border-white px-5 py-4 shadow rounded-lg text-[1rem] text-white font-semibold bg-[#A5AFBF] placeholder:text-white/80 outline-0"
          />
          <button
            type="submit"
            className="font-semibold cursor-pointer px-5 py-3 rounded-md shadow bg-slate-800 text-slate-300 border border-white hover:text-orange-400"
          >
            Subscribe
          </button>
        </section>
      </form>
    </div>
  );
}

export default GetInTouch;
