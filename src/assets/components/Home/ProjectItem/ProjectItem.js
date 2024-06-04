import React from 'react';
import './ProjectItem.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectItem({project}) {
    const [toggleImg, setToggleImg] = React.useState(false);
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, y: 150 }
    };

    React.useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
    }, [control, inView]);

    function handleClick() {
        window.open(project.url, '_blank');
    }
    function handleHover() {
        if (window.innerWidth > 992) {
            setToggleImg(!toggleImg)
        } else {
            setToggleImg(false)
        }
    }

    return (
        <motion.div 
            className=''
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <div tabindex="0" className='projectItem' onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover} 
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleClick();
                }}>
                <h2>{project.title}</h2>
                <div className='projectTagList'>
                    {project.tags.map((t,i) => {
                        return <p key={i} className='projectTag'>{t}</p>
                    })}
                </div>
                {toggleImg && (<div className='projectImg'><img src={project.image} alt='' /></div>)}
            </div>
        </motion.div>
    )
}

export default ProjectItem