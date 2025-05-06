import React from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets';

const MyOrders = () => {
  const { currency, myOrders } = useAppContext();
  // const myOrders = [
  //   {
  //     orderId: 
  //     paymentMethod:
  //     totalAmount:
  //     items: [
  //       {
  //         imageUrl:
  //           title:
  //         category:
  //           quantity:
  //         status:
  //           data
  //         amount:
  //       }
  //     ]
  //   }
  // ];
  
  // const myOrders = [
  //   {
  //     orderId: "23r23f23",
  //     paymentMethod: "COD",
  //     totalAmount: 23,
  //     items: [
  //       {
  //         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIzsBjPak5cnVK8JipFkj0VShMu632CMh5htJxWc259c2xxibL-2v_wXGO0UDbEGMaxfLwA&s",
  //         title: "wonderful",
  //         category: "shoes",
  //         quantity: 17,
  //         status: "order placed",
  //         date: "17 nov 2023",
  //         amount: 2399,
  //       },
  //       {
  //         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIzsBjPak5cnVK8JipFkj0VShMu632CMh5htJxWc259c2xxibL-2v_wXGO0UDbEGMaxfLwA&s",
  //         title: "wonderful",
  //         category: "shoes",
  //         quantity: 17,
  //         status: "order placed",
  //         date: "17 nov 2023",
  //         amount: 2399,
  //       }
  //     ]
  //   },
  //   {
  //     orderId: "23r23f23",
  //     paymentMethod: "COD",
  //     totalAmount: 23,
  //     items: [
  //       {
  //         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIzsBjPak5cnVK8JipFkj0VShMu632CMh5htJxWc259c2xxibL-2v_wXGO0UDbEGMaxfLwA&s",
  //         title: "wonderful",
  //         category: "shoes",
  //         quantity: 17,
  //         status: "order placed",
  //         date: "17 nov 2023",
  //         amount: 2399,
  //       },
  //       {
  //         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIzsBjPak5cnVK8JipFkj0VShMu632CMh5htJxWc259c2xxibL-2v_wXGO0UDbEGMaxfLwA&s",
  //         title: "wonderful",
  //         category: "shoes",
  //         quantity: 17,
  //         status: "order placed",
  //         date: "17 nov 2023",
  //         amount: 2399,
  //       }
  //     ]
  //   }
  // ];

  console.log("My Orders: ", myOrders)
  return (
    <div className='mt-16'>
      <h1 className='text-2xl font-medium text-slate-700 uppercase'>My Orders</h1>

      {/* orders map here  */}
      {myOrders.map((order, index) => (

        <div className='border border-slate-400 rounded p-3 my-5' key={index}>
          <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5 text-slate-400 '>
            <p>OrderId: {order.orderId}</p>
            <p>Payment: {order.paymentMethod}</p>
            <p>Total Amount: {currency}{order.totalAmount}</p>
          </div>

          {/*items inside one order here  */}
          {order.items.map((item, index) => (
            <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] items-center text-slate-400 gap-5  mt-5' key={index}>
              <div className='flex gap-2 items-center'>
                <div>
                  <img src={item.image[0]} alt="product image" className='max-w-20 rounded' />
                </div>
                <div>
                  <h2 className='text-slate-800 text-xl font-medium'>{item.title}</h2>
                  <p>Category: {item.category}</p>
                </div>
              </div>
              <div>
                <p>Quantity: {item.quantity} </p>
                <p>Status: {item.status}</p>
                <p>Date: {item.date}</p>
              </div>
              <div>
                <h2 className='text-primary text-lg font-medium'>Amount: {currency}{item.amount}</h2>
                {/* <div className='border-b border-b-slate-400'></div> */}
              </div>
              
            </div>
          ))}
          

        </div>
       
      ))}

    </div>
  )
}

export default MyOrders