import { useState } from "react";
import { close, logo, menu, textLogo } from "../Assets";
import { navLinks } from "../constants";
import DownloadButton from "./DownloadButton";
import {About, Contact,Features,HowTO} from "../Pages/PageIndex";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
      <nav className="flex items-center justify-between w-full py-6 navbar">
    
          <img src={logo} alt="task-mate" className="w-[75px] h-[50px]"></img>
          <img src={textLogo} alt="task-mate" className="w-[75px] h-[50px]"></img>
              
      <ul className="items-center justify-center flex-1 hidden list-none sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-Montserrat font-semibold cursor-pointer text-[12px] ${
              active === nav.title ? "text-green" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

    <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="flex flex-col items-start justify-end flex-1 list-none">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-Montserrat font-semibold cursor-pointer text-[14px] ${
                  active === nav.title ? "text-green" : "md:text-black text-black "
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
          </div>
      <DownloadButton />
      <div className="px-4">
        <button type="button" className={`hidden md:block rounded-full py-3 px-6 font-Montserrat font-medium text-[12px] text-white bg-button-gradient outline-none `}>
          Login/Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
