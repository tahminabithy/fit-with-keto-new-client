import React from "react";
import Banner from "../Banner/Banner";
import BlogDetails from "../AboutBlogs/BlogsDetails/BlogDetails";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Fit With Keto</title>
      </Helmet>
      <Banner />
      <BlogDetails />
    </div>
  );
}
