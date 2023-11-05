import React from "react";
// import Responsive from "./Responsive.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
      <div className="bg-white">
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://b.zmtcdn.com/data/file_assets/621862abf874a7c2be8fdd6d062ca67a1678705718.webp"
          alt="foodbg.img"
        />
        <ul className="flex-row flex justify-evenly items-center h-16 bg-slate-400 text-2xl">
          <li>
            <Link
              className="focus:text-black focus:border-b-white   hover:text-gray-200 text-gray-200"
              style={{ textDecoration: "none" }}
              // aria-current="page"
              to="/blog"
            >
              All Categories
            </Link>
          </li>
          <li>
            <Link
              className="focus:text-black  hover:text-gray-200 text-gray-200"
              style={{ textDecoration: "none" }}
              to="/community"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              className="focus:text-black  hover:text-gray-200 text-gray-200 underline"
              style={{ textDecoration: "none" }}
              to="/company"
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              className="focus:text-black  hover:text-gray-200 text-gray-200"
              style={{ textDecoration: "none" }}
              to="/culture"
            >
              Culture
            </Link>
          </li>
          <li>
            <Link
              className="focus:text-black  hover:text-gray-200 text-gray-200"
              style={{ textDecoration: "none" }}
              to="/technology"
            >
              Technology
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default Blog;
