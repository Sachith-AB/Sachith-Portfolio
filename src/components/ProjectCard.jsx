import React from 'react';

function ProjectCard({ title, description }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h3 className="text-xl font-bold text-blue-600">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export default ProjectCard;
