import React from "react";
import icon from "../assets/image.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="fixed top-0 backdrop-blur-sm z-10 bg-blue-300/70 w-[100vw] flex justify-between items-center min-h-[5rem] p-5 px-[7em] transition-all duration-300">
        <div>
          <img src={icon} alt="icon" className="h-[3rem]" />
        </div>
        <div>
          <ul className="flex gap-6 p-3">
            <li className="font-bold text-xl">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-500 transition-all duration-300 ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-bold text-xl">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-500 transition-all duration-300 ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="font-bold text-xl">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-blue-500 transition-all duration-300 ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                Services
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-gradient-to-br from-blue-500 to-blue-700 px-8 p-3 rounded-[3rem] text-white hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
            Get Quote
          </button>
        </div>
        <div>
          <button>light/dark</button>
        </div>
      </div>
    </>
  );
}

export default Header;
