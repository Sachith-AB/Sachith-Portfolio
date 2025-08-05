import { motion } from 'framer-motion'
import about from '../../assets/About.jpg'

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    }

    const leftVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    }

    const rightVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    }

    return (
        <motion.div 
            className=''
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
        >
            <motion.div 
                className='text-4xl items-center justify-center flex gap-1'
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='text-white'>About</h1>
                <h1 className='text-gray-400'>Me</h1>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-between py-5">
                <motion.div
                    variants={leftVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    className='w-full md:w-1/2 flex justify-center items-center'
                >
                    <div className='w-[400px] h-[400px] overflow-hidden rounded-[32px]'>
                        <img src={about} alt="" className='h-full w-full object-cover'/>
                    </div>
                </motion.div>
                <motion.div
                    variants={rightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    className='w-full md:w-1/2 flex justify-center items-center'
                >
                    <div className='py-5'>
                        <h2 className='text-white text-md md:text-2xl'>I am Sachith Avintha Abeywardhana, an undergraduate at the University of Colombo School of Computing. I am a hardworking and ambitious person seeking for opportunities to improve and maintain my technical skills. I am excited to put my web and mobile development skills and knowledge to work as an effective and valuable team member as a quick learner who easily adapts to new technologies.</h2>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}