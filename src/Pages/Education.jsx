import { motion } from 'framer-motion'

export default function Education() {
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
        <div className='py-8'>
            {/* Static Heading (no motion) */}
            <div className='text-4xl items-center justify-center flex gap-1'>
                <h1 className='text-white'>Education.</h1>
            </div>

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
                    <h1 className="text-xl text-gray-400">2024 - Present</h1>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 mt-8 flex flex-col gap-2 items-start justify-start md:justify-center"
                    variants={rightVariants}
                >
                    <h1 className="text-2xl text-white">University of Colombo School of Computing</h1>
                    <h1 className="text-lg font-semibold text-white items-start">Bachelor of Science in Computer Science</h1>
                    <h1 className="text-xl text-gray-400">
                        Current GPA: 3.01/4.00
                    </h1>
                </motion.div>
            </motion.div>

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
                    <h1 className="text-xl text-gray-400">2013 - 2021</h1>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 mt-8 flex flex-col gap-2 items-start justify-start md:justify-center"
                    variants={rightVariants}
                >
                    <h1 className="text-2xl text-white">Telijjawila Central College</h1>
                    <h1 className="text-lg font-semibold text-white items-start">G.C.E. Advanced Level</h1>
                    <h1 className="text-xl text-gray-400">
                        Combined Maths: B, Chemistry: A, Physics: A
                    </h1>
                    <h1 className="text-lg font-semibold text-white items-start">G.C.E. Ordinary Level</h1>
                    <h1 className="text-xl text-gray-400">
                        A: 8 , C: 1
                    </h1>
                </motion.div>
            </motion.div>
        </div>
    )
}
