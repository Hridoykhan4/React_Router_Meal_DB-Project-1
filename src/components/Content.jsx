import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, social_image, title, published_at, tags } = blog;

  return (
    <div className=" transition ease-linear border  p-3 rounded-xl border-gray-300 mx-auto group hover:no-underline focus:no-underline ">
      <img
        role="presentation"
        className="object-cover w-full rounded h-72 "
        src={cover_image || social_image}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map((tag, i) => (
          <a
            //          href="#"
            key={i}
            className="px-3 py-1 rounded-sm hover:underline "
          >
            # {tag}
          </a>
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400">
          {new Date(published_at).toLocaleDateString("en-GB")}
        </span>
        <Markdown rehypePlugins={[rehypeRaw]}>{blog?.body_html}</Markdown>
      </div>
      <div></div>
    </div>
  );
};

export default Content;
