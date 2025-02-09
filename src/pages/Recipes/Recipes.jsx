import React from "react";
import PlayCard from "../../components/PlayCard/PlayCard";
import banner from "../../assets/banner/veg-salad.jpg";
import CardBlog from "../../components/CardBlog/CardBlog";
import usePosts from "../../hooks/usePosts";
import { Link } from "react-router-dom";
export default function Recipes() {
  const { data } = usePosts("recipe");
  return (
    <div className="bg-gray-100 pb-10">
      <PlayCard title="Recipes" banner={banner} />
      <div className="mx-4 my-10 md:mx-20 md:my-20 ">
        {data?.map((post) => (
          <Link to={`/postDetails/${post._id}`}>
            <CardBlog key={post._id} post={post} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <button className="font-extralight border border-baseColor text-baseColor py-2 px-8 hover:bg-baseColor hover:text-white transition duration-300 ease-in-out shadow-md">
          SEE ALL POSTS
        </button>
      </div>
    </div>
  );
}
