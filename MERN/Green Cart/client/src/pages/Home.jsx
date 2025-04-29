import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Spacer />
      <Categories />
      <Spacer />

    </div>
  )
}

export default Home