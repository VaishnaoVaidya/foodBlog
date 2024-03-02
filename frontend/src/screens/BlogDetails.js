import React  from "react";
import {useParams} from "react-router-dom";
import BlogArray from "./BlogArray";


const BlogDetails = () => {
  const { id } = useParams()
  console.log( "id", id);
  
  const blog = BlogArray.find((e) => e.id === Number(id))
  console.log(blog);
    
  return (
    <>
        <div className="card flex-wrap bg-white flex-1 px-52 py-5">
             <div className="flex-1">
                <img
                onClick={window.scrollTo(0,0)}
                  src={blog.imageUrl}
                  style={{ height: "100%", width: "100%" }}
                  alt="imageNotLoaded"
                />
      
              <p className="p-1 flex bg-gray-400 text-white w-fit right-56 top-16 z-0 bg-opacity-55 absolute">
                {blog.type}
              </p>
              </div>
      
              <div className="text-gray-300 flex flex-row justify-start items-center mt-2">
                <p>{blog.name}</p>
                <p>| {blog.Date} | </p>
                <p>{10} min read</p>
              </div>
              <div className="text-black">
                <h6 className="text-4xl text-black font-bold py-1">{blog.heading}</h6>
                <p className="text-black flex flex-row justify-start items-center">
                  {blog.description}
                </p>
               <p>{blog.details.p1}</p>
               <p>{blog.details.p2}</p>
               <p>{blog.details.p3}</p>
               <h4>{blog.details.h5}</h4>
               <p>{blog.details.p4}</p>
               <p>{blog.details.p6}</p>
               <p>{blog.details.p7}</p>
               <p>{blog.details.p8}</p>
              </div>
          </div>     
    </>
  );
};

export default BlogDetails;
