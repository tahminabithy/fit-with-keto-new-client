import React from "react";
import { FaX } from "react-icons/fa6";
import { useCart } from "../../hooks/useCart";

export default function Drawer({ uid, isOpen, toggole }) {
  const { data, refetch } = useCart(uid);
  console.log(data);
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-96 bg-white shadow-lg transform transition-transform duration-300 z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 ">
          <button
            onClick={toggole}
            className="mb-4 text-baseColor text-sm underline top-3 right-3 fixed  hover:bg-gray-200 transition duration-300 ease-in-out p-2 rounded-full "
          >
            <FaX />
          </button>

          <div className="py-8">
            <p>Menu</p>
            <ul>
              <li>Home {data.quantity}</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
