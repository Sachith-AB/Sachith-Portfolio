import { useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { MdClose } from "react-icons/md";

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];

export default function NavBar({ isMenuOpen, activeSection,setActiveSection, setIsMenuOpen }) {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Portfolio
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href.slice(1))}
                                className={`hover:text-purple-400 transition-colors duration-300 ${
                                    activeSection === item.href.slice(1) ? 'text-purple-400' : 'text-white'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <MdClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-lg">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                    <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-300 w-full text-left"
                    >
                    {item.name}
                    </button>
                ))}
                </div>
            </div>
            )}
        </nav>
    )
}
