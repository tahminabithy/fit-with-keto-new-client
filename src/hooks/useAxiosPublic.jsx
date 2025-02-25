import React from "react";
import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://fit-with-keto-server.vercel.app/api",
});
export default function useAxiosPublic() {
  return axiosPublic;
}
