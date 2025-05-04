import React from 'react'
import { assets } from "../assets/assets.js";
import { useAppContext } from '../context/AppContext';




const BestSeller = () => {
  const context = useAppContext();
 

  const { products, currency, addToCart, cartItems, removeToCart, navigate} = useAppContext();
 
  
  return (
    <div>
      <h2 className='text-2xl md:text-3xl font-medium text-slate-700 pb-5'>Best Seller</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 '>
        {
          products.filter((product) =>product.inStock).slice(0, 5).map((product, index) => (
            <div key={index} className='group rounded-lg flex flex-col justify-center p-4 border border-gray-200 gap-0.5'>
              <img src={product.image[0]} alt={product.name} className='w-24 h-24 transition-transform group-hover:scale-125 self-center' onClick={() => navigate(`/products/${product.category}/${product._id}`)} />
              <p className='text-sm text-slate-400'>{product.category}</p>
              <h3 className='text-lg my-1 font-medium text-slate-700'>{product.name}</h3>
              <div className='flex gap-0.5'>
                <img src={assets.star_icon} alt="star icon" />
                <img src={assets.star_icon} alt="star icon" />
                <img src={assets.star_icon} alt="star icon" />
                <img src={assets.star_icon} alt="star icon" />
                <img src={assets.star_dull_icon} alt="star icon" />
                <span className='text-slate-400'>(4)</span>
              </div>
              <div className=' flex flex-row justify-between gap-2 mt-2 flex-wrap '>  {/*onClick={e => e.stopPropagation()}*/}
                <div className='flex items-end-safe gap-x-1'>
                  <p className='font-medium text-primary'>{currency}{product.offerPrice}</p>
                  <p className='line-through text-xs text-slate-400'>{currency}{product.price}</p>
                </div>
                {cartItems[product._id] 
                  ?
                  <div className='text-sm text-primary border border-primary py-1 px-2 flex gap-2 shrink-0 w-20'>
                    <button type='button'className='w-6 ' onClick={() => { removeToCart(product._id) }}>-</button>
                    <span className='w-7 text-center'>{cartItems[product._id]}</span>
                    <button type='button' className='w-6' onClick={() => addToCart(product._id)}>+</button>
                  </div>
                  :
                  (
                    <button className='text-sm text-primary border border-primary py-1 px-2 flex gap-2 shrink-0 w-20 justify-center' onClick={() => { addToCart(product._id); }}>
                     <img src={assets.cart_icon} alt="cart icon" />
                     <span>Add</span>
                   </button>
                  )
                  
                } 
               
                
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller