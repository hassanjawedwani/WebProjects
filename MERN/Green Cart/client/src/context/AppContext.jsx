import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import Product from "../../../server/models/productModel";
import axiosInstance from '../services/axiosInstance';
import User from "../../../server/models/userModel";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [contextUser, setContextUser] = useState(null);
  const [user, setUser] = useState(false);  // context api for authentication
  const [isSeller, setIsSeller] = useState(null); // context api for checking seller or buyer
  const [products, setProducts] = useState([]);  // context api for showing product
  const [cartItems, setCartItems] = useState({}); // context api for cart items 
  const [showLoginForm, setShowLoginForm] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const [allAddresses, setAllAddresses] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  // Fetch all Products
  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/api/product/list")
      if (response.data?.success) {
        setProducts(response.data?.products);
      }

    } catch (err) {
      toast.error(err.message);
    }
  }

  // add product to cart
  const addToCart = (itemId) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1
    }
    setCartItems(cartData);
    toast.success("Added to cart")
  } 

  const cartCount = () => {
    let count = 0;
    for (const item in cartItems) {
      count += Number(cartItems[item])
    }
    return count;
  }

   // remove product to cart
   const removeToCart = (itemId) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId] > 1) {
      cartData[itemId] -= 1;
    } else {
      delete cartData[itemId];
     }
    setCartItems(cartData);
    toast.success("Remove to cart")
  }

  // delete from cart 
  const deleteToCart = (itemId) => {
    const cartData = structuredClone(cartItems);
    delete cartData[itemId];
    setCartItems(cartData);
    toast.success("Item deleted from cart");
  }

  const getProductPrice = (productId) => {
    const product = products.find(product => product._id === productId);
    if (product) {
      return product?.price;
    }
  }

  const cartTotal = () => {
    console.log(cartItems);
    let cartTotal = 0
    for (const cartProductId in cartItems) {
      const cartProductPrice = getProductPrice(cartProductId);
      const quantity = cartItems[cartProductId];
      cartTotal += (cartProductPrice * quantity);
    }
    return cartTotal;
  }


  const getTaxOnCartItems = () => {
    return cartTotal() * 0.02;
  }

  const getCartTotalAfterTax = () => {
    return cartTotal() + getTaxOnCartItems();
  }

  const updateUserCart = async () => {
    try {
      const response = await axiosInstance.post("/api/cart/update", cartItems);
      if (response.data.success) {
        toast.success("cart updated");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  }

  const initializeCartItems = async () => {
    try {
      const response = await axiosInstance.get("/api/user/authme")
      if (response.data?.success) {
        setCartItems(response.data?.user.cartItems);
      }

    } catch (err) {
      toast.error(err.message);
    }
   
  }

  useEffect(() => {
    if (contextUser) {
      initializeCartItems();
    }
  }, [contextUser]);

   useEffect(() => {
    if (contextUser) {
      initializeCartItems();
    }
  }, [myOrders]);

  


  useEffect(() => {
    fetchProducts();
    console.log("dfsa", contextUser)
    if (contextUser) {
      updateUserCart();
    }
  }, [cartItems]);

  const value = { navigate, user, setUser, isSeller, setIsSeller, products, currency, addToCart, cartItems, removeToCart, setShowLoginForm, showLoginForm, searchQuery, setSearchQuery, cartCount, setCartItems, deleteToCart, cartTotal, getTaxOnCartItems , getCartTotalAfterTax, allAddresses, setAllAddresses, myOrders, setMyOrders, contextUser, setContextUser};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
  return useContext(AppContext);
}