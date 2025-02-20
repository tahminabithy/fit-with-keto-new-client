import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export const useCart = (uid) => {
  const axiosPublic = useAxiosPublic();
  const { isPending, data, error, refetch } = useQuery({
    queryKey: ["cart", uid],
    queryFn: async () => {
      const response = await axiosPublic.get(`/get-cart/${uid}`);
      return response.data?.data || [];
    },
  });
  return { data, refetch };
};
