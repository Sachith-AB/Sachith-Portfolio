
import { FaGithub, FaStar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

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

export default function Projects({isVisible}) {
    return (
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
    )
}
