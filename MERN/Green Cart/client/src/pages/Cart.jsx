import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets';
import { Link } from 'react-router';

const Cart = () => {
  const { cartCount, cartItems, setCartItems, products, currency, deleteToCart } = useAppContext();
  const cartProducts = products.filter(product => cartItems[product._id]);
  console.log(cartProducts, cartItems);
  return (
    <div className='pt-16'>
      <div className='flex items-end gap-2'>
        <h1 className='text-slate-800 text-3xl font-medium'>Shopping Cart</h1>
        <span className='text-sm text-primary-dull font-medium'>{cartCount()} items</span>
      </div>
      <div className='grid grid-cols-[2fr_1fr_1fr] text-slate-500 font-medium mt-4'>
        <p>Product Details</p>
        <p>Subtotal</p>
        <p>Action</p>
      </div>
      <div className='flex flex-col gap-3 mt-5 mb-8'>
        {cartProducts.length > 0 && cartProducts.map((cartProduct, index) => 
          <div>
            <div className='grid grid-cols-[2fr_1fr_1fr]' key={index}>
              <div className='flex items-center gap-3'>
                <img src={cartProduct.image[0]} alt="product image" className='max-w-20 border border-slate-300 rounded' />
                <div className='text-sm text-slate-400'>
                  <p>Weight: N/A</p>
                  <div>
                    <span>Qty: </span>
                    <select className='outline-none border border-slate-400 rounded' onChange={(e) => setCartItems(prevItems => ({ ...prevItems, [cartProduct._id]: e.target.value }))}>
                      {Array(cartItems[cartProduct._id] > 9 ? cartItems[cartProduct._id] : 9).fill('').map((_, index) => (
                        <option key={index} value={index + 1} selected={cartItems[cartProduct._id] === index + 1}>{index + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>{currency} {cartItems[cartProduct._id] *  cartProduct.price}</div>
              <div className='flex justify-center items-center'>
                <button type='button' className='cursor-pointer' onClick={() => {deleteToCart(cartProduct._id)}}><img src={assets.remove_icon} alt="" /></button>
              </div>
            </div>
           
          </div>
        )}
        <div>
          <Link to="/products" className='text-primary hover:text-primary-dull flex items-center gap-1 group'><span className='transition group-hover:-translate-x-2'><img src={assets.arrow_right_icon_colored} alt="" /></span>Continue Shopping</Link>
        </div>
        <div className='max-w-96 bg-gray-200 p-5'>
          <h2 className='text-slate-600 text-xl font-medium '>Order Summary</h2>
          <div className='border-b-1 border-b-gray-400 my-5'></div>
          <div>
            <p className='uppercase font-medium text-slate-700 mb-1 '>Delivery Address</p>
            <div className='flex justify-between mb-4'>
              <p className='text-gray-500'>Nopeee addressi</p>
              <button className='text-primary hover:text-primary-dull hover:underline'>Change</button>
            </div>
            <div>
              <p className='uppercase font-medium text-slate-700 mb-3'>Payment method</p>
              <select className='bg-white w-full h-9 outline-none p-1'>
                <option value="cod">Cash On Delivery</option>
                <option value="onlinePayment">Online Payment</option>
              </select>
            </div>
            <div className='border-b-1 border-b-gray-400 my-5'></div>
            <div>
              <p className='flex justify-between'><span className='text-gray-400'>Price</span><span className='text-gray-400'>{currency}totii</span></p>
              <p className='flex justify-between'><span>Price</span><span>{currency}totii</span></p>
              <p className='flex justify-between'><span>Price</span><span>{currency}totii</span></p>
              <p className='flex justify-between'><span>Price</span><span>{currency}totii</span></p>
            </div>
              
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart