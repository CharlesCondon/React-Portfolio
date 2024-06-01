import React from 'react';
import './ProjectItem.css';

function ProjectItem({project}) {
    function handleClick() {

    }
    function handleHover() {

    }

    return (
        <div className='projectItem' onClick={handleClick} onMouseEnter={handleHover}>
            <h2>{project.title}</h2>
            <div className='projectTagList'>
                {project.tags.map((t) => {
                    return <p className='projectTag'>{t}</p>
                })}
            </div>
        </div>
    )
}

export default ProjectItem