import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function SocialMediaContainer({show}) {
    return (
        <div className='flex gap-4'>
            <a
                href="https://www.linkedin.com/in/sachith-abeywardhana-84b75b247/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-300 block"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/Sachith-AB"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-2xl hover:text-gray-300 ${show ? 'block': 'hidden lg:block'}`}
            >
                <FaGithub />
            </a>
            <a
                href="https://www.youtube.com/@SachithProjectLab"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-2xl hover:text-gray-300 ${show ? 'block': 'hidden lg:block'}`}
            >
                <FaYoutube />
            </a>
            <a
                href="https://www.instagram.com/sachithavintha/?next=%2F&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-2xl hover:text-gray-300 ${show ? 'block': 'hidden lg:block'}`}
            >
                <FaInstagram />
            </a>
            <a
                href="https://web.facebook.com/sachith.abeywardhana.3"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-2xl hover:text-gray-300 ${show ? 'block': 'hidden lg:block'}`}
            >
                <FaFacebook />
            </a>
        </div>
    )
}
