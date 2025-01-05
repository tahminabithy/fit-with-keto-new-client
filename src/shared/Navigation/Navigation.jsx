import React from "react";
import { Link } from "react-router-dom";
import { FaShopify, FaUserCircle } from "react-icons/fa";
import "./Navigation.css";
export default function Navigation() {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Recipes</Link>
      </li>
      <li>
        <Link to="/">Lifestyle</Link>
      </li>
      <li>
        <Link to="/">Option</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
      <li>
        <Link to="/">
          {/* <FaCartShopping /> */}
          <FaShopify className="w-6 h-6 text-baseColor" />
        </Link>
      </li>

      <li>
        <Link to="/">
          <FaUserCircle className="w-6 h-6" />
        </Link>
      </li>
      <li>
        <Link to="/">Log In</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font">Fit With Keto</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */
}
