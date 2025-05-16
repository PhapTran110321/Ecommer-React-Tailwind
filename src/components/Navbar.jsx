import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { title: "Jewelry & Accessories", path: "/" },
  { title: "Clothing & Shoes", path: "/" },
  { title: "Home & Living", path: "/" },
  { title: "Wedding & Party", path: "/" },
  { title: "Toys & Entertainment", path: "/" },
  { title: "Art & Collectibles", path: "/" },
  { title: "Craft Supplies & Tools", path: "/" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0 mx-auto ">
      {/* NAV BAR */}
      <nav className="flex justify-between items-center w-full md:px-28 px-4 md:py-4 pt-6 pb-3">
        {/* SEARCH */}
        <FaSearch className="text-black w-6 h-6 cursor-pointer hidden md:block" />

        {/* LOGO */}
        <img src={logo} alt="Logo" />

        {/* ACCOUNT AND SHOPPING */}
        <div className="text-lg text-black sm:flex items-center hidden gap-4">
          <NavLink to="/" className="flex items-center gap-2">
            <FaUser />
            Account
          </NavLink>
          <NavLink to="/" className="flex items-center gap-2">
            <FaShoppingBag />
            Shopping
          </NavLink>
        </div>

        {/* MENU BAR */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* HR */}
      <hr />

      {/* NAV ITEMS (Desktop) */}
      <div className="pt-4">
        <ul className="hidden lg:flex justify-between items-center text-black">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* MENU MOBILE (with transition) */}
      <div>
        <ul
          className={`bg-black text-white rounded-md p-4 space-y-3 transform transition-all duration-300 origin-top ${
            isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={toggleMenu}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
