import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">Sachith</div>
                <ul className="flex space-x-4">
                <li><Link to="Sachith-Portfolio/" className="hover:text-gray-200">Home</Link></li>
                <li><Link to="Sachith-Portfolio/about" className="hover:text-gray-200">About</Link></li>
                <li><Link to="Sachith-Portfolio/projects" className="hover:text-gray-200">Projects</Link></li>
                <li><Link to="Sachith-Portfolio/contact" className="hover:text-gray-200">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
