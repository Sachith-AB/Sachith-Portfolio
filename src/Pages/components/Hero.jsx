import user from '../../../assets/userImage.jpg'
import { FaArrowRight, FaDownload } from 'react-icons/fa';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <div className="mb-8">
                    <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 mb-6">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                            <img src={user} className='h-full w-full object-cover' alt="" />
                        </div>
                    </div>
                </div>
            
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    
                </h1>
                <h2 className="text-4xl md:text-5xl mb-8 text-purple-300">
                    Full Stack Developer | AI Enthusiast
                </h2>
                <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Crafting innovative digital solutions with cutting-edge technology and artificial intelligence
                </p>
            
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                    >
                        View My Work <FaArrowRight className="w-5 h-5" />
                    </button>
                    <button className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        Download CV <FaDownload className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/30 rounded-full animate-bounce delay-75"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 border border-pink-500/30 rounded-full animate-bounce delay-150"></div>
            <div className="absolute top-1/2 right-20 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse"></div>
        </section>
    )
}
