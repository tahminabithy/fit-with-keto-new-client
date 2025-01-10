import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function usePosts() {
  const axiosPublic = useAxiosPublic();
  const { isPending, data, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axiosPublic.get("/posts");
      console.log(response.data);
      return response.data.data;
    },
  });
  return [data, refetch];
}
