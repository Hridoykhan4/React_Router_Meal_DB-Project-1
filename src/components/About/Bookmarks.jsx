import { useEffect, useState } from "react";
import { deleteBlog, getBlog } from "../../utils/addBlogMark";
import BlogCard from "../BlogCard";
import { Link } from "react-router-dom";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedItems = getBlog();
    setBlogs(storedItems);
  }, []);

  const handleRemoveLS = (id) => {
    deleteBlog(id);
    const storedItems = getBlog();
    setBlogs(storedItems);
  };

  if (blogs.length < 1)
    return (
      <>
        <h1 className="text-center text-2xl font-bold">BookMark is Empty</h1>
        <Link
          to="/blogs"
          className=" mx-auto btn my-4 w-32 flex justify-center items-center btn-success text-white"
        >
          Select First
        </Link>
      </>
    );

  return (
    <div>
      <div className="grid w-11/12 mx-auto justify-center  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            handleRemoveLS={handleRemoveLS}
            isDeleted={true}
            key={blog.id}
            blog={blog}
          ></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
