import React from "react";
import PlayCard from "../../components/PlayCard/PlayCard";
import usePosts from "../../hooks/usePosts";
import CardBlog from "../../components/CardBlog/CardBlog";
import banner from "../../assets/banner/plate-salmon.jpg";
import { Link } from "react-router-dom";
export default function LifeStyles() {
  const { data } = usePosts("lifeStyle");
  console.log(data);

  return (
    <div className=" bg-gray-100 pb-10">
      <PlayCard title="Life Styles" banner={banner} />
      <div className="">
        <div className="mx-4 my-10 md:mx-20 md:my-20 ">
          {data?.slice(0, 4).map((post) => (
            <Link key={post._id} to={`/postDetails/${post._id}`}>
              <CardBlog post={post} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center ">
          <Link to="/all-posts">
            <button className="font-extralight border border-baseColor text-baseColor py-2 px-8 hover:bg-baseColor hover:text-white transition duration-300 ease-in-out shadow-md">
              SEE ALL POSTS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
