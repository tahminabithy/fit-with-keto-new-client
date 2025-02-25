import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import img from "../../assets/login2.jpg";
import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import GmailBtn from "../../components/GmailBtn/GmailBtn";
import { authContext } from "../../context/AuthProvider";

export default function Register() {
  const { gmailLogin, setUser } = useContext(authContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await axiosPublic.post("/register", data);
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your account has been created successfully",
      });
    } catch (error) {
      console.log(error.response.data);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
    reset();
  };
  // const handleGmailLogin = async () => {
  //   gmailLogin().then((result) => {
  //     const user = {
  //       name: result.displayName,
  //       email: result.email,
  //     };
  //     console.log(user);
  //     if (user) {
  //       const result = axiosPublic.post("/register", user);
  //       console.log(result);
  //       navigate(from), { replace: true };
  //     }

  //     setUser(user);
  //   });
  // };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image */}
        <div className="block">
          <img className="w-full h-full object-cover" src={img} alt="Login" />
        </div>

        {/* Right Side - Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-baseColor text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium">
                Full name
              </label>
              <input
                type="text"
                required
                {...register("name")}
                className="w-full border-b border-gray-300  p-2 mt-1  focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                required
                {...register("email")}
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
            <GmailBtn />

            <button
              type="submit"
              className="w-full bg-baseColor text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-200 transition duration-300"
            >
              Register
            </button>
          </form>

          <p className="text-gray-600 text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
