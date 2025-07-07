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
  };

  const closeMenu = () => {
    setIsToggled(false);
  };

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
            <motion.img 
              src={isToggled ? "assets/close.svg" : "assets/menu.svg"} 
              alt="toggle" 
              className="w-6 h-6"
            />
          
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
          
        </div>
      </div>
        {isToggled && (
          <motion.div 
            className="nav-sidebar overflow-hidden"
          >
            <motion.nav 
            >
              <NavItems onClick={closeMenu} />
            </motion.nav>
          </motion.div>
        )}

export default NavBar;
