import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-gray-200 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold ">
          <Link to="/">
            <span className="bg-slate-100 text-black rounded-lg">We</span>
            Edit
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:font-bold">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:font-bold">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:font-bold">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
