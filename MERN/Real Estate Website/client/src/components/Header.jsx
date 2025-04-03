import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4  ">
        <div className="flex gap-5 ">
          <div className="text-lg sm:text-2xl font-bold flex flex-wrap leading-none ">
            <Link to="/">
              <span className="text-slate-500">Wani</span>
              <span className="text-slate-700">Estate</span>
            </Link>
          </div>
          <ul className="flex gap-5">
            <li className="hidden lg:inline text-xl font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="hidden lg:inline text-xl font-bold">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <form className="flex items-center h-8 bg-white p-3 sm:p-5 rounded-full ">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none w-30 sm:w-48 md:w-96"
          />
          <FaSearch />
        </form>

        {currentUser ? (
          <Link to="/profile">
            <img
              src={currentUser.photoURL}
              alt="Profile Pic"
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
        ) : (
          <ul className="flex gap-2 sm:gap-5">
            <li className="text-lg sm:text-xl font-bold">
              <Link to="/signup">SignUp</Link>
            </li>
            <li className="text-lg sm:text-xl font-bold">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
