import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import { Navigate, replace, useLocation, useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(authContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  if (token) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
