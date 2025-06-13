import React from 'react'
import { FaCode, FaDatabase, FaGlobe, FaServer } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';


const skills = [
    { name: 'React/Next.js', level: 95, icon: <FaCode className="w-5 h-5" /> },
    { name: 'Node.js/Express', level: 90, icon: <FaServer className="w-5 h-5" /> },
    { name: 'Python/Django', level: 88, icon: <FaCode className="w-5 h-5" /> },
    { name: 'AI/ML', level: 85, icon: <GiBrain className="w-5 h-5" /> },
    { name: 'MongoDB/PostgreSQL', level: 87, icon: <FaDatabase className="w-5 h-5" /> },
    { name: 'AWS/Cloud', level: 82, icon: <FaGlobe className="w-5 h-5" /> }
];

export default function Skills({isVisible}) {
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
            <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Skills & Expertise
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
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
    )
}
