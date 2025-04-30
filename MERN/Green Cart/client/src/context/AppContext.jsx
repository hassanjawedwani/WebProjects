import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(false);  // context api for authentication
  const [isSeller, setIsSeller] = useState(null); // context api for checking seller or buyer
  const [products, setProducts] = useState([]);  // context api for showing product
  const [cartItems, setCartItems] = useState({}); // context api for cart items 



  // Fetch all Products
  const fetchProducts =  () => {
    setProducts(dummyProducts);
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





  useEffect(() => {
    fetchProducts();
  }, []);

  const value = { navigate, user, setUser, isSeller, setIsSeller, products, currency, addToCart, cartItems, removeToCart };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
  return useContext(AppContext);
}