import { useState } from 'react';
import { navLinks } from './constants';

const NavItems = () => {

  return (
  <ul className="nav-ul">
    {navLinks.map((link) => (
      <li key={link.id} className="nav-li">
        <a href={link.url} className="nav-li_a" onClick={() => {}}>
          {link.name}
        </a>
      </li> 
    ))}
  </ul> 
  )
};



const NavBar = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Yong Han
          </a>

          <button 
            onClick={handleToggle}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isToggled ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button> 

          
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
          
        </div>
      </div>
      <div className={`nav-sidebar ${isToggled ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>

    </header>
  )

}

export default NavBar;
