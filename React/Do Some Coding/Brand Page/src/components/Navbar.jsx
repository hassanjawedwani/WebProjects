import { Menu } from 'lucide-react';
import logo from '../assets/brand_logo.png';
import { useState } from 'react';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); 
  return (
    <header className="max-w-7xl h-[72px] flex justify-between items-center mx-auto px-2 md:px-4 relative">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-[76px] h-[42.19px]" />
      
      {/* Desktop Navigation Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          <li><a href="">Menu</a></li>
          <li><a href="">Location</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button className="red-btn hidden md:block">login</button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setShowMenu(!showMenu)}>
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {showMenu && (
        <nav className="absolute top-full left-0 w-full shadow-md bg-white">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li><a href="" onClick={() => setShowMenu(false)}>Menu</a></li>
            <li><a href="" onClick={() => setShowMenu(false)}>Location</a></li>
            <li><a href="" onClick={() => setShowMenu(false)}>About</a></li>
            <li><a href="" onClick={() => setShowMenu(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar