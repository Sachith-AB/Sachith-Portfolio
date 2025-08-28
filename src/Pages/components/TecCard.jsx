import React from 'react'
import { motion } from 'framer-motion'

export default function TecCard({icon}) {
    return (
        <div>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            <motion.div 
                className="flex items-center justify-center border-4 border-gray-700 rounded-[24px] h-28 w-28 overflow-hidden bg-gray-900/50 backdrop-blur-sm relative group"
                whileHover={{ 
                    scale: 1.1,
                    borderColor: "rgb(147, 51, 234)", // purple-600
                    transition: { duration: 0.2 }
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <i className={`${icon} colored text-[70px] relative z-10`}></i>
            </motion.div>
        </div>
    )
}
