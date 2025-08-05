import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

export default function ProjectCard({ 
    image, 
    name, 
    description, 
    techStack = [], 
    githubLink, 
    demoLink,
    videoDemo 
}) {
    return (
        <motion.div 
            className='bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 max-w-md'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
        >
            {/* Project Image */}
            <div className='relative overflow-hidden h-48'>
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300'></div>
            </div>

            {/* Project Content */}
            <div className='p-6'>
                {/* Project Name */}
                <h3 className='text-xl font-bold text-white mb-3'>{name}</h3>
                
                {/* Project Description */}
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>{description}</p>
                
                {/* Tech Stack */}
                <div className='mb-4'>
                    <h4 className='text-purple-400 text-sm font-semibold mb-2'>Tech Stack:</h4>
                    <div className='flex flex-wrap gap-2'>
                        {techStack.map((tech, index) => (
                            <span 
                                key={index}
                                className='px-3 py-1 bg-purple-900 text-purple-200 text-xs rounded-full border border-purple-700'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Links */}
                <div className='flex gap-3 mt-4'>
                    {/* GitHub Link */}
                    {githubLink && (
                        <motion.a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub className='text-sm' />
                            <span className='text-sm'>Code</span>
                        </motion.a>
                    )}

                    {/* Demo Link */}
                    {demoLink && (
                        <motion.a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaExternalLinkAlt className='text-sm' />
                            <span className='text-sm'>Live Demo</span>
                        </motion.a>
                    )}

                    {/* Video Demo Link */}
                    {videoDemo && (
                        <motion.a
                            href={videoDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlay className='text-sm' />
                            <span className='text-sm'>Video</span>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
