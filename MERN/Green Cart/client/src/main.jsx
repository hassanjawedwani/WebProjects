import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </AppContextProvider>
  </BrowserRouter>
);
