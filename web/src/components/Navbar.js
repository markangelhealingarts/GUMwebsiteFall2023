// src/components/Navbar.js
import React, { useState } from 'react';
import logo from '../assets/img/newLogoNoText.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {name: 'Home', path: 'index.html'},
    {name: 'Start Moving', path: 'pages/activities.html'},
    {name: 'Tidbits', path: 'pages/tidbits.html'},
    {name: 'Healing Arts Site', path: 'https://www.markangelhealingarts.com/', external: true},
    {name: 'Privacy Policy', path: 'pages/privacypolicy.html'},
    {name: 'Contact', path: 'pages/contact.html'},
    {name: 'Login', path: 'pages/login.html'}
  ];
  const currentPath = window.location.pathname;

  return (
    <nav className="bg-blue-400 shadow-md">
      <div className="px-4 py-2 flex justify-between items-center w-full">
        <div className="flex justify-between items-center text-2xl">
          <img src={logo} alt="Your Logo" className="h-12" />
          Get Up and Move
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-4 navi_ul">
          {navItems.map(item => (
            <li key={item.name} className="navi">
              <a 
                href={item.path}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className={`navi_text ${currentPath.includes(item.path) ? 'font-bold' : ''}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>

      </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-0 w-full h-full z-10 lg:hidden bg-gray-900 bg-opacity-50">
            <div className="bg-white w-64 h-full absolute top-0 right-0 overflow-y-auto">
            <div className="text-right">
              <button className="p-4 mr-4" onClick={() => setIsOpen(false)}>Close</button>
            </div>
              <ul>
                {navItems.map(item => (
                  <li key={item.name} className="navi">
                    <a 
                      href={item.path}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      className={`navi_text block mr-4 p-4 text-right ${currentPath.includes(item.path) ? 'font-bold' : ''}`}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;