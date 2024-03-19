import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat
                            leading-normal
                            texy-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="flex gap-2 text-lg leading-normal font-medium
        font-montserrat max-lg:hidden wide:mr-24 hover:bg-slate-400 rounded-full justify-center items-center  
        px-4 py-2 cursor-pointer"
        >
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="cursor-pointer"
          >
            <img src={hamburger} alt="" width={25} height={25} />
          </button>
          {isMenuOpen && (
            <ul className="  absolute top-full left-0 right-0 z-20 bg-white shadow-md flex flex-col items-center py-4 lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label} className="my-2  hover:font-bold  ">
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <div
                className="flex gap-2 text-lg leading-normal font-medium
        font-montserrat  wide:mr-24 bg-coral-red rounded-full justify-center items-center  
        px-4 py-2 cursor-pointer hover:bg-white"
              >
                <a href="/">Sign in</a>
                <span>/</span>
                <a href="/">Explore now</a>
              </div>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
