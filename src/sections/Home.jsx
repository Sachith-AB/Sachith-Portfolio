import { motion } from 'framer-motion';
import user from '../../assets/userImage.jpg';

function Home() {
    const sectionVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };
    
    return (
        <div
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900"
        >
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                <motion.section
                    className="flex flex-row w-full md:w-1/2 gap-8 md:gap-24 mt-32 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={sectionVariants}
                >
                    <div className="flex flex-col gap-6 px-4 items-center">
                        <h1 className="text-[70px] text-white border-b-2">01</h1>
                        <div className="h-[100px] md:h-[200px] w-[1px] bg-white"></div>
                        
                        {/* Purple bar with centered "HOME" text */}
                        <div className="relative h-[90px] w-[15px] bg-accent-purple">
                            <h2
                                className="absolute inset-0 inset-x-3 flex items-center justify-center text-white text-[20px]"
                                style={{ transform: 'rotate(270deg)' }}
                            >
                                HOME
                            </h2>
                        </div>
                    </div>
                    
                    <div className="flex flex-col flex-wrap justify-start mt-3">
                        <h1 className="text-[32px] md:text-[70px] text-white">Hello,</h1>
                        <h1 className="text-[32px] md:text-[70px] text-white">
                            I'm Sachith Avintha Abeywardhana
                        </h1>
                        <h2 className="text-[20px] md:text-[24px] text-slate-100">
                            Computer Science Undergraduate
                        </h2>
                        <h2 className="text-[20px] md:text-[24px] text-slate-100">
                            Web Dev | Mobile Dev | AI Enthusiast
                        </h2>
                    </div>
                </motion.section>
                
                {/* Animated Profile Image */}
                <motion.div
                    className="h-80 w-80 md:w-96 md:h-96 rounded-full overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={sectionVariants}
                >
                    <img src={user} alt="User Profile" />
                </motion.div>
            </div>
        </div>
    );
}

export default Home;