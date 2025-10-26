import React, { useState, useContext } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { FaRegEdit } from "react-icons/fa";
import { Auth_Context } from "../context/AuthContext";

function MyProfile() {
  let [editForm, setEditForm] = useState(false);
  let { user } = useContext(Auth_Context);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="w-full min-h-screen ">
      <section className="w-full  bg-slate-900  text-white font-bold">
        <Nav />
      </section>
      <div className="w-full min-h-[50vh] flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-[35rem] border my:10 md:my-20 flex flex-col items-center gap-2 p-5 py-10 rounded shadow"
        >
          <span className="__image__ w-24 h-24 border-3 rounded-full overflow-hidden bg-center object-center">
            <img
              className="w-full h-full bg-center object-center"
              src={`${user.image}`}
              alt=""
            />
          </span>
          <section className="w-full  grid grid-cols-1 gap-5">
            <span className="__name__ w-full  md:w-full justify-center mt-3 md:mt-5 flex items-center gap-5 ">
              <span className="text-center  w-[30%] ">Name:</span>
              <input
                value={user.name}
                disabled={!editForm}
                name="name"
                placeholder="name"
                className={`border w-[70%] border-black   px-3 py-1 rounded-sm ${
                  editForm ? "border-lime-600" : "border-black"
                }`}
                type="text"
              />
            </span>
            <span className="__email__ w-full justify-center flex items-center gap-5">
              <span className="w-[30%] text-center">Email:</span>
              <input
                value={user.email}
                disabled={!editForm}
                name="email"
                placeholder="email"
                className={`border border-black w-[70%] px-3 py-1 rounded-sm ${
                  editForm ? "border-lime-600" : "border-black"
                }`}
                type="email"
              />
            </span>
            <span className="__img-URL__ w-full  justify-center flex items-center gap-5">
              <span className="w-[30%]  text-center">Image URL:</span>

              <textarea
                value={user.image}
                disabled={!editForm}
                name="imageURL"
                placeholder="imageURL"
                className={`border w-[70%] border-black  px-3 py-1 rounded-sm ${
                  editForm ? "border-lime-600" : "border-black"
                }`}
              ></textarea>
            </span>
          </section>
          <section className="mt-10">
            {editForm ? (
              <section className="__update__ flex items-center justify-center gap-5 font-semibold">
                <button
                  onClick={() => {
                    setEditForm(true);
                  }}
                  type={"submit"}
                  className="px-5 py-3 bg-slate-950 text-white rounded-md shadow-md cursor-pointer"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setEditForm(false);
                  }}
                  type={"button"}
                  className="px-5 py-3 bg-red-600 text-white rounded-md shadow-md cursor-pointer"
                >
                  Cancel
                </button>
              </section>
            ) : (
              <button
                onClick={() => {
                  setEditForm(true);
                }}
                type={"button"}
                className="px-5 py-3 bg-lime-500 font-semibold text-white rounded-md shadow-md cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">Edit</span>
                  <span className="text-lg">
                    <FaRegEdit />
                  </span>
                </span>
              </button>
            )}
          </section>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default MyProfile;
