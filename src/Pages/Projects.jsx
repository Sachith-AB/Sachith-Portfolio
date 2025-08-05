import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <div>
            <motion.div 
                className='text-4xl items-center justify-center flex gap-1'
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='text-white'>Projects.</h1>
            </motion.div>
        </div>
    )
}
