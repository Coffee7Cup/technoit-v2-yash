import React, { useEffect } from "react";
import icon from "..\\assets\\image.png";
import { Link } from "react-router-dom";

function Header() {
    
  return (
    <>
      <div className="fixed top-0 backdrop-blur-sm z-10 bg-blue-300/70 w-[100vw] flex justify-between items-center min-h-[5rem] p-5 px-[7em] transition-all duration-300 ">
        <div>
          <img src={icon} alt="icon" className="h-[3rem] " />
        </div>
        <div>
            <ul className="flex gap-6 p-3">
                <li className=" hover:text-blue-500 transition-all duration-300 font-blod text-xl "><Link to="/">Home</Link></li>
                <li className=" hover:text-blue-500 transition-all duration-300  font-blod text-xl">
                  <Link to="/about" className={(isActive) => `${isActive ? 'text-blue-600' : ''}`}>About</Link></li>
                <li className=" hover:text-blue-500 transition-all duration-300  font-blod text-xl"><Link to="/">Home</Link></li>
            </ul>
        </div>
        <div>
            <button className="bg-gradient-to-br from-blue-500 to-blue-700 px-8 p-3 rounded-[3rem] text-white hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
                Get Quoet
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
