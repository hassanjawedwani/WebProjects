import React from 'react'
import { toast } from 'react-hot-toast'

const NewsLetter = () => {
  return (
    <div>
      <h2 className='text-center text-2xl md:text-4xl font-medium text-slate-700 mb-1 lg:mb-2'>Never Miss a Deal!</h2>
      <p className='text-center lg:text-lg text-slate-400 mb-5 lg:mb-6'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
      <div className='h-12 w-full border border-gray-300 rounded-md flex bg-primary px-2 max-w-2xl mx-auto'>
        <input type="text" className='text-slate-700 placeholder:text-slate-400 h-full w-full bg-white outline-none p-3' placeholder='example@mail.com'/>
        <button type='button' className='h-full   bg-amber mx-12 text-white font-md letter-space-5 cursor-pointer' onClick={() => toast('Thanks for Subcribe!', { icon: '🤞'})}>Subcribe</button>
      </div>
    </div>
  )
}

export default NewsLetter