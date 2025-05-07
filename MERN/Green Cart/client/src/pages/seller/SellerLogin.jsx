import {  Lock, Mail, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useAppContext } from '../../context/AppContext';


const SellerLogin = () => {

  const { isSeller, setIsSeller, navigate } = useAppContext();

  const initialState = {
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialState); 

  const inputHandler = (e) => setFormData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSeller(true);

  }

  useEffect(() => {
    if (isSeller) {
      navigate("/seller")
    }
  }, [isSeller])
  return (
    <div className='w-full h-svh flex items-center justify-center bg-black/5 shadow'>
      <form className='bg-white min-w-96 max-w-96 border border-gray-400 rounded-2xl p-6 shadow'>

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
      
      </form>
    </div>
  );
}

export default SellerLogin;