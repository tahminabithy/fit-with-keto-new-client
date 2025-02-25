import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowAltCircleLeft,
  FaBars,
  FaLongArrowAltLeft,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import navLogo from "../../assets/logo.png";
import { authContext } from "../../context/AuthProvider";
import { useCart } from "../../hooks/useCart";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, setUser, logOut } = useContext(authContext);
  const { data } = useCart(user?.uid);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
    setIsOpen(false);
    setUserDropdownOpen(false);
  };

  const toggleNav = () => setIsOpen(!isOpen);
  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);

  // Close the user dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // Define common nav options for desktop
  const navOptions = (
    <>
      <Link to="/" className="hover:text-baseColor">
        Home
      </Link>
      <Link to="/about" className="hover:text-baseColor">
        About
      </Link>
      <Link to="/recipes" className="hover:text-baseColor">
        Recipes
      </Link>
      <Link to="/lifestyle" className="hover:text-baseColor">
        Lifestyle
      </Link>
      <Link to="/shop" className="hover:text-baseColor">
        Shop
      </Link>
      <Link to="/order-summary" className="relative">
        <FaCartShopping className="w-6 h-6" />
        <span className="absolute text-baseColor font-bold -top-3 -right-2">
          {data?.quantity || 0}
        </span>
      </Link>
      {user?.email ? (
        <div className="relative" ref={dropdownRef}>
          <button onClick={toggleUserDropdown} className="focus:outline-none">
            <FaUserCircle className="w-6 h-6 text-baseColor" />
          </button>

          {userDropdownOpen && (
            <div className="absolute top-12  right-0 mt-2 w-72 bg-gray-100 rounded shadow-lg z-20 py-4">
              <div className="p-4 border-b">
                <p className="font-semibold text-baseColor">
                  {user?.name || "User"}
                </p>
                <p className="text-sm text-gray-600">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 pt-2 hover:text-baseColor"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login" className="hover:text-baseColor">
          Log In
        </Link>
      )}
    </>
  );

  return (
    <nav className="shadow">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              className="h-20 w-28 object-contain"
              src={navLogo}
              alt="Logo"
            />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold">
          {navOptions}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/recipes"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Recipes
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/lifestyle"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Lifestyle
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/shop"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Shop
            </Link>
            <Link
              to="/order-summary"
              className="relative block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              <FaCartShopping className="" />
              <span className="absolute text-baseColor font-bold -top-2 left-7">
                {data?.quantity}
              </span>
            </Link>
            {/* <Link
              to="/"
              className="relative block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              <FaUserCircle className="w-6 h-6 text-baseColor" />
            </Link> */}
            {user?.email ? (
              <button
                className="relative block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="relative block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
