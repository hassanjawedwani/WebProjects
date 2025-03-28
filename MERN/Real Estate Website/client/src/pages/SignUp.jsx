import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import ExpressError from "../../../api/utils/ExpressError";
import Oauth from "../components/Oauth";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user/userSlice";

export default function SignUp() {
  const [newUserData, setNewUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function inputHandler(e) {
    setNewUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    dispatch(setIsLoading(true));
    try {
      if (
        !newUserData.username ||
        !newUserData.email ||
        !newUserData.password
      ) {
        dispatch(setIsLoading(false));
        throw new Error("All fields are required");
      }
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      if (response.ok) {
        const result = await response.json();
        dispatch(loginSuccess(result));
        navigate("/");
      } else {
        const error = await response.json();
        dispatch(setErrorMessage(error.message));
        console.log(error.message);
      }
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setErrorMessage(err.message));
      dispatch(setIsLoading(false));
      return;
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-5">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold my-5 sm:my-8">
        SignUp
      </h1>
      <form
        className="flex flex-col gap-5 sm:gap-7 items-cente"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
          value={newUserData.username}
          onChange={inputHandler}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl  p-3 bg-white"
          value={newUserData.email}
          onChange={inputHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
          value={newUserData.password}
          onChange={inputHandler}
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-slate-700 text-white rounded-md  w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl tracking-wide shadow-md cursor-pointer"
        >
          {isLoading ? "Loading..." : "SignUp"}
        </button>
        <Oauth />
        <p className=" text-center sm:text-lg">
          Already have a account?{" "}
          <Link to="/login">
            <span className="text-blue-600">Login</span>
          </Link>
        </p>
      </form>
      <div>{errorMessage}</div>
    </div>
  );
}
