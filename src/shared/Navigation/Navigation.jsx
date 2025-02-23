import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Navigation.css";
import { authContext } from "../../context/AuthProvider";
import Drawer from "../../components/Drawer/Drawer";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../../hooks/useCart";
export default function Navigation() {
  const { user, setUser, logOut } = useContext(authContext);
  const { data } = useCart(user?.uid);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };
  const navOptions = (
    <>
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/recipes">Recipes</Link>
      </li>
      <li>
        <Link to="/lifestyle">Lifestyle</Link>
      </li>
      {/* <li>
        <Link to="/">Contact </Link>
      </li> */}
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/order-summary" className=" relative">
          <FaCartShopping className="w-6 h-6 text-baseColor" />
          <span className="absolute text-pink-600 font-bold -top-1 right-1">
            {data?.quantity}
          </span>
        </Link>
      </li>

      <li>
        <Link to="/">
          <FaUserCircle className="w-6 h-6 text-baseColor" />
        </Link>
      </li>
      {user?.email ? (
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      ) : (
        <li>
          <Link to="/login">Log In</Link>
        </li>
      )}
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
        <div className=" navbar-end hidden lg:flex mt-4">
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
