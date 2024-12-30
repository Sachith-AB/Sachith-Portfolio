import React, { useMemo, useState } from 'react';
import { MdMenu } from 'react-icons/md';

function Header() {
  const [id, setId] = useState('home');
  const [visible, setVisible] = useState(false);

  const menuItem = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const changeVisibility = () => {
    setVisible((prev) => !prev);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    setId(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menu = useMemo(() => {
    return menuItem.map((item) => (
      <li className="" key={item.id}>
        <button
          onClick={() => handleScroll(item.id)}
          className="relative flex justify-center text-white font-sans"
        >
          <p className="relative z-10">{item.name}</p>
          {id === item.id && (
            <div className="absolute top-1/2 transform -translate-y-1/2 bg-accent-purple h-1 w-16 z-0"></div>
          )}
        </button>
      </li>
    ));
  }, [id]);

  return (
    <header className="fixed top-0 w-full bg-dark bg-opacity-90 mt-16 z-50">
      <nav className="relative container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex flex-wrap text-[32px] md:text-[64px] font-sans text-white">
          Sachith Abywardhana
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">{menu}</ul>
        
        {/* Hamburger Menu Icon for Mobile */}
        <MdMenu
          className="flex md:hidden text-white cursor-pointer"
          size={32}
          onClick={changeVisibility}
        />
        
        {/* Mobile Menu */}
        {visible && (
          <div className="absolute top-0 right-3 w-full h-full bg-dark bg-opacity-90 flex justify-end mt-28 items-center z-40">
            <ul className="flex flex-col items-center space-y-6 text-white">
              {menuItem.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      handleScroll(item.id);
                      setVisible(false); // Close the menu after clicking an item
                    }}
                    className="relative flex justify-center text-white font-sans"
                  >
                    <p className="relative z-10">{item.name}</p>
                    {id === item.id && (
                      <div className="absolute top-1/2 transform -translate-y-1/2 bg-accent-purple h-1 w-16 z-0"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
