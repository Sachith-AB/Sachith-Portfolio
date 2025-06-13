import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
    return (
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
    )
}
