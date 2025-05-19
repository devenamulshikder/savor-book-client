import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="bg-base-100 shadow-sm top-0 sticky z-50">
      <div className="">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ED6F2C] text-lg hover:bg-transparent border-0"
                      : " relative cursor-pointer"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/dsf"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ED6F2C] text-lg hover:bg-transparent border-0"
                      : " relative cursor-pointer"
                  }
                >
                  All Recipes
                </NavLink>
                <NavLink
                  to="/sdfsd"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ED6F2C] text-lg hover:bg-transparent border-0"
                      : " relative cursor-pointer"
                  }
                >
                  Add Recipe
                </NavLink>
                <NavLink
                  to="/sdfsd"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ED6F2C] text-lg hover:bg-transparent border-0"
                      : " relative cursor-pointer"
                  }
                >
                  My Recipes
                </NavLink>
              </ul>
            </div>
            <div className="navbar-start hidden lg:flex">
              <Link to="/" className="flex items-center gap-2">
                <img
                  width={70}
                  src="https://i.ibb.co/qMzH7cPp/logo.png"
                  alt="Savor Book Logo"
                  className="h-auto"
                />
                <span
                  className="text-2xl font-bold"
                  style={{
                    background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Savor Book
                </span>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-7 text-lg items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ED6F2C] text-lg hover:bg-transparent border-b-2 border-0"
                    : " relative after:bg-[#ED6F2C] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/dsf"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ED6F2C] text-lg hover:bg-transparent border-b-2 border-0"
                    : " relative after:bg-[#ED6F2C] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                All Recipes
              </NavLink>
              <NavLink
                to="/sdfsd"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ED6F2C] text-lg hover:bg-transparent border-b-2 border-0"
                    : " relative after:bg-[#ED6F2C] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                Add Recipe
              </NavLink>
              <NavLink
                to="/sdfsd"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ED6F2C] text-lg hover:bg-transparent border-b-2 border-0"
                    : " relative after:bg-[#ED6F2C] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                My Recipes
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end text-lg gap-3 mr-3 md:gap-6 md:mr-6">
            <NavLink
              to="/sdfsd"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ED6F2C] text-lg hover:bg-transparent border-b-2 border-0"
                  : " relative after:bg-[#ED6F2C] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/sdfsd"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ED6F2C] text-lg hover:bg-transparent border-b-2 border-0"
                  : " relative after:bg-[#ED6F2C] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              }
            >
              Register
            </NavLink>
          </div>
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller row-start-1 col-start-1 col-span-2 "
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
