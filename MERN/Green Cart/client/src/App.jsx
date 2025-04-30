import React from "react";
import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer.jsx";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  return (  
    <div className="min-h-screen flex flex-col">
      {isSellerPath ? null : <Navbar />}
      <Toaster />
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40     "} flex-1`}>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  );
};

export default App;
