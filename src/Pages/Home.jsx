import user from '../../assets/my.jpg'
import { motion } from 'framer-motion'
import Sachith_Abeywardhana from '../../assets/Sachith_Abeywardhana.pdf'

export default function Home() {
    return (
        <div className="flex flex-col gap-6 md:flex-row justify-between w-full">
            <div className="flex flex-col gap-4 md:justify-center items-center w-full md:w-1/2">
                <motion.h1 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='text-white text-4xl md:text-6xl font-[200]'
                >
                    Sachith Abeywardhana
                </motion.h1>
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full items-start font-light text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
                >
                    <h2>Computer Science Undergraduate</h2>
                    <h2>Web Dev | Mobile Dev</h2>
                </motion.div>
                
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full flex justify-center"
                >
                    <div className='w-full'>
                        <div className='w-full sm:w-3/4'>
                            <h2 className='text-white md:text-left'>
                                I am a passionate Web and Mobile Developer with a strong foundation in building dynamic and responsive applications. I thrive on challenges and am constantly eager to learn and adopt new technologies to stay at the forefront of industry trends. My commitment to continuous learning and my ability to adapt quickly make me well-equipped to tackle any development task and contribute effectively to a forward-thinking team.
                            </h2>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center w-full md:w-1/2 flex-col gap-6"
            >
                <div className='h-96 w-96 rounded-full overflow-hidden'>
                    <img src={user} alt="" className='h-full w-full object-cover' />
                </div>
                <motion.a
                    href={Sachith_Abeywardhana}
                    download
                    className="px-6 py-3 bg-transparent text-white border-2 hover:bg-purple-950 border-purple-950 rounded-full transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <p className='font-semibold'>Download CV</p>
                </motion.a>
            </motion.div>
        </div>
    )
}