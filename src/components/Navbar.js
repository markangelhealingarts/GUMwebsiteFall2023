import React, { useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/newLogoNoText.png';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef();
  const { currentUser } = useAuth();
  const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Start Moving', path: '/start_moving'},
    {name: 'Tidbits', path: '/tidbits_blog'},
    {name: 'Healing Arts Site', path: 'https://www.markangelhealingarts.com/', external: true},
    {name: 'Tutorial', path: '/tutorial'},
    {name: 'Privacy Policy', path: '/privacy_policy'},
    {name: 'Contact', path: '/contact'}
  ];
  
  // Conditional logic to modify the navItems based on login status
  if (currentUser) {
    navItems.push({ name: currentUser.displayName || 'Profile', path: '/profile' });
  } else {
    navItems.push({ name: 'Login', path: '/login' });
  }
  
  useEffect(() => {
    // Function to handle outside click
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-blue-400 shadow-md">
      <div className="px-4 py-2 flex justify-between items-center w-full">
        <div className="flex justify-between items-center text-2xl">
          <img src={logo} alt="Get up and Move logo" className="h-12" />
          Get Up and Move
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-4 navi_ul">
          {navItems.map(item => {
            if (item.external) {
              return (
                <li key={item.name} className="navi hover:text-white">
                  <a 
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navi_text">
                    {item.name}
                  </a>
                </li>
              );
            }
            return (
              <li key={item.name} className="navi hover:text-white">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => isActive ? 'navi_text font-bold' : 'navi_text'}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>

      </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-0 w-full h-full z-10 lg:hidden bg-gray-900 bg-opacity-50">
            <div ref={mobileMenuRef} className="bg-blue-400 w-1/2 h-full absolute top-0 right-0 overflow-y-auto">
              <ul className="text-left mt-4">
                <li className="navi p-2">
                  <button onClick={() => setIsOpen(false)}>Close Menu</button>
                </li>
                {navItems.map(item => {
                  if (item.external) {
                    return (
                      <li key={item.name} className="navi p-2">
                        <a 
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`navi_text`}>
                          {item.name}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={item.name} className="navi p-2">
                      <NavLink
                        to={item.path}
                        onClick={()=>setIsOpen(false)}
                        className={({ isActive }) => isActive ? 'navi_text font-bold' : 'navi_text'}>
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;