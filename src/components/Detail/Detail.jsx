import React, { useContext, useState } from "react";
import admin from "../../assets/blogs/admin.png";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaShare,
  FaUser,
} from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaTrashCan } from "react-icons/fa6";
import { authContext } from "../../context/AuthProvider";

export default function Detail({ data, refetch }) {
  const [showComment, setShowComment] = useState(false);
  console.log(showComment);

  const axiosPublic = useAxiosPublic();
  const { user } = useContext(authContext);
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
      name: user.name,
      user: user.uid,
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
        {/* <img
          className="w-full h-[40rem] mt-6 object-cover"
          src={data.img}
          alt=""
        /> */}
        <img
          className="w-full max-h-[40rem] mt-6 object-contain"
          src={data.img}
          alt=""
        />

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
        <div className="border-t  mt-4 md:mt-8"></div>
        <div className="flex justify-between items-center gap-x-4 mt-4">
          <div className="flex gap-x-4 text-xs">
            <p className="">0 likes</p>
            <a onClick={() => setShowComment(!showComment)} className="link">
              {data.comment.length} comments
            </a>
          </div>
          {/* Render Comments */}

          <FaHeart className="text-red-400" />
        </div>
        {/* ---------------- */}
        <div>
          {data.comment.length > 0 ? (
            showComment ? (
              <div className="border border-gray-300 mt-6 p-6">
                <div className="space-y-6">
                  {data.comment.map((c, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      {/* <img
                      
                        src={admin}
                        alt="User"
                      /> */}
                      <div className="w-10 h-10 rounded-full bg-gray-200 text-baseColor border border-gray-300 flex justify-center items-center">
                        <FaUser />
                      </div>
                      <div>
                        <p className="">
                          <p className="text-gray-800">{c.text}</p>
                        </p>
                        <div className="flex  items-center gap-x-2 text-xs mt-2 text-baseColor text-bold ">
                          <FaUser /> <p>{c.name || "Anonymous"}</p>
                          <p className="">{formatDate(c.createdAt)}</p>
                          <FaTrashCan />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )
          ) : (
            <p className="text-gray-500 mt-4">No comments yet!</p>
          )}
        </div>

        {/* --------------------- */}
      </div>
      <div className="mb-16 border border-gray-300 px-4 py-8 md:px-20 md:py-12">
        <p>Comments</p>
        <div className="border-t border-gray-300 mt-6 mb-12"></div>
        <form onSubmit={handleSubmit} action="">
          <input
            onChange={handleComment}
            value={comment}
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
