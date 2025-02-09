import React from "react";
import { useForm } from "react-hook-form";
import img from "../../assets/login2.jpg";
import google from "../../assets/google.png";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image */}
        <div className="block">
          <img className="w-full h-full object-cover" src={img} alt="Login" />
        </div>

        {/* Right Side - Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-baseColor text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                required
                {...register("firstName")}
                className="w-full border-b border-gray-300  p-2 mt-1  focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                required
                {...register("password")}
                className="w-full border-b border-gray-300 p-2 mt-1 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-center bg-white">
              <img
                className="w-8 h-8 bg-white"
                src={google}
                alt=""
                style={{ backgroundColor: "transparent" }}
              />
              {/* <FaGoogle className="text-green-200 text-3xl" /> */}
            </div>

            <button
              type="submit"
              className="w-full bg-baseColor text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-200 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-gray-600 text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
