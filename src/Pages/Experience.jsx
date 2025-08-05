import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'

const tech = [
    'React Js',
    '.Net',
    'PostgreSQL',
    'Firebase'
]

export default function Experience() {
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

    const techContainer = tech.map((t,i) => (
        <div key={i} className='py-3 px-5 rounded-[16px] bg-purple-950 text-white'>
            {t}
        </div>
    ))

    return (
        <div className='py-8'>
            {/* Animated Heading */}
            <motion.div 
                className='text-4xl items-center justify-center flex gap-1'
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='text-white'>Experience.</h1>
            </motion.div>

            {/* Animated Content */}
            <motion.div
                className='flex flex-col md:flex-row w-full mt-8'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
            >
                <motion.div
                    className="w-full md:w-1/2 mt-8 flex flex-col gap-2 items-start justify-start md:items-center md:justify-center"
                    variants={leftVariants}
                >
                    <h1 className="text-4xl text-white">Synapticll</h1>
                    <h1 className="text-xl text-gray-400">2024 - Present</h1>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 mt-8 flex flex-col gap-2 items-start justify-start md:justify-center"
                    variants={rightVariants}
                >
                    <h1 className="text-xl font-semibold text-white items-start">Frontend Developer</h1>
                    <h1 className="text-xl text-gray-400">
                        I worked as a Frontend Developer in an organization focused on community-driven projects 
                        and open-source research, where I developed and integrated the frontend of a web application 
                        that allows veterinarians to register their profiles and hospitals, as well as manage their 
                        appointments efficiently.
                    </h1>
                    <div className='flex gap-3 mt-5'>
                        {techContainer}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
