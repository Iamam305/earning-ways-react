import React from "react";
import { useState, useEffect } from "react";
import { getBlogs } from "../services/blogServices";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    getBlogs().then((res) => {
      setBlogs(res);
    });
  }, []);

  return (
    <div>
      <div className="py-16 ">
        <div className=" m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
           
            <h2 className="text-2xl text-left text-cyan-500 font-bold md:text-4xl">
            OUR ARTICLES
            </h2>
         
          </div>

          <div className="grid gap-12 lg:grid-cols-2 ">
            {blogs?.map((blog) => (
              <div key={blog.id} className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img
                  src={blog.jetpack_featured_media_url}
                  alt="art cover"
                  loading="lazy"
                  className="md:w-1/2 md:h-full object-cover rounded-lg transition duration-500 group-hover:rounded-xl"
                />
                <div className=" pl-0 p-5">
                  <div className="space-y-2 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="text-2xl font-semibold text-cyan-900">
                        Provident de illo eveniet commodi fuga fugiat laboriosam
                        expedita.
                      </h4> 
                      <span
                        className="text-gray-400 dark:text-gray-300 font-light "
                        dangerouslySetInnerHTML={{
                          __html: blog.excerpt.rendered,
                        }}
                      />
                    </div>
                    <Link to={`/blog/${blog.id}`}  className="block w-max text-cyan-600">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Blogs;
