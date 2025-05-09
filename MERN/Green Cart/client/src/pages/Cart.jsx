import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cartCount, cartItems, setCartItems, products, currency, deleteToCart, cartTotal, getTaxOnCartItems, getCartTotalAfterTax, allAddresses, navigate, setMyOrders} = useAppContext();
  const cartProducts = products.filter(product => cartItems[product._id]);
  const [checkoutOption, setCheckoutOption] = useState("cod");
  const [showAddresses, setShowAddresses] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(allAddresses[0] || "");

  const codHandler = () => {

    if (!currentAddress) {
      toast.error("Please enter address before placing order");
      return;
    }
    if (!Object.keys(cartItems).length) {
      toast.error("please cart any items before placing orders");
      return;
    }

    setMyOrders(prevOrders => ([
      ...prevOrders,
      {
        orderId: Math.floor(Math.random() * 10000000000000),
        paymentMethod: checkoutOption,
        totalAmount: getCartTotalAfterTax(),
        address: currentAddress,
        items: cartProducts.map(cartProduct => {
          return {
            image: cartProduct.image,
            title: cartProduct.name,
            category: cartProduct.category,
            quantity: cartItems[cartProduct._id],
            status: "order placed",
            date: new Date().toLocaleDateString(),
            amount: cartProduct.price * cartItems[cartProduct._id]
          }
        })
      }
    ]));
    toast.success("Order placed Successfully, check details in my orders pages")
    navigate("my-orders");
  }
  
  
  return (
    <div className='pt-16'>
      <div className='flex items-end gap-2 flex-'>
        <h1 className='text-slate-800 text-3xl font-medium'>Shopping Cart</h1>
        <span className='text-sm text-primary-dull font-medium'>{cartCount()} items</span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div>
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
                  <div className='flex items-center'>{currency} {cartItems[cartProduct._id] *  cartProduct.price}</div>
                  <div className='flex items-center'>
                    <button type='button' className='cursor-pointer' onClick={() => {deleteToCart(cartProduct._id)}}><img src={assets.remove_icon} alt="" /></button>
                  </div>
                </div> 
              </div>
            )}
            
          </div>
          <div>
              <Link to="/products" className='text-primary hover:text-primary-dull flex items-center gap-1 group'><span className='transition group-hover:-translate-x-2'><img src={assets.arrow_right_icon_colored} alt="" /></span>Continue Shopping</Link>
          </div>
        </div>
        <div className='max-w-96 bg-gray-200 p-5 lg:my-0 my-10'>
          <h2 className='text-slate-600 text-xl font-medium '>Order Summary</h2>
          <div className='border-b-1 border-b-gray-400 my-5'></div>
          <div>
            <p className='uppercase font-medium text-slate-700 mb-1 '>Delivery Address</p>
            <div className='relative flex justify-between mb-4 pb-1 gap-1.5'>
              <p className='text-gray-500'>{currentAddress ? currentAddress : "No address found" }</p>
              <button onClick={() => setShowAddresses(prevValue => (!prevValue))} className='text-primary hover:text-primary-dull hover:underline'>Change</button>
              {showAddresses && (
                <div className='absolute top-full bg-white w-full p-2 text-slate-800  border rounded border-gray-300 z-32 space-y-2' >
                  {allAddresses && allAddresses.map(address => (
                    <p className='mb-1 hover:cursor-pointer hover:bg-gray-200' onClick={() => { setShowAddresses(false); setCurrentAddress(address)}}>
                    {address}
                  </p>
                  ))}
                  <p className=' text-center w-full bg-primary hover:bg-primary-dull text-white' onClick={() => {setShowAddresses(false)}} >
                    <Link to="/add-address">Add Address</Link>
                  </p>
                </div>
              )}
              
            </div>
            <div>
              <p className='uppercase font-medium text-slate-700 mb-3'>Payment method</p>
              <select className='bg-white w-full h-9 outline-none p-1' onChange={(e) => setCheckoutOption(e.target.value)}>
                <option value="cod">Cash On Delivery</option>
                <option value="onlinePayment">Online Payment</option>
              </select>
            </div>
            <div className='border-b-1 border-b-gray-400 my-5'></div>
            <div className='space-y-3'>
              <p className='flex justify-between'>
                <span className='text-gray-500'>Price</span>
                <span className='text-gray-500'>{currency}{cartTotal()}</span>
              </p>
              <p className='flex justify-between'>
                <span className='text-gray-500'>Shipping Fee</span>
                <span className='text-primary-dull'>Free</span>
              </p>
              <p className='flex justify-between'>
                <span className='text-gray-500'>Tax (2%)</span>
                <span className='text-primary-dull'>{currency}{getTaxOnCartItems()}</span>
              </p>
              <p className='flex justify-between text-lg'>
                <span className='text-gray-500'>Total Amount:</span>
                <span className='text-primary-dull'>{currency}{getCartTotalAfterTax()}</span>
              </p>

              {checkoutOption === "cod" ?
                (<button type="button" onClick={codHandler} className='w-full h-11 bg-primary hover:bg-primary-dull text-white font-medium'>Place Order</button>) :
                (<button type="button" className='w-full h-11 bg-primary hover:bg-primary-dull text-white font-medium '>Proceed to Checkout</button>)
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart