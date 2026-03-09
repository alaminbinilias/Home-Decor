import React from "react";
import { NavLink } from "react-router";
import "./Nav.css"

const Navber = () => {

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to='/' className='font-semibold text-[1rem] px-2'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/products' className='font-semibold text-[1rem]'>Products</NavLink>
              </li>
              <li>
                <NavLink className='font-semibold text-[1rem]'>WishList</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to='/' className="btn btn-ghost text-xl font-bold">HomeDecor</NavLink>
        </div>
        <div className="navbar-end">

          <div className="navbar-center hidden lg:flex gap-2">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink className='font-semibold text-[1rem]'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/products' className='font-semibold text-[1rem]'>Products</NavLink>
              </li>
              <li>
                <NavLink className='font-semibold text-[1rem]'>WishList</NavLink>
              </li>
            </ul>
          </div>

          <a className="btn font-bold ml-3 mr-3">Visit Shop</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
