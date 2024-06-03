import React from 'react';
import './Home.css';
import sphere from '../../js/sphere';
// import cube from '../../js/cube';
import { ReactP5Wrapper } from '@p5-wrapper/react';
import ProjectItem from './ProjectItem/ProjectItem';
import talrd from '../../images/talrd.png';
import auraVista from '../../images/auraVista.png';
import plumbing from '../../images/plumbing.png';
import cpc from '../../images/cpc.jpeg';
import visualizer from '../../images/musicSite.jpeg';
import visualizer2 from '../../images/musicSite2.jpeg';
import wordle from '../../images/wordle.jpeg';

function Home() {


    return (
        <div className='homeCont'>
            <div className='homeHead'>
                <div className='headText'>
                    <h1>Charles Condon;</h1>
                    <p>Developer, Designer, Illustrator</p>
                </div>
                <div className='headImg'>
                    <ReactP5Wrapper sketch={sphere} />
                    {/* <img id="hand" class="fade"
                        src={hand}
                        alt=""
                    /> */}
                </div>
            </div>
            
            <div className='projectsCont'>
                <p>Works</p>
                <div className='projectsList'>
                    <ProjectItem  project={{ title:'CPC-Studio', image:cpc, tags:['Website Design','Development', 'Animation', "UI/UX"], url:'' }}/>
                    <ProjectItem  project={{ title:'Aura Vista', image:auraVista, tags:['Website Design','Development', "UI/UX"], url:'' }}/>
                    <ProjectItem  project={{ title:'Boss Plumbing', image:plumbing, tags:['Website Design','UI/UX', 'Branding'], url:'' }}/>
                    <ProjectItem  project={{ title:'TALRD', image:talrd, tags:['Website Design','UI/UX', 'Branding'], url:'' }}/>
                    <ProjectItem  project={{ title:'Music Visualizer', image:visualizer, tags:['Development','Animation'], url:'' }}/>
                    <ProjectItem  project={{ title:'Music Visualizer 2', image:visualizer2, tags:['Development','Animation'], url:'' }}/>
                    <ProjectItem  project={{ title:'Wordle 2', image:wordle, tags:['Website Design','Development'], url:'' }}/>
                </div>
            </div>
        </div>
    )
}

export default Home