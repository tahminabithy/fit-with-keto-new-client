import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Detail from "../../components/Detail/Detail";

export default function PostDetails() {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data, error, isPending, refetch } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axiosPublic.get(`/posts/${id}`);
      return response.data.data;
    },
  });
  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <Detail data={data} refetch={refetch} />
      )}
    </div>
  );
}
