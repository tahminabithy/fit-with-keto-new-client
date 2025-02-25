import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";
import { useCart } from "../../hooks/useCart";
import Swal from "sweetalert2";

export default function Shop() {
  const axiosPublic = useAxiosPublic();
  const [plans, setPlans] = useState([]);
  const { user } = useContext(authContext);
  const { refetch } = useCart(user?.uid);
  useEffect(() => {
    axiosPublic
      .get("/shops")
      .then((res) => {
        console.log("Fetched Plans:", res.data.data);
        setPlans(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching meal plans:", error);
      });
  }, []);
  const handleAddToCart = async (plan) => {
    const userCart = {
      userId: user?.uid,
      planId: plan?._id,
      quantity: 1,
      price: plan?.price,
    };

    const result = await axiosPublic.post("/add-to-cart", userCart);
    Swal.fire({
      title: "Cart is added successfully!",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
    refetch();
  };
  return (
    <div className="mx-4 my-10 md:mx-20 md:my-20">
      <p className="text-3xl md:text-4xl text-baseColor text-center font-semibold my-6 md:my-10">
        Shop Meal Plans
      </p>
      <p className="text-center text-baseColor font-light lg:w-1/2 mx-auto">
        Explore our curated plan lists that cater to your health goals. Each
        plan offers balanced, delicious recipes, practical grocery guides, and
        expert tips to support your ketogenic journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-16 my-10 p-8">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-white overflow-hidden w-full max-w-4xl "
          >
            <Link to={`/shop/${plan._id}`}>
              <div className="relative overflow-hidden group">
                <img
                  className="w-full h-80 object-cover object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={plan.img}
                  alt="Plan"
                />
              </div>
            </Link>

            <div className="mt-4 flex flex-col ">
              <h2 className="text-xl  font-normal text-baseColor text-center">
                {plan.name}
              </h2>

              <div className="border border-gray-600 mt-4 w-10 mx-auto"></div>
              <p className="text-baseColor text-center font-light my-2">
                $ {plan.price}
              </p>
              <button
                onClick={() => handleAddToCart(plan)}
                className="font-extralight border border-baseColor text-baseColor py-2 px-8 hover:bg-baseColor hover:text-white transition duration-300 ease-in-out shadow-md"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
