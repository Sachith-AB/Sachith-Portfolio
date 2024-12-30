import React, { useState } from 'react';

function Header() {

  const [id,setId] = useState('hero');
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    setId(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-dark mt-24 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex flex-wrap text-[32px] md:text-[64px] font-sans text-white">Sachith Abywardhana</div>
        <ul className="flex space-x-6">
          <li className=''>
            <button onClick={() => handleScroll('hero')} className='relative flex justify-center text-white font-sans'>
              <p className='relative z-10'>HOME</p>
              {
                id === 'hero' && (
                  <div className='absolute  top-1/2 transform -translate-y-1/2  bg-accent-purple h-1 w-16 z-0'></div>
                )
              }
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('about')} className='relative flex justify-center text-white font-sans'>
              <p className='relative z-10'>ABOUT</p>
              {
                id === 'about' && (
                  <div className='absolute  top-1/2 transform -translate-y-1/2  bg-accent-purple h-1 w-16 z-0'></div>
                )
              }
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('projects')} className='relative flex justify-center text-white font-sans'>
              <p className='relative z-10'>PROJECTS</p>
              {
                id === 'projects' && (
                  <div className='absolute  top-1/2 transform -translate-y-1/2  bg-accent-purple h-1 w-24 z-0'></div>
                )
              }
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('contact')} className='relative flex justify-center text-white font-sans'>
              <p className='relative z-10'>CONTACT</p>
              {
                id === 'contact' && (
                  <div className='absolute  top-1/2 transform -translate-y-1/2  bg-accent-purple h-1 w-24 z-0'></div>
                )
              }
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
