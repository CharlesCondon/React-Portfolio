import React from 'react'
import './Projects.css'
import talrd from '../../images/talrd.png';
import auraVista from '../../images/auraVista.png';
import plumbing from '../../images/plumbing.png';
import cpc from '../../images/cpc.jpeg';
import visualizer from '../../images/musicSite.jpeg';
import visualizer2 from '../../images/musicSite2.jpeg';
import wordle from '../../images/wordle.jpeg';
import ProjectPageItem from './ProjectPageItem/ProjectPageItem';

function Projects() {
    const descriptions = [
        "A vacation planning application using computer vision AI to plan a full vacation for users based on input images.",
        "An ecommerce business partnered with an AI startup that takes your measurements for fitted suits without leaving one's home.",
        "A design studio website template created to showcase fullstack web development.",
        "Website redesign and rebranding for Chicago-based plumbing company.",
        "A POC music visualizer utilizing a combination of the Perlin noise algorithm, sound frequency, and volume to create a unique visual.",
        "A POC music visualizer built off the previous iteration to create a wider variety of user-controlled visuals using given various templates.",
        "A satirical recreation of the popular Wordle game with an added twist."
    ]

    return (
        <div className='projectsPageCont'>
            <div className='projectsHead'>
                <h1>My Work</h1>
                <p>I love what I do, so I'm always working on something new.<br/> Check out some of my past projects.</p>
            </div>
            <div className='projectsPageList'>
                <ProjectPageItem project={{image:auraVista, title:'Aura Vista', desc:descriptions[0], url:'https://www.auradelvista.com/'}} />
                <ProjectPageItem project={{image:talrd, title:'TALRD', desc:descriptions[1], url:'https://talrdsuits.com/'}} />
                <ProjectPageItem project={{image:cpc, title:'CPC-Studio', desc:descriptions[2], url:'https://www.cpc-studio.com/'}} />
                <ProjectPageItem project={{image:plumbing, title:'Boss Plumbing', desc:descriptions[3], url:'https://www.bossplumbingcorp.net/'}} />
                <ProjectPageItem project={{image:visualizer, title:'Music Visualizer', desc:descriptions[4], url:'https://charlescondon.github.io/PerlinNoise/'}} />
                <ProjectPageItem project={{image:visualizer2, title:'Music Visualizer 2', desc:descriptions[5], url:'https://charlescondon.github.io/Geosynth/'}} />
                <ProjectPageItem project={{image:wordle, title:'Wordle 2', desc:descriptions[6], url:'https://www.wordletwo.com/'}} />
            </div>  
        </div>
    )
}

export default Projects