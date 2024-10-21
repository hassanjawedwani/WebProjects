import logo from '../assets/logo.png';
import { navItems } from '../constants';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 flex justify-between px-4 text-sm items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-10 h-10 mr-1" />
        <span className="text-xl tracking-tight">VirtualR</span>
      </div>
      <ul className="hidden lg:flex space-x-12">
        {
          navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
          ))
        }
      </ul>
      <div className="hidden lg:flex space-x-12 items-center">
        <a href="#" className="border rounded-md py-2 px-3">Sign In</a>
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">Create an Account</a>
      </div>

    </nav>
  )
}

export default Navbar