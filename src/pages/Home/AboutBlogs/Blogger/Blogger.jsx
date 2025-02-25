import React from "react";
import blogger from "../../../../assets/blogs/admin.png";
import makePlan from "../../../../assets/blogs/makePlan.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Blogger() {
  return (
    <section>
      <div className="">
        <img className="w-full h-auto object-cover" src={blogger} alt="" />
        <div className="p-8 bg-white">
          <h3 className="text-4xl font-semibold text-baseColor">Daniel Cate</h3>
          <p className="text-sm font-extralight leading-relaxed text-justify tracking-wider my-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            aliquid soluta atque. Laborum numquam a maxime corrupti, porro,
            ipsam nihil blanditiis aliquid, non excepturi veniam doloribus quas
            quibusdam ex autem!
          </p>
          <Link to="/about">
            <p className="border-b border-gray-600 text-sm w-fit text-baseColor">
              READ MORE
            </p>
          </Link>
        </div>
      </div>
      {/* -------------------- */}
      <div
        className="relative flex flex-grow items-center bg-cover bg-center bg-no-repeat py-10 md:py-16 my-6 md:my-10"
        style={{ backgroundImage: `url(${makePlan})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="z-10 flex justify-center items-center  w-full h-full">
          <div className="bg-white p-6">
            <p className="text-center text-lg md:text-2xl font-medium text-baseColor">
              Keto Meal Plans
            </p>
            <div className="flex justify-center items-center mt-2 md:mt-4">
              <p className="border-b border-gray-600 text-xs w-fit text-baseColor">
                SHOP NOW
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------- */}
      <div className="flex justify-center items-center bg-baseColor p-8">
        <div className="">
          <p className="text-extralight text-white">YOU CAN ALSO FIND ME ON</p>
          <div className="flex justify-center items-center gap-4 text-white mt-4">
            <a href="https://www.facebook.com/">
              {" "}
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/tahmina-akter-bithy/"></a>

            <FaLinkedin />
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      {/* --------------------------- */}
      <div className="my-6 md:my-10 bg-white p-8">
        <p className="text-extralight text-baseColor text-center mb-6">
          SUBSCRIBE TO MY NEWSLETTER
        </p>
        <p className="text-sm text-baseColor mb-2">Email*</p>
        <input
          className="border border-baseColor py-2 px-4 w-full focus:outline-none"
          type="text"
        />
        <button className="mt-6 font-extralight border text-white border-baseColor hover:bg-gray-800 bg-baseColor py-2 px-8  transition duration-300 ease-in-out shadow-md w-full">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
