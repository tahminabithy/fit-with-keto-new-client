import React, { useContext } from "react";
import google from "../../assets/google.png";
import { authContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
export default function GmailBtn() {
  const { gmailLogin } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const handleGmailLogin = () => {
    gmailLogin().then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from), { replace: true };
    });
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
