import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const AddAddress = () => {
  const { allAddresses, setAllAddresses , navigate } = useAppContext();
  const [addressData, setAddressData] = useState({});
  const inputChangeHandler = (e) => {
    setAddressData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (addressData) {
      let addressString = "";
      for (const key in addressData) {
        addressString += (addressData[key] + ", ");
      }
      setAllAddresses(prevAddresses => ([...prevAddresses, addressString]));
    }
    navigate("/cart");
    
  }
  return (
    <div>
      <h1 className='text-2xl md:text-3xl text-gray-500 mt-16'>Add Shipping <span className='text-primary font-semibold'>Address</span></h1>
      <div className='flex flex-col lg:flex-row-reverse justify-between'>
        <div>
          <img src={assets.add_address_iamge} className='w-full' />
        </div>
        <form className='grid grid-cols-2 gap-2 py-4' onSubmit={submitHandler}>
          <input type="text" id="first-name" name="first-name" onChange={inputChangeHandler} placeholder='First Name' className=' p-2  rounded border border-gray-300 h-9 outline-primary'/>
          <input type="text" id="last-name" name="last-name"  onChange={inputChangeHandler}  placeholder='Last Name' className=' p-2  rounded border border-gray-300 h-9 outline-primary'/>
          <input type="email" id="email" name="email"  onChange={inputChangeHandler}  placeholder='Email' className='border  p-2  rounded border-gray-300 h-9 outline-primary col-span-full'/>
          <input type="text" id="street" name="street"  onChange={inputChangeHandler}  placeholder='Street' className='border  p-2  rounded border-gray-300 h-9 outline-primary col-span-full' />
          <input type="text" id="city" name="city"  onChange={inputChangeHandler}  placeholder='City' className='border p-2  rounded  border-gray-300 h-9 outline-primary'/>
          <input type="text" id="state" name="state"  onChange={inputChangeHandler}  placeholder='State' className='border  p-2  rounded border-gray-300 h-9 outline-primary'/>
          <input type="number" id="zipcode" name="zipcode"  onChange={inputChangeHandler}  placeholder='Zip Code' className='border p-2  rounded  border-gray-300 h-9 outline-primary'/>
          <input type="text" id="country" name="country"  onChange={inputChangeHandler}  placeholder='Country' className=' p-2  rounded border border-gray-300 h-9 outline-primary' />
          <input type="text" id="phone" name="phone"  onChange={inputChangeHandler} placeholder='Phone' className='border p-2  rounded  border-gray-300 h-9 outline-primary col-span-full' />
          <button type='submit' className=' mt-5 h-11 col-span-full w-full bg-primary hover:bg-primary-dull text-white font-semibold uppercase'>Save Address</button>
        </form>
      </div>
    </div>
  )
}

export default AddAddress