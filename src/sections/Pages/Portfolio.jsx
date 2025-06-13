import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaServer, FaDatabase, FaGlobe, FaStar, FaArrowRight, FaDownload } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FiExternalLink, FiMenu, FiX } from 'react-icons/fi';
import { GiBrain } from 'react-icons/gi';
import user from '../../../assets/userImage.jpg'

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

    const skills = [
        { name: 'React/Next.js', level: 95, icon: <FaCode className="w-5 h-5" /> },
        { name: 'Node.js/Express', level: 90, icon: <FaServer className="w-5 h-5" /> },
        { name: 'Python/Django', level: 88, icon: <FaCode className="w-5 h-5" /> },
        { name: 'AI/ML', level: 85, icon: <GiBrain className="w-5 h-5" /> },
        { name: 'MongoDB/PostgreSQL', level: 87, icon: <FaDatabase className="w-5 h-5" /> },
        { name: 'AWS/Cloud', level: 82, icon: <FaGlobe className="w-5 h-5" /> }
    ];

    const projects = [
        {
            title: 'AI-Powered Task Manager',
            description: 'Full-stack application with AI-driven task prioritization and smart scheduling using GPT-4 API.',
            tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
            github: '#',
            live: '#',
            featured: true
        },
        {
            title: 'E-Commerce Platform',
            description: 'Complete e-commerce solution with payment integration, inventory management, and analytics dashboard.',
            tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
            github: '#',
            live: '#',
            featured: true
        },
        {
            title: 'Real-time Chat Application',
            description: 'WebSocket-based chat app with file sharing, emoji reactions, and AI-powered message moderation.',
            tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
            github: '#',
            live: '#',
            featured: false
        },
        {
            title: 'ML Model Deployment Platform',
            description: 'Cloud platform for deploying and managing machine learning models with auto-scaling capabilities.',
            tech: ['Python', 'Docker', 'Kubernetes', 'FastAPI'],
            github: '#',
            live: '#',
            featured: true
        }
];

    const navigation = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden">
            {/* Navigation */}
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
                    {isMenuOpen ? <X className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
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

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 mb-6">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                <img src={user} className='h-full w-full object-cover' alt="" />
                            </div>
                        </div>
                    </div>
                
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                        Full Stack Developer
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-8 text-purple-300">
                        & AI Enthusiast
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Crafting innovative digital solutions with cutting-edge technology and artificial intelligence
                    </p>
                
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                        onClick={() => scrollToSection('projects')}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                        >
                        View My Work <FaArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        Download CV <FaDownload className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/30 rounded-full animate-bounce delay-75"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 border border-pink-500/30 rounded-full animate-bounce delay-150"></div>
                <div className="absolute top-1/2 right-20 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse"></div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 relative">
                <div className="max-w-6xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    About Me
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                        I'm a passionate full-stack developer with a deep fascination for artificial intelligence and its potential to revolutionize how we interact with technology. With expertise spanning both frontend and backend development, I create comprehensive digital solutions that are both powerful and user-friendly.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                        My journey in AI has led me to integrate machine learning capabilities into web applications, creating intelligent systems that adapt and learn. I believe in the power of clean code, innovative design, and cutting-edge technology to solve real-world problems.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                        <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30">
                            <FaCode className="w-5 h-5 text-purple-400" />
                            <span>Full Stack Development</span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30">
                            <GiBrain className="w-5 h-5 text-purple-400" />
                            <span>AI Integration</span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30">
                            <FaGlobe className="w-5 h-5 text-purple-400" />
                            <span>Cloud Architecture</span>
                        </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-300">Available for new projects</span>
                            </div>
                            <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                            <span className="text-gray-300">5+ years experience</span>
                            </div>
                            <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                            <span className="text-gray-300">50+ projects completed</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 relative">
                <div className="max-w-6xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Skills & Expertise
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="text-purple-400">
                            {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                        </div>
                        <div className="relative">
                            <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                                style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                            ></div>
                            </div>
                            <span className="text-sm text-purple-400 mt-2 block">{skill.level}%</span>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Featured Projects
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.filter(p => p.featured).map((project, index) => (
                        <div key={project.title} className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                        {project.featured && (
                            <div className="flex items-center gap-2 mb-4">
                            <FaStar className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-yellow-400 text-sm font-semibold">Featured Project</span>
                            </div>
                        )}
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech) => (
                            <span key={tech} className="bg-purple-800/40 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/30">
                                {tech}
                            </span>
                            ))}
                        </div>
                        
                        <div className="flex gap-4">
                            <a
                            href={project.github}
                            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                            >
                            <FaGithub className="w-5 h-5" />
                            <span>Code</span>
                            </a>
                            <a
                            href={project.live}
                            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                            >
                            <FiExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                            </a>
                        </div>
                        </div>
                    ))}
                    </div>
                    
                    <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                        View All Projects
                    </button>
                    </div>
                </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 relative">
                <div className="max-w-4xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get In Touch
                    </h2>
                    
                    <div className="text-center mb-12">
                    <p className="text-xl text-gray-300 mb-8">
                        Ready to bring your next project to life? Let's collaborate and create something amazing together!
                    </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <a
                        href="mailto:your.email@example.com"
                        className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 text-center group"
                    >
                        <MdEmail className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-400">your.email@example.com</p>
                    </a>
                    
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 text-center group"
                    >
                        <FaLinkedin className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                        <p className="text-gray-400">Connect with me</p>
                    </a>
                    
                    <a
                        href="https://github.com/yourusername"
                        className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 text-center group"
                    >
                        <FaGithub className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                        <p className="text-gray-400">View my code</p>
                    </a>
                    </div>
                    
                    <div className="text-center">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                        Let's Start a Conversation
                    </button>
                    </div>
                </div>
                </div>
        </section>

            {/* Footer */}
            <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/20 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-gray-400 mb-4">
                    © 2025 Full Stack Developer Portfolio. Built with React & Tailwind CSS.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    <MdEmail className="w-6 h-6" />
                    </a>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;