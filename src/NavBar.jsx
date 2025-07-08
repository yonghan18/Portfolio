import { useState } from 'react';
import { navLinks } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const NavItems = ({ onClick = () => {} }) => {
  const handleClick = (e, url) => {
    e.preventDefault();
    onClick(); // Close mobile menu
    
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.open(url, '_blank');
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.ul 
      className="nav-ul"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navLinks.map((link) => (
        <motion.li 
          key={link.id} 
          className="nav-li"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.a 
            href={link.url} 
            className="nav-li_a" 
            onClick={(e) => handleClick(e, link.url)}
            whileHover={{ color: "#06b6d4" }}
            transition={{ duration: 0.2 }}
          >
            {link.name}
          </motion.a>
        </motion.li> 
      ))}
    </motion.ul> 
  );
};

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const closeMenu = () => {
    setIsToggled(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      maxHeight: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      maxHeight: "100vh",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black-200/95 backdrop-blur-md border-b border-white-700/10"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 mx-auto c-space">
          <motion.a 
            href="#home" 
            className="text-white-700 font-bold text-xl transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            whileHover={{ 
              color: "#06b6d4",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Yong Han
          </motion.a>

          <motion.button 
            onClick={handleToggle}
            className="text-white-700 focus:outline-none sm:hidden flex p-2 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isToggled}
            whileHover={{ 
              color: "#06b6d4",
              scale: 1.1
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img 
              src={isToggled ? "assets/close.svg" : "assets/menu.svg"} 
              alt="toggle" 
              className="w-6 h-6"
              initial={false}
              animate={{ rotate: isToggled ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button> 

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      
      <AnimatePresence>
        {isToggled && (
          <motion.div 
            className="nav-sidebar overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.nav 
              className="p-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <NavItems onClick={closeMenu} />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
