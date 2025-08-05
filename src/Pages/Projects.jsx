import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'

// Sample project data - replace with your actual projects
const projects = [
    {
        id: 1,
        image: '/api/placeholder/400/300', // Replace with your project image path
        name: 'E-Commerce Web App',
        description: 'A full-stack e-commerce application with user authentication, product management, shopping cart functionality, and payment integration.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
        githubLink: 'https://github.com/yourusername/ecommerce-app',
        demoLink: 'https://your-ecommerce-demo.com',
        videoDemo: null
    },
    {
        id: 2,
        image: '/api/placeholder/400/300', // Replace with your project image path
        name: 'Task Management App',
        description: 'A productivity app for managing tasks and projects with real-time collaboration features and intuitive drag-and-drop interface.',
        techStack: ['React', 'Firebase', 'Material-UI', 'Redux'],
        githubLink: 'https://github.com/yourusername/task-manager',
        demoLink: null,
        videoDemo: 'https://youtube.com/watch?v=your-demo-video'
    },
    {
        id: 3,
        image: '/api/placeholder/400/300', // Replace with your project image path
        name: 'Weather Dashboard',
        description: 'A responsive weather application that provides current weather conditions, forecasts, and weather maps using external APIs.',
        techStack: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
        githubLink: 'https://github.com/yourusername/weather-dashboard',
        demoLink: 'https://your-weather-app.com',
        videoDemo: null
    }
];

export default function Projects() {
    return (
        <motion.div 
            className='py-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className='text-4xl items-center justify-center flex gap-1'
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='text-white'>Projects.</h1>
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <ProjectCard 
                            image={project.image}
                            name={project.name}
                            description={project.description}
                            techStack={project.techStack}
                            githubLink={project.githubLink}
                            demoLink={project.demoLink}
                            videoDemo={project.videoDemo}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
