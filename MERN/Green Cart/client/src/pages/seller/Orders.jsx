import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets';

const Orders = () => {
  const { myOrders, currency } = useAppContext();
  console.log(myOrders);
  return (
    <div className='p-5 rounded'>
      <div className='md:grid grid-cols-[2fr_1fr_1fr_1fr] text-slate-500 font-medium mt-4  py-5 pl-5 hidden'>
        <p>Product</p>
        <p>Address</p>
        <p>Subtotal</p>
        <p>Action</p>
      </div>
      <div className='flex flex-col gap-3 mt-5 mb-8'>
        {myOrders.length > 0 && myOrders.map((order, index) => 
          <div className='border border-slate-400 rounded py-5 pl-5' key={index}>
            <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-5' >
              <div className='flex items-center gap-3'>
               <img src={assets.add_address_iamge} alt="product image" className='max-w-20 border border-slate-300 rounded' />
                <div className='flex flex-col'>
                  {order.items.length > 0 && order.items.map((item, index) => (
                    <p className='text-sm text-slate-400' key={index}>{item.title} x {item.quantity}</p>
                  ))}
              </div>
                
              </div>
              <div className='flex items-center text-sm text-slate-400'>{order.address}</div>
            <div className='flex items-center'>{currency}{Number(order.totalAmount)}</div>
              <div className='flex flex-col text-sm text-slate-400'>
                <p>OrderId: {order.orderId}</p>
                <p>Method: {order.paymentMethod.toUpperCase()}</p>
                {/* <p>Date: {order.items[0].date} </p> */}
                <p>Payment: pending</p>
              </div>
            </div> 
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders;


// [{…}]
// 0
// : 
// items
// : 
// Array(2)
// 0
// : 
// amount
// : 
// 30
// category
// : 
// "Vegetables"
// date
// : 
// "5/9/2025"
// image
// : 
// ['/src/assets/carrot_image.png']
// quantity
// : 
// 1
// status
// : 
// "order placed"
// title
// : 
// "Carrot 500g"
// [[Prototype]]
// : 
// Object
// 1
// : 
// {image: Array(1), title: 'Spinach 500g', category: 'Vegetables', quantity: 2, status: 'order placed', …}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
// orderId
// : 
// 2545636321432
// paymentMethod
// : 
// "cod"
// totalAmount
// : 
// 67.32
// [[Prototype]]
// : 
// Object
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)