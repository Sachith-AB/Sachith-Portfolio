import { motion } from 'framer-motion'
import SocialMediaContainer from "./components/SocialMediaContainer";

export default function Contact() {
    return (
        <motion.div 
            className="py-8 flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className='text-4xl items-center justify-center flex gap-1'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h1 className='text-white'>Get in</h1>
                <h1 className='text-gray-400'>Touch</h1>
            </motion.div>
            
            <motion.div 
                className="mt-12 flex flex-col gap-4 items-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.h2 
                    className='text-gray-300 text-lg'
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Weliwa Junction, Morawala
                </motion.h2>
                <motion.h2 
                    className='text-gray-300 text-lg'
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    +94 77 284 3737
                </motion.h2>
                <motion.h2 
                    className='text-gray-300 text-lg'
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    sachithavintha35@gmail.com
                </motion.h2>
            </motion.div>
            
            {/* Debug: Add a visible border and background to see if container is there */}
            <motion.div 
                className="mt-5 text-white flex items-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <p className="text-black mb-2">Social Media Container should appear below:</p>
                <SocialMediaContainer show={true} />
                <p className="text-black mt-2">Social Media Container should appear above</p>
            </motion.div>
        </motion.div>
    )
}