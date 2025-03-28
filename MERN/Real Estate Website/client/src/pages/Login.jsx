import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";

import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../redux/user/userSlice";
import Oauth from "../components/Oauth";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeHandler(e) {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    dispatch(loginStart());
    try {
      let response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log("returned response :",  response);

      if (response.ok) {
        const result = await response.json();
        console.log("returned json result from server login route: ",result);
        dispatch(loginSuccess(result));
        navigate("/");
      } else {
        const error = await response.json();
        dispatch(loginFailure(error.message));
      }
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-5">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold my-5 sm:my-8">
        Login
      </h1>
      <form
        className="flex flex-col gap-5 sm:gap-7 items-center"
        onSubmit={submitHandler}
      >
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl  p-3 bg-white"
          value={userData.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
          value={userData.password}
          onChange={changeHandler}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-700 text-white rounded-md  w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl tracking-wide shadow-md cursor-pointer"
        >
          {loading ? "Loading..." : "Login"}
        </button>
       <Oauth />
        <p className=" text-center sm:text-lg">
          Don't have a account?{" "}
          <Link to="/signup">
            <span className="text-blue-600">SignUp</span>
          </Link>
        </p>
      </form>
      <div>{error && <p className="text-red-600">{error}</p>}</div>
    </div>
  );
}
