import React from 'react';
import './ProjectItem.css';

function ProjectItem({project}) {
    const [toggleImg, setToggleImg] = React.useState(false);

    function handleClick() {

    }
    function handleHover() {
        if (window.innerWidth > 992) {
            setToggleImg(!toggleImg)
        } else {
            setToggleImg(false)
        }
    }

    return (
        <div className='projectItem' onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <h2>{project.title}</h2>
            <div className='projectTagList'>
                {project.tags.map((t,i) => {
                    return <p key={i} className='projectTag'>{t}</p>
                })}
            </div>
            {toggleImg && (<div className='projectImg'><img src={project.image} alt='' /></div>)}
        </div>
    )
}

export default ProjectItem