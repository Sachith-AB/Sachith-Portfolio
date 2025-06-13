import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact({isVisible}) {
    return (
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
    )
}
