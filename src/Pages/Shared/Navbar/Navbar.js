import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../../context/AuthProvider/AuthProvider";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const checkScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 65) {
      setIsScroll(true);
      // console.log(isScroll);
    } else {
      setIsScroll(false);
      // console.log(isScroll);
    }
    console.log(isScroll);
  };

  window.addEventListener("scroll", checkScroll);
  const { user, logOut } = useContext(MyContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <div
        className={`navbar bg-black  ${
          isScroll ? "fixed top-0" : "relative"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Moto Rangers
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <button className="btn btn-primary " onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn btn-primary mr-3">Login</button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn btn-primary">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
