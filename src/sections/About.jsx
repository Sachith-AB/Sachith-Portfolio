import React from 'react';

function About() {
    return (
        <section 
            id='about' 
            className="bg-dark py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
                <p className="text-lg text-gray-600">
                I'm Sachith, a software developer specializing in React, Spring Boot, and MySQL.
                I love creating intuitive and user-friendly applications.
                </p>
            </div>
        </section>
    );
}

export default About;
