import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Header() {
    return (
        <div className='flex justify-between py-8'>
            <h1 className='text-white text-[20px]'>Sachith Abeywardhana</h1>
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
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-300 hidden lg:block"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.youtube.com/@yourchannel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-300 hidden lg:block"
                >
                    <FaYoutube />
                </a>
                <a
                    href="https://www.instagram.com/your-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-300 hidden lg:block"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.facebook.com/your-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-300 hidden lg:block"
                >
                    <FaFacebook />
                </a>
            </div>
        </div>
    )
}
