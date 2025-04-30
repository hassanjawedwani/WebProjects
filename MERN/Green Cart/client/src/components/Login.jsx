import {  Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAppContext } from '../context/AppContext';

const Login = () => {
  const [state, setState] = useState("login");
  const initialState = {
    name: "",
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialState); 
  const { setShowLoginForm } = useAppContext();

  const inputHandler = (e) => setFormData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
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
              <input onChange={inputHandler} value={formData.name} type="text" name='name'  className='w-full outline-none text-slate-600 placeholder:text-slate-400 text-sm' placeholder='Name' />
            </div>
          )}
          <div className='flex items-center px-4 py-2 gap-2 rounded-full border border-gray-300 mt-4 focus-within:border-primary-dull shadow '>
            <Mail />
            <input type="text" onChange={inputHandler} value={formData.email} name="email" className='w-full outline-none text-slate-600 placeholder:text-slate-400 text-sm ' placeholder='Email' />
          </div>
          <div className='flex items-center px-4 py-2 gap-2 rounded-full border border-gray-300 mt-4 focus-within:border-primary-dull shadow '>
            <Lock />
            <input type="text" onChange={inputHandler} value={formData.password} name="password" className='w-full outline-none text-slate-600 placeholder:text-slate-400 text-sm ' placeholder='Password' />
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