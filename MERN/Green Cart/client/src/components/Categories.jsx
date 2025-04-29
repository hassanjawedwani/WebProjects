import React from 'react'
import { categories } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";

const Categories = () => {
  const {navigate} = useAppContext()
  return (
    <div>
      <h2 className='text-2xl md:text-3xl font-medium text-slate-700 pb-5'>Categories</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 '>
        {
          categories.map((category, index) => (
            <div style={{backgroundColor: `${category.bgColor}`}} key={index} className='group rounded-lg flex flex-col justify-center items-center p-4' onClick={() => navigate(`/products/${category.path.toLowerCase()}`)}>
              <img src={category.image} alt={category.text} className='w-24 h-24 transition-transform group-hover:scale-125'/>
              <h3 className='text-sm my-1'>{category.text}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories;