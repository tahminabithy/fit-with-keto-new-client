import React from "react";
import CardBlog from "../../../../components/CardBlog/CardBlog";
import { Link } from "react-router-dom";

export default function Blogs({ post }) {
  return (
    <div className="mb-12">
      <Link to={`/postDetails/${post._id}`}>
        <CardBlog post={post} />
      </Link>
    </div>
  );
}
