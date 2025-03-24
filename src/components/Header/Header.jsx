import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && "text-red-500 underline"}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && "text-red-500 underline"}`
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && "text-red-500 underline"}`
          }
          to="/bookmarks"
        >
          Bookmarks
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && "text-red-500 underline"}`
          }
          to="/recCat"
        >
          API recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && "text-red-500 underline"}`
          }
          to="/users"
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && "text-red-500 underline"}`
          }
          to="/recipes"
        >
          Recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && "text-red-500 underline"}`
          }
          to="/orderedItems"
        >
          Ordered Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${isActive && "text-red-500 underline"}`
          }
          to="/listedBooks"
        >
          Listed Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="w-11/12  px-0 navbar mx-auto ">
        <div className="navbar-start">
          <Link to="/" className="text-xl">Router Practice</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <input
            onChange={handleTheme}
            type="checkbox"
            checked={theme === "dark"}
            // value="synthwave"
            className="toggle mr-3 theme-controller"
          />

          <a className="btn hidden md:flex">Button</a>
          <div className="dropdown ms-3 dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
