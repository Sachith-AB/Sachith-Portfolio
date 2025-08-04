import React from 'react'

export default function TecCard({icon}) {
    return (
        <div>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            <div className="flex items-center justify-center border-4 border-gray-700 rounded-[24px] h-28 w-28 overflow-hidden">
                <i className={`${icon} colored text-[70px]`}></i>
            </div>
        </div>
    )
}
