import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <input
        type="checkbox"
        name="hbr"
        id="hbr"
        className="hbr peer"
        hidden
        aria-hidden="true"
      />
      <nav className="fixed z-10 w-full border-b bg-white bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:bg-transparent">
        <div className=" m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <Link
                to={'/'}
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1 w-14">
                <img src="https://i.ibb.co/p20MfR1/E-removebg-preview.png" width={100} border="0"/>     
                </div>
                <span className="text-base font-bold text-gray-400">EARNING WAYS</span>
              </Link>
              <label
                htmlFor="hbr"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>
            </div>
            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
              <div className="text-gray-600 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                  <li>
                    <Link
                      to={'/'}
                      className="block md:px-4 transition hover:text-sky-700"
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/blog'}
                      className="block md:px-4 transition hover:text-sky-700"
                    >
                      <span>Blogs</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/#about"}
                      className="block md:px-4 transition hover:text-sky-700"
                    >
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact"}
                      className="block md:px-4 transition hover:text-sky-700"
                    >
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
