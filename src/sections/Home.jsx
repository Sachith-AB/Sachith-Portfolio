import React from 'react';

function Hero() {
    return (
        <section
            id="home"
            className="bg-dark min-h-screen flex items-center justify-center text-center"
        >
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold text-blue-600">Welcome to My Portfolio</h1>
                <p className="text-gray-600 mt-4 text-lg">
                I'm Sachith, a developer passionate about building web applications.
                </p>
            </div>
        </section>
    );
}

export default Hero;
