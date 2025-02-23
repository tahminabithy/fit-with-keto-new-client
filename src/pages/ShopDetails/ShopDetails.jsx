import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Drawer from "../../components/Drawer/Drawer";
import { authContext } from "../../context/AuthProvider";
import { useCart } from "../../hooks/useCart";

export default function ShopDetails() {
  const { user } = useContext(authContext);
  const [isOpen, setIsOpen] = useState(false);
  const { data, refetch } = useCart(user?.uid);
  const axiosPublic = useAxiosPublic();
  const id = useParams();
  const toggole = () => {
    setIsOpen(!isOpen);
  };
  const [plan, setPlan] = useState({});
  useEffect(() => {
    axiosPublic
      .get(`/shops/${id.id}`)
      .then((res) => {
        // console.log("Fetched Plans:", res.data.data);
        setPlan(res.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching meal plans:", error);
      });
  }, []);

  const handleAddToCart = async (body) => {
    const userCart = {
      userId: user?.uid,
      planId: id,
      quantity: 1,
      price: plan.price,
    };
    const result = await axiosPublic.post("/add-to-cart", userCart);
    console.log(result);
    refetch();
    toggole();
  };
  return (
    <div className="m-2 lg:mx-20 lg:my-16">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggole}
        ></div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-16 lg:my-10 p-4 md:p-8">
        <div className="flex flex-col">
          <img
            className="object-contain object-cover h-96 w-full"
            src={plan.img}
            alt=""
          />
          <p className="mt-12 text-sm lg:text-md font-light tracking-wide leading-loose line-clamp-3">
            {plan?.description?.slice(0, 120)}.
          </p>
          <br />
          <p className=" text-sm lg:text-md font-light tracking-wide leading-loose ">
            {plan?.description?.slice(120, plan.description.length)}
          </p>
        </div>

        <div className="flex flex-col md:p-4">
          <p className="text-2xl md:text-3xl text-baseColor font-semibold">
            {plan.name}
          </p>
          <p className="mt-4 mb-8 border-b w-fit border-baseColor">
            $ {plan.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="font-extralight border border-baseColor  bg-baseColor text-white py-2 px-8 hover:bg-white  hover:text-baseColor transition duration-300 ease-in-out shadow-md"
          >
            Add To Cart
          </button>
          <button className="mt-6 font-extralight border border-black  bg-black text-white py-2 px-8 hover:bg-white  hover:text-black transition duration-300 ease-in-out shadow-md">
            Buy Now
          </button>
          <div className="flex justify-center md:justify-start  gap-4 mt-8">
            <FaWhatsapp />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>
      <Drawer uid={user?.uid} isOpen={isOpen} toggole={toggole} />
    </div>
  );
}
