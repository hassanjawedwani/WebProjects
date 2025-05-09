import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { Link, NavLink, Outlet } from 'react-router'

const sidebarLinks = [
  { name:"Add Product", path:"/seller", icon:assets.add_icon, },
  { name:"Product List", path:"/seller/product-list", icon:assets.product_list_icon },
  { name:"Orders", path:"/seller/orders", icon:assets.order_icon },
];

const SellerLayout = () => {
  const { setIsSeller } = useAppContext()
  return (
    <div>
      <div className='flex justify-between items-center h-12 border-b border-b-slate-400 px-4 bg-white z-200'>
        <Link to="/">
          <img src={assets.logo} alt="logo" className='w-32' />
        </Link>
        <div className="flex gap-2 items-center text-gray-500">
          <p>Hi Admin</p>
          <button type='button' onClick={() => { setIsSeller(false); toast.success("logout successfully") }} className='border border-b-slate-400 rounded-full px-4 py-1'>logout</button>
        </div>
      </div>
      <div className='w-full h-[calc(100vh-48px)] flex'>
        <div className='flex flex-col items-center gap-3 w-14 lg:w-58 h-full pt-4 border-r border-r-gray-400'>
          {sidebarLinks.length > 0 && sidebarLinks.map((sidebarLink, index) => (
            <NavLink to={sidebarLink.path} key={index} end={sidebarLink.path === "/seller"} className={({isActive}) => `w-full flex items-center gap-2 text-lg justify-center md:justify-start md:pl-4 py-1 ${isActive ? "bg-primary/40 border-r-4 border-r-primary-dull" : ""} `}>
             <img src={sidebarLink.icon} alt="" className='w-9' />
             <p className='hidden lg:block'>{sidebarLink.name}</p>
           </NavLink>
          ))}
        </div>
        <div className='overflow-y-scroll no-scrollbar flex-1 p-12'>
          <Outlet/> 
        </div>
      </div>
    </div>
  )
}

export default SellerLayout