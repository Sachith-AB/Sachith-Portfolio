import React from 'react';

function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Sachith</div>
        <ul className="flex space-x-6">
          <li>
            <button onClick={() => handleScroll('hero')} className="text-gray-600 hover:text-blue-600">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('about')} className="text-gray-600 hover:text-blue-600">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('projects')} className="text-gray-600 hover:text-blue-600">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('contact')} className="text-gray-600 hover:text-blue-600">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
