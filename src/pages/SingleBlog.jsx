import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewBlogs from "../components/landingpage/NewBlogs";
import { getSingleBlog } from "../services/blogServices";
const SingleBlog = () => {
  const [blog, setBlog] = useState("");
  console.log(blog);
  const { id } = useParams();
  useEffect(() => {
    getSingleBlog(id).then((res) => {
      setBlog(res);
    });
  }, []);

  return (
    <>
      <section className="w-full  flex  px-3 pt-16">
        <article className="flex flex-col  md:w-3/4 shadow my-4">
          <span  className="hover:opacity-75">
            <img src={blog.jetpack_featured_media_url} />
          </span>
          <div className="bg-white flex flex-col justify-start p-6">
            <h2  className="text-3xl font-bold text-cyan-500 pb-4">
              {blog.title?.rendered}
            </h2>
            
            <span
              dangerouslySetInnerHTML={{
                __html: blog.content?.rendered,
              }}
              className="blog-content"
            />
          </div>
        </article>
        <span className="hidden md:block md:w-1/4 border my-4 ml-2">
              <p>Ad space</p>
        </span>
      </section>
      <NewBlogs/>
    </>
  );
};

export default SingleBlog;
