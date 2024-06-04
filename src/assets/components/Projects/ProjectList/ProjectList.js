import React from 'react';
import { motion } from "framer-motion";
import ProjectItem from '../ProjectPageItem/ProjectPageItem';

const ProjectList = ({ projects }) => {
    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 1,
            },
        },
        hidden: {},
    };

    return (
        <motion.div
            className='projectsPageList'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
            ))}
        </motion.div>
    );
};

export default ProjectList;