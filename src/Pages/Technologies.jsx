import { motion } from 'framer-motion'
import TecCard from './components/TecCard'

const icons = [
    'devicon-react-original',
    'devicon-flutter-plain',
    'devicon-dotnetcore-plain',
    'devicon-spring-plain',
    'devicon-java-plain',
    'devicon-javascript-plain',
]

export default function Technologies() {
    const iconContainer = icons.map((icon, index) => (
        <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
            }}
            animate={{
                y: [0, -10, 0],
                transition: {
                    duration: 2 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                }
            }}
        >
            <TecCard icon={icon}/>
        </motion.div>
    ))

    return (
        <motion.div 
            className='py-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className='text-4xl items-center justify-center flex gap-1'
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='text-white'>Technologies.</h1>
            </motion.div>
            <motion.div 
                className='py-12 w-full justify-center flex flex-wrap items-center gap-4'
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                animate={{
                    x: [0, -5, 5, 0],
                    transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                {iconContainer}
            </motion.div>
        </motion.div>
    )
}