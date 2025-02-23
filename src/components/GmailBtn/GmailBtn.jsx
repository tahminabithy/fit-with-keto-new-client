import React, { useContext } from "react";
import google from "../../assets/google.png";
import { authContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
export default function GmailBtn() {
  const axiosPublic = useAxiosPublic();
  const { gmailLogin, setUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleGmailLogin = async () => {
    try {
      const result = await gmailLogin();
      console.log(result.user.displayName);
      const user = {
        name: result?.user.displayName,
        email: result?.user.email,
      };
      console.log(user);
      if (result) {
        const response = await axiosPublic.post("/gmailLogin", user);
        console.log(response.data);
        const userInfo = {
          email: response.data?.data?.email,
          name: response.data.data.name,
          role: response.data.data.role,
          uid: response.data?.data?.uid,
        };
        localStorage.setItem("accessToken", response.data.data.accessToken);
        setUser(userInfo);
        console.log(userInfo);
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleGmailLogin}
      className="flex justify-center border border-gray-400 bg-white shadow-lg rounded-full p-2 w-full  cursor-pointer hover:border-gray-300 hover:bg-gray-300 transition duration-300"
    >
      {" "}
      Continue with Google{" "}
      <img
        className="w-6 h-6 bg-white ml-4"
        src={google}
        alt=""
        style={{ backgroundColor: "transparent" }}
      />
      {/* <FaGoogle className="text-green-200 text-3xl" /> */}
    </button>
  );
}
