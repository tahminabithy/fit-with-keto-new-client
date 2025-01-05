import React from "react";
import blog from "../../assets/blogs/blog1.png";
import admin from "../../assets/blogs/admin.png";
import { FaClover } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
export default function CardBlog() {
  return (
    <div>
      <div className="grid cols-1 lg:grid-cols-2">
        {/* <img
          className="w-full h-52 md:h-52 lg:h-80 object-cover"
          src={blog}
          alt=""
        /> */}
        <div className="relative w-full h-64 md:h-96">
          <img
            src={blog}
            alt="Blog thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6 relative bg-white ">
          <div className="flex justify-start items-center gap-x-4">
            <img className="w-10 h-10 rounded-full" src={admin} alt="" />
            <div>
              <p className="text-xs font-extralight">Admin</p>
              <p className="text-xs font-extralight">
                May 16, 2023 . 2 min read
              </p>
            </div>
          </div>
          <h3 className="text-xl font-medium my-4 text-baseColor">
            Good fat vs bad fat
          </h3>
          <p className="text-sm font-extralight leading-5 text-justify tracking-normal my-4">
            Create a blog post subtitle that summaries your post in a few short,
            punchy sentences and entices your. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Laudantium, animi ...
          </p>
          <div>
            <div className="lg:absolute lg:bottom-6 left-0 w-full md:px-6">
              <div className="h-[1px] bg-gray-300"></div>
              <div className="flex justify-between items-center gap-x-4 mt-4">
                <div className="flex gap-x-4 text-xs">
                  <p>0 likes</p>
                  <p>4 comments</p>
                </div>
                <FaHeart className="text-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
