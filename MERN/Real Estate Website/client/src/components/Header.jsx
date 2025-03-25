import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4  ">
        <div className="text-lg sm:text-2xl  font-bold flex flex-wrap leading-none">
          <Link to="/">
            <span className="text-slate-500">Wani</span>
            <span className="text-slate-700">Estate</span>
          </Link>
        </div>

        <form className="flex items-center h-8 bg-white p-3 sm:p-5 rounded-full ">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none w-30 sm:w-48 md:w-96"
          />
          <FaSearch />
        </form>

        <ul className="flex gap-5">
          <li className="hidden sm:inline text-xl font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-xl font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg sm:text-xl font-bold">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
