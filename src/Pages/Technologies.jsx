import { motion } from 'framer-motion'
import TecCard from './components/TecCard'
import { div } from 'framer-motion/client'

const icons = [
    'devicon-react-original',
    'devicon-flutter-plain',
    'devicon-dotnetcore-plain',
    'devicon-spring-plain',
    'devicon-java-plain',
    'devicon-python-plain',
]

export default function Technologies() {
    const iconContainer = icons.map((icon, index) => (
        <motion.div 
            key={index}
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
        <div className='py-20'>
            <div className='text-4xl items-center justify-center flex gap-1'>
                <h1 className='text-white'>Technologies.</h1>
            </div>
            <motion.div 
                className='py-12 w-full justify-center flex flex-wrap items-center gap-4'
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
        </div>
    )
}