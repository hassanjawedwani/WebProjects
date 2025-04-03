import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosWarning } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { CloudinaryImage } from "@cloudinary/url-gen/index";
import { loginStart, loginSuccess, uploadImageStart, uploadImageEnd, loginFailure, deleteAccountStart, deleteAccountError, deleteAccountSuccess} from "../redux/user/userSlice";
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const myRef = useRef(null);
  const [formData, setFormData] = useState({});


  useEffect(() => {
    async function uploadImage() { 
      if (image) {
        dispatch(uploadImageStart());

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "waniestate");

        try {
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dg7yzgynb/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await response.json();
          const cloudinaryImageURL = data.secure_url;
          setImageURL(cloudinaryImageURL);
          console.log("here is iamge url", data);
          dispatch(uploadImageEnd(cloudinaryImageURL));
          try {
            const response = await fetch(`api/user/update/${currentUser._id}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "imageURL": cloudinaryImageURL,
                
              })
            });
            if (response.ok) {
              const result = await response.json();
              console.log("api request from profile route has send response", result);
              dispatch(loginSuccess(result))
            } else {
              const error = await response.json();
              throw new Error(error.message);
            }
            
          } catch (err) {
            dispatch(loginFailure(err));
            console.log("Error occured in send api request to updating profile", err);
          }
          

        } catch (err) {
          console.log("Error in uploading to cloudinary: ", err);
          dispatch(loginFailure(err));
        }
      }
    }
    uploadImage();
  }, [image]);
  
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(`api/user/update/info/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log("api request from profile route has send response", result);
        dispatch(loginSuccess(result))
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
      
    } catch (err) {
      dispatch(loginFailure(err));
      console.log("Error occured in send api request to updating profile", err);
    }
  }

  async function deleteHandler() {
    // ! dispatch(deleteAccountStart()); 
    try {
      const response = await fetch(`/api/user/delete/${currentUser._id}`, {
      // const response = await fetch(`/api/user/delete/67eeedc59ea59d4226313f48`, {  // wrong user for testing
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      if (response.ok) {
        console.log("response from delete route :", result);
        dispatch(deleteAccountSuccess());

        

        navigate("/");
      } else {
        throw new Error(result.message || "failed to delete user");
      }
    } catch (error) {
      console.log("delete handler error occured", error);
      dispatch(deleteAccountError(error));
    }
    

  }

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-5">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold my-5 sm:my-8">
        Profile
      </h1>
      <form className="flex flex-col gap-5 sm:gap-7 items-center" onSubmit={submitHandler}>
        <input
          type="file"
          name="image"
          id="image"
          ref={myRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div
          className="w-36 h-36 rounded-full relative"
          onClick={() => myRef.current.click()}
        >
          <img
            src={currentUser.photoURL}
            alt="profile photo"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="bg-transparent text-center text-white leading-tight absolute inset-0 flex flex-col justify-center items-center rounded-full opacity-0 hover:opacity-100 hover:cursor-pointer active:opacity-75">
            <FaRegImage />
            <span className="mt-1">
              Upload
              <br />
              new
              <br />
              Photo
            </span>
          </div>
        </div>

        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
          onChange={(e) => {setFormData(prevData => ({...prevData, [e.target.name]: e.target.value}))}}
          defaultValue={currentUser.username}
          // value={newUserData.username}
          // onChange={inputHandler}
          // required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl  p-3 bg-white"
          defaultValue={currentUser.email}
          onChange={(e) => {setFormData(prevData => ({...prevData, [e.target.name]: e.target.value}))}}
          // value={currentUser.}
          // onChange={inputHandler}
          // required
        />
        <input
          type="password"
          placeholder="New password"
          name="password"
          id="password"
          className="border rounded-md w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl p-3 bg-white"
          onChange={(e) => {setFormData(prevData => ({...prevData, [e.target.name]: e.target.value}))}}
          // value={newUserData.password}
          // onChange={inputHandler}
          // required
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
          {currentUser && user.loading ? (
            "Loading..."
          ) : (
            <span>Update</span>
          )}
        </button>
       
        <button
          // type="submit"
          className="bg-red-700 text-white rounded-md  w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl tracking-wide shadow-md cursor-pointer hover:opacity-85"
        >
         
          {currentUser && user.loading ? (
            "Loading..."
          ) : (
            <span>Logout</span>
          )}
        </button>

        <button
          type="button"
          className="bg-red-900 text-white rounded-md  w-96 sm:w-lg h-10 sm:h-12 text-lg sm:text-2xl tracking-wide shadow-md cursor-pointer hover:opacity-85 flex  justify-center gap-3 items-center"
          onClick={deleteHandler}
        >
          {currentUser && user.loading ? (
            "Loading..."
          ) : (
            <>
              <IoIosWarning /> Delete Account
            </>
          )}
        </button>
      </form>
      <div>{user.error && user.error.message}</div>
    </div>
  );
}
