import { motion } from 'framer-motion'

const experiences = [
    {
        company: 'Simsyn Pvt Ltd',
        position: 'Software Engineer Intern',
        period: 'Nov 20245- Present',
        description: 'Currently working as a Software Engineer Intern contributing to the development of a comprehensive CRM management system. Gaining hands-on experience in modern full-stack development with microservices architecture while collaborating with cross-functional teams to deliver scalable enterprise solutions.',
        highlights: [
            'Developing and maintaining web applications using React with TypeScript and Redux Saga for state management.',
            'Working with microservices architecture on the backend to ensure modularity and scalability.',
            'Implementing efficient data management solutions using PostgreSQL database and Redis for caching.',
            'Participating in code reviews, testing, and debugging to ensure high-quality software delivery.',
            'Collaborating with senior engineers to learn advanced development techniques and software architecture patterns.'
        ],
        tech: ['React', 'TypeScript', 'Redux Saga', 'Node.js', 'Microservices', 'PostgreSQL', 'Redis', 'Prisma ORM', 'Git']
    },
    {
        company: 'mybawbaw',
        position: 'Frontend Developer',
        period: 'Dec 2024 - Jun 2025',
        description: 'Worked alongside senior university developers on a web application that allows veterinarians to register their profiles and hospitals while efficiently managing appointments. Gained valuable hands-on experience in full-stack development through mentorship and collaborative problem-solving.',
        highlights: [
            'Developed and maintained frontend components to ensure a smooth and scalable user experience.',
            'Connected .NET backend services with React-based frontend applications to ensure seamless data flow and enhanced user experience.',
            'Learned industry best practices and advanced development techniques through close collaboration with experienced team members.'
        ],
        tech: ['React', 'JavaScript', '.Net', 'PostgreSQL', 'Firebase']
    }
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

            {/* Animated Content - Experience List */}
            <div className='mt-8 flex flex-col gap-8'>
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className='flex flex-col md:flex-row w-full gap-8'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                    >
                        <motion.div
                            className="w-full md:w-1/3 flex flex-col gap-2 items-start md:items-end justify-start"
                            variants={leftVariants}
                        >
                            <h1 className="text-2xl md:text-3xl text-white font-semibold">{exp.company}</h1>
                            <h1 className="text-lg text-gray-400">{exp.period}</h1>
                        </motion.div>

                        <motion.div
                            className="w-full md:w-2/3 flex flex-col gap-3 items-start justify-start"
                            variants={rightVariants}
                        >
                            <h1 className="text-xl font-semibold text-white">{exp.position}</h1>
                            <p className="text-gray-300 text-base leading-relaxed">
                                {exp.description}
                            </p>
                            <ul className="text-gray-400 text-base space-y-2 ml-4">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="list-disc">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-wrap gap-3 mt-4'>
                                {exp.tech.map((t, i) => (
                                    <div key={i} className='py-2 px-4 rounded-[12px] bg-purple-950 text-white text-sm'>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
