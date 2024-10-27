import logo from '../assets/brand_logo.png';

const Navbar = () => {
  return (
    <header className="max-w-7xl h-[72px] flex justify-between items-center mx-auto">
      <img src={logo} alt="logo" className="w-[76px] h-[42.19px]"/>
      <nav>
        <ul className="flex gap-6">
          <li><a href="">Menu</a></li>
          <li><a href="">Location</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button className="red-btn">login</button>
    </header>
  )
}

export default Navbar