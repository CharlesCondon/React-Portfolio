import React from 'react'
import './ProjectPageItem.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectPageItem({project}) {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 }
    };

    React.useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
    }, [control, inView]);

    return (
        <motion.div 
            className='projectPageItem'
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <div className='projectPageImg'>
                <img src={project.image} alt='' />
            </div>
            <div className='projectItemHead'>
                <h2>{project.title}</h2>
                <a href={project.url} target='_blank' rel='noreferrer' >Visit Site {'>'}</a>
            </div>
            <p>{project.desc}</p>
        </motion.div>
    )
}

export default ProjectPageItem