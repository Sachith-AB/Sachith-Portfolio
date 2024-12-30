import React from 'react';
import user from '../../assets/userImage.jpg';

function Home() {
    return (
        <section
            id="home"
            className="bg-dark min-h-screen flex items-center justify-center"
        >
            <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
                <div className='flex flex-row w-full md:w-1/2 gap-8 md:gap-24 mt-32 md:mt-16'>
                    <div className='flex flex-col gap-6 px-4 items-center'>
                        <h1 className='text-[70px] text-white border-b-2'>01</h1>
                        <div className='h-[100px] md:h-[200px] w-[1px] bg-white'></div>

                        {/* Purple bar with centered "HOME" text */}
                        <div className='relative h-[90px] w-[15px] bg-accent-purple'>
                            <h2 
                                className='absolute inset-0 inset-x-3 flex items-center justify-center text-white text-[20px]'
                                style={{ transform: 'rotate(270deg)' }}
                            >
                                HOME
                            </h2>
                        </div>
                    </div>

                    <div className='flex flex-col flex-wrap justify-start'>
                        <h1 className='text-[32px] md:text-[70px] text-white'>Hello,</h1>
                        <h1 className='text-[32px] md:text-[70px] text-white'>I'm Sachith Avintha Abeywardhana</h1>
                    </div>
                </div>
                <div className='h-80 w-80 md:w-96 md:h-96 rounded-full overflow-hidden'>
                    <img src={user} alt="User Profile" />
                </div>
            </div>
        </section>
    );
}

export default Home;
