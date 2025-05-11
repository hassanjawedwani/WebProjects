import {  Lock, Mail, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import axiosInstance from '../../services/axiosInstance';


const SellerLogin = () => {

  const { isSeller, setIsSeller, navigate } = useAppContext();

  const initialState = {
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialState); 

  const inputHandler = (e) => setFormData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));

  const submitHandler = async (e) => {
    
    try {
      e.preventDefault();
      let response = await axiosInstance.post("/api/seller/login", formData); 
      if (response.data?.success) {
        toast.success(response.data?.message);
        console.log(response);
        setIsSeller(true);
        toast.success("login successful")
     
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

  useEffect(() => {
    if (isSeller) {
      navigate("/seller")
    }
  }, [isSeller, navigate]);

  return (
    <div className='w-full h-svh flex items-center justify-center bg-black/5 shadow'>
      <form className='bg-white m-5  w-96 border border-gray-400 rounded-2xl p-6 shadow'>

        <h1 className='text-2xl font-medium text-center text-slate-800'>Seller Login</h1>
        
        <div className='mt-8 mb-4'>
          <div className='flex items-center px-4 py-2 gap-2 rounded-full border border-gray-300 mt-4 focus-within:border-primary-dull shadow '>
            <Mail />
            <input type="text" onChange={inputHandler} value={formData.email} name="email" className='w-full outline-none text-slate-600 placeholder:text-slate-400 text-sm ' placeholder='Email' />
          </div>
          <div className='flex items-center px-4 py-2 gap-2 rounded-full border border-gray-300 mt-4 focus-within:border-primary-dull shadow '>
            <Lock />
            <input type="text" onChange={inputHandler} value={formData.password} name="password" className='w-full outline-none text-slate-600 placeholder:text-slate-400 text-sm ' placeholder='Password' />
          </div>
        </div>

        <button type="submit" onClick={submitHandler} className='bg-primary hover:bg-primary-dull text-white w-full h-9 rounded-full my-3'>login</button>

        <p className='text-slate-600 mb-3 pl-3 text-sm text-center '>Go to <span className='text-primary hover:text-primary-dull cursor-pointer' onClick={() => { navigate("/") }}>Home Page</span></p>
      
      </form>
    </div>
  );
}

export default SellerLogin;