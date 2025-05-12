import {  Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import axiosInstance from '../services/axiosInstance';

const Login = () => {
  const [state, setState] = useState("login");
  const initialState = {
    name: "",
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialState); 
  const { setShowLoginForm, navigate , setUser, setContextUser} = useAppContext();

  const inputHandler = (e) => setFormData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      let response;
      if (state === "login") {
        response = await axiosInstance.post("/api/user/login", formData); 
      } else {
        response = await axiosInstance.post("/api/user/register", formData); 
      }
      if (response.data?.success) {
        toast.success(response.data?.message);
        console.log(response);
        setShowLoginForm(false);
        setUser(true);
        setContextUser(response.data?.user);
        navigate("/");
      } else {
        toast.error(response.data?.message);
        console.log(response)
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message || "Something went wrong";
      toast.error(errorMessage);
      console.log(errorMessage);
      return;
    }
  }

  return (
    <div onClick={() => setShowLoginForm(false)} className='fixed z-1 inset-0 flex items-center justify-center bg-black/50' >      
      <form onClick={(e) => e.stopPropagation()} className='bg-white min-w-96 max-w-96 border border-gray-400 rounded-2xl p-6 shadow'>
        <h1 className='text-2xl font-medium text-center text-slate-800'>{state === "login" ? "Login" : "Signup"}</h1>
        {state==="login" ? (<p className='text-center text-sm text-slate-500 my-1'>Please sing in to continue</p>) : (<p className='text-center text-sm text-slate-500 my-1'>Please fill the form to create account</p>)}
        
        <div className='mt-8 mb-4'>
          {state === "signup" && (
            <div className='flex items-center px-4 py-2 gap-2 rounded-full border border-gray-300 focus-within:border-primary-dull shadow '>
              <User />
              <input onChange={inputHandler} value={formData.name} type="text" name='name'  className='w-full outline-none text-slate-600 placeholder:text-slate-400 text-sm' placeholder='Name' required />
            </div>
          )}
          <div className='flex items-center px-4 py-2 gap-2 rounded-full border border-gray-300 mt-4 focus-within:border-primary-dull shadow '>
            <Mail />
            <input type="text" onChange={inputHandler} value={formData.email} name="email" className='w-full outline-none text-slate-600 placeholder:text-slate-400 text-sm ' placeholder='Email' required />
          </div>
          <div className='flex items-center px-4 py-2 gap-2 rounded-full border border-gray-300 mt-4 focus-within:border-primary-dull shadow '>
            <Lock />
            <input type="text" onChange={inputHandler} value={formData.password} name="password" className='w-full outline-none text-slate-600 placeholder:text-slate-400 text-sm ' placeholder='Password' required/>
          </div>
        </div>

        {state === "login"
          &&
          (<Link to="/" className='text-primary text-sm pl-2'>Forgot password?</Link>)
        }

        <button type="submit" onClick={submitHandler} className='bg-primary hover:bg-primary-dull text-white w-full h-9 rounded-full my-3'>{state === "login" ? "Login" : "Signup"}</button>

        {state === "login"
          ?
          (<p className='text-slate-600 mb-3 pl-3 text-sm text-center '>Don't have an account? <span className='text-primary hover:text-primary-dull cursor-pointer' onClick={() => { setState("signup"); setFormData(initialState); }}>Create Account</span></p>)
          :
          (<p className='text-slate-600 mb-3 pl-3 text-sm text-center '>Already have an account? <span className='cursor-pointer text-primary hover:text-primary-dull' onClick={() => { setState("login"); setFormData(initialState) }}>Login</span></p>)
        }
      
      </form>
    </div>
  );
}

export default Login;