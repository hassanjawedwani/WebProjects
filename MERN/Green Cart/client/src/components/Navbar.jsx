import React, { useState } from "react";
import { NavLink } from "react-router";
import { assets } from "../assets/assets";
import { Search, AlignJustify, ShoppingCart } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, navigate, setShowLoginForm, setSearchQuery, cartCount} = useAppContext();

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-4 border-b border-gray-300 bg-white  transition-all sticky top-0 z-20">
      
      {/*Company Logo*/}
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img src={assets.logo} alt="GreenCart Company Logo" className="h-9" />
      </NavLink>

      {/*Desktop Menu*/}
      <div className="hidden sm:flex items-center gap-8">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-primary-dull font-semibold" : ""}>Home</NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? "text-primary-dull font-semibold" : ""}>All Products</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary-dull font-semibold" : ""}>Contact</NavLink>

        <div className="hidden lg:flex text-sm gap-2 border border-gray-300 px-3 rounded-full items-center">
          <input type="text" onChange={(e) => { setSearchQuery(e.target.value); navigate("/products") }} placeholder="Search any Product" className=" py-1.5 w-full bg-transparent outline-none placeholder-gray-400" />
          <Search className="text-gray-500 w-4 h-4"/>
        </div>

        <div className="relative" onClick={() => navigate("/cart")}>
          <ShoppingCart className="cursor-pointer w-5 h-5" />
          <button className="absolute -top-2.5 -right-3 text-xs w-5 h-5 bg-primary/80 rounded-full ">{cartCount()}</button>
        </div>

        {!user ? (<button type="button" onClick={() => setShowLoginForm(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull text-white rounded-full transition">
          Login
        </button>) : (
            <div className="relative group">
              <img src={assets.profile_icon} alt="profile icons" className="w-10 h-10"/>
              <ul className="hidden group-hover:block text-sm absolute top-10 right-0 shadow py-2.5 w-24 rounded-md z-10 bg-white border border-gray-300">
                <li className="pl-3 p-1.5 cursor-pointer hover:bg-primary/10" onClick={() => navigate("/my-orders")}>My Orders</li>
                <li className="pl-3 p-1.5 cursor-pointer hover:bg-primary/10" onClick={() => { setUser(false) }}>Logout</li>
              </ul>
            </div>
        )
        }
        
      </div>

      {/*Breadcrumbs Button*/}
      <div  className="sm:hidden flex gap-5">
        <div className="relative" onClick={() => navigate("/cart")}>
          <ShoppingCart className="cursor-pointer w-5 h-5" />
          <button className="absolute -top-2.5 -right-3 text-xs w-5 h-5 bg-primary/80 rounded-full ">{cartCount()}</button>
        </div>
        <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="menu">
        {/*Menu Icon SVG */}
        <AlignJustify />
      </button>
      </div>
     

      {/*Mobile Menu*/}
      <div className={`${open ? "flex" : "hidden"} flex-col absolute top-[60px] left-0 w-full bg-white shadow-md py-4 px-5 gap-2 sm:hidden text-sm items-start`}>
        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-primary-dull font-semibold" : ""} block`} onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => `${isActive ? "text-primary-dull font-semibold" : ""} block`} onClick={() => setOpen(false)}>All Products</NavLink>
        
        {/* just for login users  */}
        {user && (
          <NavLink to="/orders" className={({ isActive }) => `${isActive ? "text-primary-dull font-semibold" : ""} block`} onClick={() => setOpen(false)}>My Orders</NavLink>
        )}
        
        
        <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-primary-dull font-semibold" : ""} block`} onClick={() => setOpen(false)}>Contact</NavLink>

        {user
          ?
          (<button className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary-dull text-white rounded-full text-sm mt-2 transition" onClick={() => { setOpen(false); setUser(false); } }>
          Logout
          </button>)
          :
          (<button className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary-dull text-white rounded-full text-sm mt-2 transition" onClick={() => setOpen(false)}>
          Login
          </button>)
        }

        
       
        
      </div>


    </nav>
  );
};

export default Navbar;