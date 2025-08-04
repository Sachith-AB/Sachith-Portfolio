import user from '../../assets/userImage.jpg'
export default function Home() {
    return (
        <div className="flex flex-col gap-6 md:flex-row justify-between w-full">
            <div className="flex flex-col gap-4 justify-start md:justify-center items-center w-full md:w-1/2">
                <h1 className='text-white text-6xl font-[200]'>Sachith Abeywardhana</h1>
                <div className="w-full items-start font-light text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    <h2>Computer Science Undergraduate</h2>
                    <h2>Web Dev | Mobile Dev</h2>
                </div>

                <div>
                    <div className='w-3/4'>
                        <h2 className='text-white'>
                            I am a passionate Web and Mobile Developer with a strong foundation in building dynamic and responsive applications. I thrive on challenges and am constantly eager to learn and adopt new technologies to stay at the forefront of industry trends. My commitment to continuous learning and my ability to adapt quickly make me well-equipped to tackle any development task and contribute effectively to a forward-thinking team.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
                <div className='h-96 w-96 rounded-full overflow-hidden '>
                    <img src={user} alt="" className='h-full w-full object-cover' />
                </div>
            </div>
        </div>
    )
}
