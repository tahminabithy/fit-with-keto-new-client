import React from "react";
// import blog from "../../assets/blogs/blog1.png";
import admin from "../../assets/blogs/admin.png";
import { FaHeart } from "react-icons/fa";
export default function CardBlog({ post }) {
  const { title, img, readTime, description, updatedAt } = post;
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <div>
      <div className="grid cols-1 md:grid-cols-2 mb-8 md:mb-10 lg:mb-16 shadow-md ">
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <img
            src={img}
            alt="Blog thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* <div className="h-full w-full overflow-hidden">
          <img
            src={img}
            alt="Blog thumbnail"
            className="w-full h-full object-cover"
          />
        </div> */}
        {/* <div className="w-full relative">
          <img
            src={img}
            alt="Blog thumbnail"
            className="w-full h-auto max-h-80 object-contain rounded-lg"
          />
        </div> */}

        <div className="p-6 relative bg-white ">
          <div className="flex justify-start items-center gap-x-4">
            <img className="w-10 h-10 rounded-full" src={admin} alt="" />
            <div>
              <p className="text-xs font-extralight">Admin</p>
              <p className="text-xs font-extralight">
                {formatDate(updatedAt)} . {readTime} min read
              </p>
            </div>
          </div>
          <h3 className="text-xl font-medium my-4 text-baseColor">{title}</h3>
          <p className="text-sm font-extralight leading-5 text-justify tracking-normal my-4">
            {description.slice(0, 150)}...
          </p>
          <div>
            <div className="lg:absolute lg:bottom-6 left-0 w-full md:px-6">
              <div className="h-[1px] bg-gray-300"></div>
              <div className="flex justify-between items-center gap-x-4 mt-4">
                <div className="flex gap-x-4 text-xs">
                  <p>20 likes</p>
                  <p>{post.comment.length} comments</p>
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
