import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                setIsVisible(prev => ({
                    ...prev,
                    [entry.target.id]: entry.isIntersecting
                }));
                });
            },
        { threshold: 0.1 }
        );

        document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden">
            {/* Navigation */}
            <NavBar 
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            {/* Hero Section */}
            <Hero/>

            {/* About Section */}
            <About
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
            {/* Skills Section */}
            <Skills
                isVisible={isVisible}
            />

            {/* Projects Section */}
            <Projects
                isVisible={isVisible}
            />

            {/* Contact Section */}
            {<Contact
                isVisible={isVisible}
            />}

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Portfolio;