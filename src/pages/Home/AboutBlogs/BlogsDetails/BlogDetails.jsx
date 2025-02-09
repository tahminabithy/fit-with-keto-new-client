import React from "react";
import Blogs from "../Blogs/Blogs";
import Blogger from "../blogger/blogger";
import usePosts from "../../../../hooks/usePosts";

export default function BlogDetails() {
  const { data } = usePosts("");
  // console.log(data);
  return (
    <section className="bg-[#F4F3EF]">
      <div className="container mx-auto py-16 grid md:grid-cols-3 gap-8 px-4 ">
        <div className="md:col-span-2">
          {data?.slice(0, 4).map((post) => (
            <Blogs key={post._id} post={post}></Blogs>
          ))}
          <div className="flex justify-center items-center">
            <button className="font-extralight border border-baseColor text-baseColor py-2 px-8 hover:bg-baseColor hover:text-white transition duration-300 ease-in-out shadow-md">
              SEE ALL POSTS
            </button>
          </div>
        </div>
        <div>
          <Blogger />
        </div>
      </div>
    </section>
  );
}
