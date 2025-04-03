import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import ExpressError from "../../../api/utils/ExpressError";
import Oauth from "../components/Oauth";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/user/userSlice";

export default function SignUp() {
  const [newUserData, setNewUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const [errorMessage, setErrorMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);

  function inputHandler(e) {
    setNewUserData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    dispatch(loginStart());
    try {
      if (
        !newUserData.username ||
        !newUserData.email ||
        !newUserData.password
      ) {
        throw new Error("All fields are required");
      }
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });
      const result = await response.json();

      console.log("res2",result);
      console.log("res", result);
      

      if (result.ok) {
        dispatch(loginSuccess(result));
        navigate("/");
      } else {
        throw new Error(result.message);
      }
    

    } catch (err) {
      dispatch(loginFailure(err));
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
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl  p-3 bg-white"
          value={newUserData.email}
          onChange={inputHandler}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
          value={newUserData.password}
          onChange={inputHandler}
          required
        />

        {/* <input
          type="file"
          name="profile-photo"
          id="profile-photo"
          // className=" rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
        /> */}

        <button
          type="submit"
          className="bg-slate-700 text-white rounded-md  w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl tracking-wide shadow-md cursor-pointer"
        >
          {user.loading ? "Loading..." : "SignUp"}
        </button>
        <Oauth />
        <p className=" text-center sm:text-lg">
          Already have a account?{" "}
          <Link to="/login">
            <span className="text-blue-600">Login</span>
          </Link>
        </p>
      </form>
      <div>{user.error && user.error.message}</div>
      
    </div>    
  );
}
