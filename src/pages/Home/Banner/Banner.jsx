import React from "react";
import Navigation from "../../../shared/Navigation/Navigation";
import bannerImg from "../../../assets/banner/banner1.jpg";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <section className="h-96 lg:min-h-screen flex flex-col">
      <div
        className="relative flex flex-grow items-center bg-cover bg-center bg-no-repeat py-8 md:py-16"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-screen-lg mx-auto px-6 md:px-10 lg:px-16 text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-wider lg:leading-relaxed text-white">
            <span className="block">Welcome to The</span>
            <span className="block">House of Keto</span>
          </h1>
          <p className="mt-4 text-md md:text-xl font-extralight text-white">
            Get into a low carb lifestyle with an easy-to-follow meal plans.
          </p>
          <button className="mt-8 font-extralight border border-white text-white py-2 px-8 hover:bg-white hover:text-black transition duration-300 ease-in-out shadow-md">
            SHOP PLANS
          </button>
        </div>
      </div>
    </section>
  );
}
