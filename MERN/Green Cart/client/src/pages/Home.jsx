import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import Spacer from '../components/Spacer'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Spacer />
      <Categories />
      <Spacer />
      <BestSeller />
      <Spacer />
      <BottomBanner />
      <Spacer />
    </div>
  )
}

export default Home