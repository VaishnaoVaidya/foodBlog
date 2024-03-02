import React from "react";
import BlogArray from "./BlogArray";
import { Link } from "react-router-dom";

const Technology = () => {
  const technologyBlogArray = BlogArray.filter(
    (bk) => bk.type === "Technology"
  );
  return (
    <div className='flex flex-row justify-evenly items-center flex-wrap bg-white '>
      {technologyBlogArray.map((blog, i) => (
        <div className="card w-50 flex-wrap bg-white">
          <div className="p-5 ">
            <Link to={`/blogdetails/${blog.id}`}>
              <img
                src={blog.imageUrl}
                style={{ height: "auto", width: "100%" }}
                alt="imageNotLoaded"
              />
            </Link>

            <p className="p-1 flex bg-gray-400 w-fit text-white w-fit right-14 top-16 z-0 bg-opacity-55 absolute">{blog.type}</p>

            <div className="text-gray-300 flex flex-row justify-start items-center mt-2">
              <p>{blog.name}</p>
              <p>| {blog.Date} | </p>
              <p>{10} min read</p>
            </div>
            <div>
              <h6 className="text-4xl text-black font-bold">{blog.heading}</h6>
              <p className="text-black flex flex-row justify-start items-center">
                {blog.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technology;