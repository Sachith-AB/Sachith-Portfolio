import React from 'react'
import { FaCode, FaGlobe } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'

export default function About({isVisible, setIsVisible}) {
    return (
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
    )
}
