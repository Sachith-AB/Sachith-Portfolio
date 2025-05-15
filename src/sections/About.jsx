import React from 'react';
import { motion } from 'framer-motion';

function About() {
    const sectionVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };
    
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-purple-900 via-black to-blue-900 min-h-screen"
        >
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                <motion.div
                    className="flex flex-row w-full md:w-1/2 gap-8 md:gap-24 mt-32 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={sectionVariants}
                >
                    <div className="flex flex-col gap-6 px-4 items-center">
                        <h1 className="text-[70px] text-white border-b-2">02</h1>
                        <div className="h-[100px] md:h-[200px] w-[1px] bg-white"></div>
                        
                        {/* Purple bar with centered "ABOUT" text */}
                        <div className="relative h-[90px] w-[15px] bg-accent-purple">
                            <h2
                                className="absolute inset-0 inset-x-3 flex items-center justify-center text-white text-[20px]"
                                style={{ transform: 'rotate(270deg)' }}
                            >
                                ABOUT
                            </h2>
                        </div>
                    </div>
                    
                    <div className="flex flex-col flex-1 flex-wrap justify-start mt-3">
                        <h1 className="text-[32px] md:text-[70px] text-white">About Me</h1>
                        <div className="text-white pr-4 flex flex-wrap w-full">
                            <p className="text-[20px] md:text-[24px] text-slate-100">
                                I am a passionate Web and Mobile Developer with a 
                                strong foundation in building dynamic and responsive 
                                applications. I thrive on challenges and am constantly 
                                eager to learn and adopt new technologies to stay at the 
                                forefront of industry trends. My commitment to continuous 
                                learning and my ability to adapt quickly make me well-equipped 
                                to tackle any development task and contribute effectively to a 
                                forward-thinking team.
                            </p>
                        </div>
                    </div>
                </motion.div>
                
                {/* Animated About Image */}
                <motion.div
                    className="h-80 w-80 md:w-96 md:h-96 rounded-full overflow-hidden mt-20 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={sectionVariants}
                >
                    <img src="/api/placeholder/800/800" alt="About Me" />
                </motion.div>
            </div>
        </section>
    );
}

export default About;