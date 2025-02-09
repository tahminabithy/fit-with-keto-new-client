import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function usePosts(value) {
  const axiosPublic = useAxiosPublic();
  const { isPending, data, error, refetch } = useQuery({
    queryKey: ["posts", value],
    queryFn: async () => {
      const queryString = value ? `type=${value}` : "";
      const response = await axiosPublic.get(`/posts?${queryString}`);
      // console.log(response.data);
      return response.data?.data || [];
    },
  });
  return { data, refetch };
}
