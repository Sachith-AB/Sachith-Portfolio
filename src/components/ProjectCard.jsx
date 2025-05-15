import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, tags, demoLink, codeLink }) {
    return (
        <motion.div
        className="bg-gradient-to-br from-purple-800 to-blue-900 rounded-lg overflow-hidden shadow-xl"
        whileHover={{ 
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        >
        <div className="relative overflow-hidden h-48 md:h-64">
            <img 
            src={image || "/api/placeholder/800/600"} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4">
                {demoLink && (
                <a 
                    href={demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                    Live Demo
                </a>
                )}
                {codeLink && (
                <a 
                    href={codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                    View Code
                </a>
                )}
            </div>
            </div>
        </div>
        
        <div className="p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            
            {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                <span 
                    key={index} 
                    className="bg-purple-900 bg-opacity-50 text-purple-200 text-xs px-3 py-1 rounded-full"
                >
                    {tag}
                </span>
                ))}
            </div>
            )}
        </div>
        </motion.div>
    );
}

export default ProjectCard;