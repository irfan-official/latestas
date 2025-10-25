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
          <span className="__image__ w-24 h-24 border-3 rounded-full overflow-hidden ">
            <img
              className="w-full h-full"
              src="https://plus.unsplash.com/premium_photo-1707932500367-f0fa1061ef9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJveSUyME1PREVMfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
              alt=""
            />
          </span>
          <span className="w-[90%] md:w-[70%] justify-center mt-3 md:mt-5 flex items-center gap-5 ">
            <span className="c">Name:</span>
            <input
              value={user.name}
              disabled={!editForm}
              name="name"
              placeholder="name"
              className="border border-black  px-3 py-1 rounded-sm"
              type="text"
            />
          </span>
          <span className="w-[90%] md:w-[70%] justify-center flex items-center gap-5">
            <span className="c">Email:</span>
            <input
              value={user.email}
              disabled={!editForm}
              name="email"
              placeholder="email"
              className="border border-black  px-3 py-1 rounded-sm"
              type="email"
            />
          </span>
          <span className="w-[90%] md:w-[70%] justify-center flex items-center gap-5">
            <span className="c">Image URL:</span>
            <input
              value={user.image}
              disabled={!editForm}
              name="imageURL"
              placeholder="imageURL"
              className="border border-black  px-3 py-1 rounded-sm"
              type="text"
            />
          </span>
          {editForm ? (
            <button
              onClick={() => {
                setEditForm(true);
              }}
              type={"submit"}
              className="px-5 py-3 rounded-md shadow-md cursor-pointer"
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => {
                setEditForm(true);
              }}
              type={"button"}
              className="px-5 py-3 rounded-md shadow-md cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <span className="text-lg">Edit</span>
                <span className="text-lg">
                  <FaRegEdit />
                </span>
              </span>
            </button>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default MyProfile;
