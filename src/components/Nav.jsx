import React, { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink, useNavigate, useLocation } from "react-router";
import { MdOutlinePets } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Auth_Context } from "../context/AuthContext";
// DropdownPortal.jsx

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverDiv, setHoverDiv] = useState(false);

  let { user } = useContext(Auth_Context);

  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = () => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById("services");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  let navList = (
    <>
      <NavLink to="/" className={activePage}>
        Home
      </NavLink>
      <NavLink to="#" onClick={handleScroll} className="text-nowrap">
        Services
      </NavLink>
      <NavLink
        to="#"
        onClick={() => {
          const footer = document.getElementById("footer");
          if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={"text-nowrap"}
      >
        About Us
      </NavLink>
    </>
  );

  useEffect(() => {
    Aos.init();

    // Detect window size
    const handleResize = () => setIsMobile(window.innerWidth < 750);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function activePage({ isActive }) {
    return isActive
      ? "border-b-2 border-b-blue-500 text-nowrap"
      : "text-nowrap";
  }
  return (
    <nav
      id="nav"
      data-aos="fade-down"
      className="flex w-[100%] px-5 md:px-20 py-5 "
    >
      <section className="__left__ w-1/2 flex items-center justify-start gap-4 lg:gap-20 ">
        {isMobile && (
          <div className="dropdown dropdown-right dropdown-center shadow z-[9999] relative">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-white text-black border-0 w-12"
            >
              Click
            </div>

            <ul
              tabIndex={-1}
              className="__mobile-nav-list__ dropdown-content flex flex-col gap-2 menu rounded-box 
                 z-[9999] absolute w-52 p-3 shadow-sm bg-white text-black px-4"
            >
              {navList}
            </ul>
          </div>
        )}

        <NavLink
          to={"/"}
          className={`__logo__ flex ${
            isMobile ? "flex-col" : "flex-row"
          } items-center justify-center gap-1 cursor-pointer `}
        >
          <span className="flex items-center justify-center">
            <MdOutlinePets size={isMobile ? 35 : 50} />
          </span>
          <h1 className="text-xl md:text-3xl font-bold text-nowrap">
            Pet Care
          </h1>
        </NavLink>
        <section className="__window-nav-list__ md:flex gap-10 items-center hidden">
          {navList}
        </section>
      </section>
      <section className="__right__ w-1/2 flex gap-5 items-center justify-end ">
        <section className="__Call__ flex items-center gap-2">
          <section className="__call_icon__ bg-amber-50/20 flex items-center justify-center px-1 py-1 rounded-full">
            <BiSolidPhoneCall size={isMobile ? 25 : 35} />
          </section>
          <section className="__Call_info__ flex flex-col  justify-center font-semibold text-[0.75rem] lg:text-[1rem]">
            <section className="c">Call us:</section>
            <section className="c">+880 1XX</section>
          </section>
        </section>
        <section className="__Profile&Login__">
          {user?.name ? (
            <div className="relative">
              <div
                onClick={() => {
                  navigate("/profile");
                }}
                onMouseLeave={() => {
                  setHoverDiv(false);
                }}
                onMouseEnter={() => {
                  setHoverDiv(true);
                }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-50  rounded-full border-2 sm:border-3 border-gray-100 overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-full outline-0 border-0"
                  src={`
                   ${user.image}`}
                  alt="user image"
                />
              </div>
              {hoverDiv && (
                <div className="absolute z-[9999999999999] -bottom-15 -right-[20%] min-w-22 bg-white/30 backdrop-blur-2xl rounded-md">
                  <section className="w-full h-full flex items-center justify-center px-3 py-3">
                    {user.email}
                  </section>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="px-5 py-3 bg-gray-400 text-center text-white rounded-sm"
            >
              Login
            </NavLink>
          )}
        </section>
      </section>
    </nav>
  );
}

export default Nav;
