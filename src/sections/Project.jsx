import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    // Sample projects data with more details
    const projects = [
        { 
            id: 1, 
            title: 'Food Delivery App', 
            description: 'A comprehensive food delivery application with real-time order tracking, payment integration, and restaurant management system.',
            image: '/api/placeholder/800/600', // Placeholder food image
            tags: ['React Native', 'Firebase', 'Stripe API', 'Google Maps API'],
            demoLink: 'https://foodapp-demo.example.com',
            codeLink: 'https://github.com/yourusername/food-delivery-app'
        },
        { 
            id: 2, 
            title: 'E-Learning Platform', 
            description: 'An interactive learning management system featuring video courses, quizzes, progress tracking, and certification.',
            image: '/api/placeholder/800/600', // Placeholder education image
            tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
            demoLink: 'https://elearning-demo.example.com',
            codeLink: 'https://github.com/yourusername/e-learning-platform'
        },
        { 
            id: 3, 
            title: 'AI Content Generator', 
            description: 'A machine learning powered tool that generates custom content for blogs, social media, and marketing materials.',
            image: '/api/placeholder/800/600', // Placeholder AI image
            tags: ['Python', 'TensorFlow', 'React', 'Flask'],
            demoLink: 'https://ai-writer-demo.example.com',
            codeLink: 'https://github.com/yourusername/ai-content-generator'
        },
        { 
            id: 4, 
            title: 'Fitness Tracker App', 
            description: 'A comprehensive fitness application that tracks workouts, nutrition, and provides personalized fitness recommendations.',
            image: '/api/placeholder/800/600', // Placeholder fitness image
            tags: ['React Native', 'GraphQL', 'AWS', 'HealthKit'],
            demoLink: 'https://fitness-demo.example.com',
            codeLink: 'https://github.com/yourusername/fitness-tracker'
        },
    ];

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
            } 
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8 
            } 
        }
    };

    return (
        <section
            className="min-h-screen py-20 bg-gradient-to-br from-purple-900 via-black to-blue-900"
            id='projects'
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-5 items-start">
                    {/* Left side with number and vertical elements */}
                    <motion.div 
                        className="flex flex-col gap-6 px-4 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[70px] text-white border-b-2">02</h1>
                        <div className="h-[100px] md:h-[200px] w-[1px] bg-white"></div>
                        
                        {/* Purple bar with centered "PROJECTS" text */}
                        <div className="relative h-[100px] w-[15px] bg-accent-purple">
                            <h2
                                className="absolute inset-0 inset-x-3 flex items-center justify-center text-white text-[20px]"
                                style={{ transform: 'rotate(270deg)' }}
                            >
                                PROJECTS
                            </h2>
                        </div>
                    </motion.div>
                    
                    {/* Right side with project content */}
                    <motion.div 
                        className="flex-1 px-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={sectionVariants}
                    >
                        <motion.div 
                            variants={contentVariants}
                            className="mb-12"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-gray-300 max-w-2xl mb-8">
                                Here are some of my recent work that showcases my skills and expertise in various technologies and domains.
                            </p>
                        </motion.div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {projects.map((project) => (
                                <ProjectCard 
                                    key={project.id} 
                                    title={project.title} 
                                    description={project.description} 
                                    image={project.image}
                                    tags={project.tags}
                                    demoLink={project.demoLink}
                                    codeLink={project.codeLink}
                                />
                            ))}
                        </div>
                        
                        <motion.div 
                            className="flex justify-center mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <a 
                                href="https://github.com/yourusername" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                View All Projects
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Projects;