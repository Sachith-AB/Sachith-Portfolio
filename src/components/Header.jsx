import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MdMenu } from 'react-icons/md';

function Header() {
  const [id, setId] = useState('home');
  const [visible, setVisible] = useState(false);
  const sectionRefs = useRef({});

  const menuItem = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const changeVisibility = () => {
    setVisible((prev) => !prev);
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    setId(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Uses the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setId(entry.target.id); // Update the current section id
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Attach observer to each section
    menuItem.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
        sectionRefs.current[item.id] = section;
      }
    });

    return () => {
      // Clean up observer on component unmount
      Object.values(sectionRefs.current).forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [menuItem]);

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
    <header className="fixed top-0 w-full bg-dark bg-opacity-90 z-50">
      <nav className="relative container mx-auto px-4 py-3 flex justify-between items-center">
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
          <div className="absolute top-0 right-0 w-full h-screen bg-dark bg-opacity-90 flex justify-center items-center z-40">
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
