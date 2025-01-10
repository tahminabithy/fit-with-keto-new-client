import React from "react";
import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "http://localhost:3000/api",
});
export default function useAxiosPublic() {
  return axiosPublic;
}
