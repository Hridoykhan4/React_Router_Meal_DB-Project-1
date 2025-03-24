export const getBlog = () => {
  const storedBlogs = localStorage.getItem("blogs-items");
  return storedBlogs ? JSON.parse(storedBlogs) : [];
};

export const addToLocalStorage = (blog) => {
  const allBlogs = getBlog();
  const isExist = allBlogs.find((b) => b.id === blog.id);
  if (isExist) {
    alert("Ho");
  } else {
    allBlogs.push(blog);
    localStorage.setItem("blogs-items", JSON.stringify(allBlogs));
  }
};

export const deleteBlog = (id) => {
  const blogs = getBlog();
  const remaining = blogs.filter((blog) => blog.id !== id);
  localStorage.setItem("blogs-items", JSON.stringify(remaining));
};
