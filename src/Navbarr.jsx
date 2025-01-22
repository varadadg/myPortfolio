import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="bg-black fixed w-full z-10 text-white font-now h-8 flex justify-end items-center text-center text-sm xs:mt-0 sm:mt-0 md:mt-0 lg:mt-0">
      <ul className="flex justify-end items-center p-0 h-16 mx-8 md:mx-12 lg:mx-20 xl:mx-24">
        <li className="mr-4 md:mr-6 lg:mr-8 xl:mr-10 xs:hidden sm:block text-white ">
          <NavLink to="/"> HOME</NavLink>
        </li>
        <li className="mr-4 md:mr-6 lg:mr-8 xl:mr-10 xs:hidden sm:block text-white">
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>

        <li className="mr-4 md:mr-6 lg:mr-8 xl:mr-10 xs:hidden sm:block text-white">
          {/* Added Instagram link */}
          <a
            href="https://crystalvisionsbykali.vercel.app/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer">
            TAROT WEBSITE (in progress)
          </a>
        </li>
        <li
          className="mr-4 md:mr-6 lg:mr-8 xl:mr-10 md:hidden sm:hidden xs:block "
          onClick={handleClick}>
          {!nav ? (
            <FiAlignJustify style={{ fontSize: "24px" }} />
          ) : (
            <div className="relative bg-white mt-[-22px] ">
              <FiX
                className=" z-20 absolute  p-2 rounded-full   animate-fadeIn "
                style={{ fontSize: "30px", bottom: "-1px", color: "white" }}
              />
            </div>
          )}
        </li>
      </ul>
      <ul
        className={
          !nav
            ? "hidden"
            : "text-left animate-fadeIn absolute border h-26 mt-12 w-full bg-black border-black  w-3/4 p-4 md:hidden sm:hidden xs:block"
        }>
        <li className="ml-[18rem]" onClick={() => setNav(!nav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </li>
        <li className=" w-full mt-2 text-white border-b border-white">
          <NavLink to="/" smooth>
            HOME
          </NavLink>
        </li>
        <li className=" w-full text-white border-b border-white">
          <NavLink to="/projects" smooth>
            PROJECTS
          </NavLink>
        </li>
        <li className=" w-full text-white border-b border-white">
          <a
            href="https://www.instagram.com/elixirofthoughts"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer">
            INSTA
          </a>
        </li>
        <li className=" w-full text-white border-b border-white">
          <a
            href="https://crystalvisionsbykali.vercel.app/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer">
            TAROT WEBSITE(on-going)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
