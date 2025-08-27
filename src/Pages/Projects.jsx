import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'
import job from '../../assets/Jobpilot.png';
import music from '../../assets/music.jpg';
import travel from '../../assets/travel.png';
import food from '../../assets/food.png';

const projects = [
    {
        id: 1,
        image: travel,
        name: 'Travel.lk - Travel Planning App',
        description: 'Developed a web application with AI-powered trip creation enabling users to plan trips, find and request guides, rent vehicles with/without drivers, and book hotels. Built as an all-in-one travel solution with integrated booking and communication features. (3rd year group project)',
        techStack: ['React Js', 'SpringBoot (Java)', 'GroqAI', 'Python', 'PostgreSQL', 'Firebase'],
        githubLink: 'https://github.com/Sameemadhu16/travel_frontend',
        demoLink: null,
        videoDemo: null
    },
    {
        id: 2,
        image: music,
        name: 'Musicia - Music Event Management & Ticket Selling Platform',
        description: 'A comprehensive event management system allowing music event organizers to create, customize, and publish events with venue selection, date/time scheduling, multiple ticket types, restrictions, performer bookings, stage and sound equipment coordination, and integrated ticket sales platform for attendees. (2nd year group project)',
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MVC'],
        githubLink: 'https://github.com/Sachith-AB/Music-Event-Management-System',
        demoLink: null,
        videoDemo: null
    },
    {
        id: 3,
        image: job,
        name: 'JobListings - Job Finding and Posting Platform',
        description: 'A job marketplace platform with employer job postings (part-time/full-time/contract) and job seeker tools including job search, saved listings, and chat with poster. Implemented secure authentication, role-based access, and responsive design for cross-device accessibility.',
        techStack: ['React', 'Express', 'NodeJs', 'MongoDB'],
        githubLink: null,
        demoLink: null,
        videoDemo: 'https://youtu.be/1r-b91Brt4A?si=sXCsTd7ulGTCU0hh'
    },
    {
        id: 4,
        image: food,
        name: 'Food Ordering System',
        description: 'Enhanced a complete food ordering platform with restaurant admin panel for menu management, order tracking, and customer app for browsing, ordering, and real-time order tracking. (Self-learning project)',
        techStack: ['Flutter', 'Firebase'],
        githubLink: 'https://github.com/Sachith-AB/Food-Store',
        demoLink: null,
        videoDemo: null
    }
];


export default function Projects() {
    return (
        <motion.div 
            className='py-8'
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
                <h1 className='text-white'>Projects.</h1>
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <ProjectCard 
                            image={project.image}
                            name={project.name}
                            description={project.description}
                            techStack={project.techStack}
                            githubLink={project.githubLink}
                            demoLink={project.demoLink}
                            videoDemo={project.videoDemo}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
