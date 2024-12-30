import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const projects = [
        { id: 1, title: 'Project One', description: 'A description of the first project.' },
        { id: 2, title: 'Project Two', description: 'A description of the second project.' },
    ];

    return (
        <section 
            className="bg-gray-50 py-20"
            id='projects'
        >
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.id} title={project.title} description={project.description} />
            ))}
            </div>
        </div>
        </section>
    );
}

export default Projects;
