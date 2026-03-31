import React from 'react'
import './Projects.css'
import cpc from '../../images/cpc.jpeg';
import visualizer from '../../images/musicSite.jpeg';
import visualizer2 from '../../images/musicSite2.jpeg';
import wordle from '../../images/wordle.jpeg';
import ProjectList from './ProjectList/ProjectList';
import { useLocation } from "react-router-dom";

function Projects() {
    const location = useLocation();

    React.useEffect(() => {
        window.gtag("event", "page_view", {
            page_path: location.pathname + location.search + location.hash,
            page_search: location.search,
            page_hash: location.hash,
            page_title: "Projects"
        });
    }, [location]);

    const descriptions = [
        "A design studio website created to showcase fullstack web development.",
        "A POC music visualizer utilizing a combination of the Perlin noise algorithm, sound frequency, and volume to create a unique visual.",
        "A POC music visualizer built off the previous iteration to create a wider variety of user-controlled visuals using given various templates.",
        "A satirical recreation of the popular Wordle game with an added twist."
    ];
    const projects = [
        {
            title:'CPC-Studio',
            desc:descriptions[0],
            image:cpc,
            url:"https://www.cpc-studio.com/"
        },
        {
            title:'Music Visualizer',
            desc:descriptions[1],
            image:visualizer,
            url:"https://charlescondon.github.io/PerlinNoise/"
        },
        {
            title:'Music Visualizer 2',
            desc:descriptions[2],
            image:visualizer2,
            url:"https://charlescondon.github.io/Geosynth/"
        },
        {
            title:'Wordle 2',
            desc:descriptions[3],
            image:wordle,
            url:"https://www.wordletwo.com/"
        },
    ]

    return (
        <div className='projectsPageCont'>
            <div className='projectsHead'>
                <h1>My Work</h1>
            </div>
            <div className='projectsPageList'>
                <ProjectList projects={projects} />
            </div>  
        </div>
    )
}

export default Projects