import React from 'react'
import { assets } from "../assets/assets";
import { Link } from 'react-router';


const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner" className='hidden md:block w-full'/>
      <img src={assets.main_banner_bg_sm} alt="banner" className='md:hidden w-full' />
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-20 md:pb-2 md:pl-10'>
        <h1 className='text-slate-700 text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-start w-68 md:w-78 lg:w-lg leading-tight'>Freshness You Can Trust, Savings You will Love!</h1>
        <div className='mt-5 flex group'>
          <Link to="/products" className='py-3 px-9 bg-primary hover:bg-primary-dull text-white font-medium rounded transition'><span className='flex items-center'>Shop now  <img src={assets.white_arrow_icon} alt="arrow" className='sm:hidden ml-1 w-4 h-4 group-hover:translate-x-1 transition'/></span></Link>
          <Link to="/deals" className='py-3 px-9 hidden sm:flex'><span className='flex items-center'>Explore deals <img src={assets.black_arrow_icon} alt="arrow" className='ml-1 w-4 h-4 group-hover:translate-x-1  transition'/></span></Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner;