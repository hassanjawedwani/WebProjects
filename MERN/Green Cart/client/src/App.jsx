import React from "react";
import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import { useAppContext } from "./context/AppContext.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ProductsCategory from "./pages/ProductsCategory.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import AddAddress from "./pages/AddAddress.jsx";
import MyOrders from "./pages/MyOrders.jsx";


const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showLoginForm } = useAppContext();
  return (  
    <div className="min-h-screen flex flex-col">
      {isSellerPath ? null : <Navbar />} 
      {showLoginForm && <Login />}
      <Toaster />
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40     "} flex-1`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductsCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  );
};

export default App;
