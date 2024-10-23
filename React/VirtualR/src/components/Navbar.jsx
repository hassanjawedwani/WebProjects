import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80">
      <div className="flex justify-between px-4 text-sm items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10 mr-1" />
          <span className="text-xl tracking-tight">VirtualR</span>
        </div>
        <ul className="hidden lg:flex space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex space-x-12 items-center">
          <a href="#" className="border rounded-md py-2 px-3">
            Sign In
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
          >
            Create an Account
          </a>
        </div>
        <div className="lg:hidden flex">
          <button onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="z-20 bg-neutral-900 right-0 flex flex-col items-center" >
          <ul className=" space-y-4 p-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4 items-center pb-4">
            <a href="#" className="border rounded-md py-2 px-3">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
            >
              Create an Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
