import { Link } from "react-router-dom";

const BlogCard = ({ blog, isDeleted, handleRemoveLS }) => {
  const { cover_image, social_image, title, description, published_at, id } =
    blog;
  return (
    <div>
      <Link
        to={`/blog/${blog.id}`}
        className=" hover:scale-105 transition ease-linear border  p-3 rounded-xl border-gray-300 mx-auto group hover:no-underline focus:no-underline "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || social_image}
        />

        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString("en-GB")}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {isDeleted && (
        <button onClick={() => handleRemoveLS(id)}>Remove From LS</button>
      )}
    </div>
  );
};

export default BlogCard;
