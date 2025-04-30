import React from 'react'
import { assets } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.bottom_banner_image_sm} alt="bottom banner image" className='w-full md:hidden' />
      <img src={assets.bottom_banner_image} alt="bottom banner image" className='w-full hidden md:block min-h-80' />
      <div className='absolute inset-0  flex flex-col items-center md:items-end md:justify-center pt-25 md:p-0 md:pr-14 lg:pr-20 xl:pr-32'>
        <h2 className='text-2xl font-semibold text-primary mb-5'>Why We Are the Best?</h2>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div><img src={assets.delivery_truck_icon} alt='fast delivery icon' /></div>
            <div>
              <h3 className='text-lg font-semibold text-slate-700'>Fastest Delivery</h3>
              <p className='text-xs text-slate-400'>Groceries delivered in under 30 minutes.</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div><img src={assets.leaf_icon} alt='leaf icon' /></div>
            <div>
              <h3 className='text-lg font-semibold text-slate-700'>Freshness Guaranteed</h3>
              <p className='text-xs text-slate-400'>Fresh produce straight from the source.</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div><img src={assets.coin_icon} alt='coin icon' /></div>
            <div>
              <h3 className='text-lg font-semibold text-slate-700'>Affordable Prices</h3>
              <p className='text-xs text-slate-400'>Quality groceries at unbeatable prices.</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div><img src={assets.trust_icon} alt='trust icon' /></div>
            <div>
              <h3 className='text-lg font-semibold text-slate-700'>Trusted by Thousands</h3>
              <p className='text-xs text-slate-400'>Loved by 10,000+ happy customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner