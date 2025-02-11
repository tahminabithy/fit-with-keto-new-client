import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import img from "../../assets/login2.jpg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { authContext } from "../../context/AuthProvider";
import GmailBtn from "../../components/GmailBtn/GmailBtn";

export default function Login() {
  const { loginUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await axiosPublic.post("/login", data);
      console.log(result);
      //   const decoded = jwt.verify(result.data.data.accessToken);
      localStorage.setItem("accessToken", result.data.data.accessToken);
      const user = {
        email: result.data.data.email,
        name: result.data.data.name,
        // photo: result.data.data.photo,
        role: result.data.data.role,
        uid: result.data.data.uid,
      };
      loginUser(user);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error?.response?.data);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data.message,
      });
    }
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
                type="email"
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
              className=" w-full bg-baseColor text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-200 hover:text-baseColor transition duration-300"
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
