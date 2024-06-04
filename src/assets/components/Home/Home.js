import React from 'react';
import './Home.css';
import sphere from '../../js/sphere';
// import cube from '../../js/cube';
import { ReactP5Wrapper } from '@p5-wrapper/react';
import { motion } from "framer-motion"
import {useNavigate} from 'react-router-dom';
import ProjectItem from './ProjectItem/ProjectItem';
import talrd from '../../images/talrd.png';
import auraVista from '../../images/auraVista.png';
import plumbing from '../../images/plumbing.png';
import cpc from '../../images/cpc.jpeg';
import visualizer from '../../images/musicSite.jpeg';
import visualizer2 from '../../images/musicSite2.jpeg';
import wordle from '../../images/wordle.jpeg';
import circle from '../../images/circle.png';
import down from '../../images/down.png';
import Marquee from './Marquee/Marquee';

const words = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "こんにちは",  // Konnichiwa (Japanese)
    "안녕하세요",  // Annyeonghaseyo (Korean)
    "你好",        // Nǐ hǎo (Chinese)
    "Привет",     // Privet (Russian)
    "Olá",
    "हेलो",        // Helo (Hindi)
    "مرحبا",       // Marhaba (Arabic)
    // Add more words as needed
];
  

function Home() {
    const navigate = useNavigate();

    function handleNav(e) {
		navigate(e)
	}
    const handleScroll = (event) => {
        event.preventDefault();
        document.getElementById('Works').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='homeCont'>
            <div className='homeHead'>
                <div className='headText'>
                    <h1>Charles Condon;</h1>
                    <p>Developer, Designer, Illustrator</p>
                </div>
                <div className='headImg'>
                    <ReactP5Wrapper sketch={sphere} />
                </div>
                <div className='scrollPageCont'>
                    <a href='#Works' className='scrollPageLink' onClick={handleScroll}>
                        <img className='scrollPageImg rotating' src={circle} alt='' />
                        <img className='scrollPageImg arrow' src={down} alt='' />
                    </a>
                </div>
            </div>
            <Marquee words={words} />
            <div className='projectsCont'>
                <h2 id='Works'>Works</h2>
                <div className='projectsList'>
                    <ProjectItem  project={{ title:'CPC-Studio', image:cpc, tags:['Website Design','Development', 'Animation', "UI/UX"], url:'https://www.cpc-studio.com/' }}/>
                    <ProjectItem  project={{ title:'Aura Vista', image:auraVista, tags:['Website Design','Development', "UI/UX"], url:'https://www.auradelvista.com/' }}/>
                    <ProjectItem  project={{ title:'Boss Plumbing', image:plumbing, tags:['Website Design','UI/UX', 'Branding'], url:'https://www.bossplumbingcorp.net/' }}/>
                    <ProjectItem  project={{ title:'TALRD', image:talrd, tags:['Website Design','UI/UX', 'Branding'], url:'https://talrdsuits.com/' }}/>
                    <ProjectItem  project={{ title:'Music Visualizer', image:visualizer, tags:['Development','Animation'], url:'https://charlescondon.github.io/PerlinNoise/' }}/>
                    <ProjectItem  project={{ title:'Music Visualizer 2', image:visualizer2, tags:['Development','Animation'], url:'https://charlescondon.github.io/Geosynth/' }}/>
                    <ProjectItem  project={{ title:'Wordle 2', image:wordle, tags:['Website Design','Development'], url:'https://www.wordletwo.com/' }}/>
                </div>
            </div>
            <div className='homeContact'>
                <h2>Want to get in touch?</h2>
                <button className='' onClick={() => handleNav('/contact')}>Contact {'>'}</button>
            </div>
        </div>
    )
}

export default Home