import React, { useState } from "react";
import img from "../../assets/blogs/blog1.png";
import admin from "../../assets/blogs/admin.png";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaShare,
} from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function Detail({ data, refetch }) {
  const axiosPublic = useAxiosPublic();
  const [comment, setComment] = useState("");
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      text: comment,
      postId: data._id,
      user: "677c76c4caea29823e7edf80",
    };
    console.log(newComment);
    try {
      const result = await axiosPublic.post("/comments", newComment);
      console.log(result);
      refetch();
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="px-6 md:px-12 lg:px-20 py-16 border border-gray-200 my-12 ">
        <div className="flex justify-start items-center gap-x-4">
          <img className="w-10 h-10 rounded-full" src={admin} alt="" />
          <div>
            <p className="text-xs font-extralight">{data.author.name}</p>
            <p className="text-xs font-extralight">
              {formatDate(data.createdAt)} . {data.readTime} min read
            </p>
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl mt-6 md:mt-12">{data?.title}</h1>
        <h3 className="text-lg  md:text-xl font-semibold mt-4 md:mt-8 ">
          {data?.subtitle}
        </h3>
        <img className=" mt-6" src={img} alt="" />
        <p className=" leading-relaxed md:leading-loose mt-6 md:mt-12 text-justify">
          {data.description}
        </p>
        <div className="border-t border-gray-300 mt-8  md:mt-16"></div>
        <div className="flex space-x-6 mt-8">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaShare />
        </div>
        <div className="border-t border-gray-300 mt-4 md:mt-8"></div>
        <div className="flex justify-between items-center gap-x-4 mt-4">
          <div className="flex gap-x-4 text-xs">
            <p>0 likes</p>
            <p>{data.comment.length} comments</p>
          </div>
          <FaHeart className="text-red-400" />
        </div>
      </div>
      <div className="mb-16 border border-gray-300 px-4 py-8 md:px-20 md:py-12">
        <p>Comments</p>
        <div className="border-t border-gray-300 mt-6 mb-12"></div>
        <form onSubmit={handleSubmit} action="">
          <input
            onChange={handleComment}
            placeholder="Write a comment..."
            className="py-4 border border-gray-400 w-full px-4 focus:outline-none"
            type="text"
          />
          <div className="flex justify-end mt-2">
            <button
              className="mt-8 font-extralight border border-black bg-black text-white py-2 px-8 hover:bg-white hover:text-black transition duration-300 ease-in-out shadow-md"
              type="submit"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
