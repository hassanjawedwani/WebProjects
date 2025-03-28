import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import { loginSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router";

export default function Oauth() {

  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function googleClickHandler() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const response = await fetch("/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(result.user)
        });
        if (response.ok) {
          console.log("im back from server with this response of new user fucking created");
          const user = await response.json();
          dispatch(loginSuccess(user));
          navigate("/");
        } else {
          console.log("Some error occured in sending google firebase data to server");
        }
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }

  return (
    <button
      disabled={loading}
      type="button"
      className=" bg-white text-slate-800 rounded-md  w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl tracking-wide  hover:cursor-pointer shadow-md"
      onClick={googleClickHandler}
    >
      <div className="flex justify-center gap-4 items-center">
        <FcGoogle style={{ fontSize: "2rem" }} />
        <span>Sign in with Google</span>
      </div>
    </button>
  );
}
