import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-primary-dull/20 '>
      <div className='p-5 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto'>
        <div className='col-span-full lg:col-span-1'>
          <Link to="/">
            <img src={assets.logo} alt='company logo' className='mb-2.5' />
          </Link>
          <p className='text-slate-600 max-w-md'>
            We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <div className='flex flex-col gap-1 text-slate-600 text-sm mt-1.5'>
            <Link to="/" className='hover:underline'>Home</Link>
            <Link to="/" className='hover:underline'>Best Sellers</Link>
            <Link to="/" className='hover:underline'>Offers & Deals</Link>
            <Link to="/" className='hover:underline'>Contact Us</Link>
            <Link to ="/" className='hover:underline'>FAQs</Link>
          </div>
        </div>
        <div>
          <h3>Need help?</h3>
          <div className='flex flex-col gap-1 text-slate-600 text-sm mt-1.5'>
            <Link to="/" className='hover:underline'>Delivery Information</Link>
            <Link to="/" className='hover:underline'>Return & Refund Policy</Link>
            <Link to="/" className='hover:underline'>Payment Methods</Link>
            <Link to="/" className='hover:underline'>Track your Order</Link>
            <Link to ="/" className='hover:underline'>Contact Us</Link>
          </div>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className='flex flex-col gap-1 text-slate-600 text-sm mt-1.5'>
            <Link to="/" className='hover:underline'>Instagram</Link>
            <Link to="/" className='hover:underline'>Twitter</Link>
            <Link to="/" className='hover:underline'>Facebook</Link>
            <Link to="/" className='hover:underline'>YouTube</Link>
          </div>
        </div>
      </div>
      <div className='border-b-1 border-slate-400 mx-5'></div>
      <p className='text-slate-600 text-sm text-center my-3'>Copyright {new Date().getFullYear()} © Wani All Right Reserved.</p>
   </div>
  )
}

export default Footer