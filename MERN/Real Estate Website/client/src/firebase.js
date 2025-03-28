
import { initializeApp } from "firebase/app";

  
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wani-estate.firebaseapp.com",
  projectId: "wani-estate",
  storageBucket: "wani-estate.firebasestorage.app",
  messagingSenderId: "219487521460",
  appId: "1:219487521460:web:dc29a96fe0347ec56725e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);