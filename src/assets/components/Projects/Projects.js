import React from 'react'
import './Projects.css'
import talrd from '../../images/talrd.png';
import auraVista from '../../images/auraVista.png';
import plumbing from '../../images/plumbing.png';
import cpc from '../../images/cpc.jpeg';
import visualizer from '../../images/musicSite.jpeg';
import visualizer2 from '../../images/musicSite2.jpeg';
import wordle from '../../images/wordle.jpeg';

function Projects() {
    return (
        <div className='projectsCont'>
            <div className='projectsHead'>
                <h1>My Work</h1>
                <p>I love what I do, so I'm always working on something new.<br/> Check out some of my past projects.</p>
            </div>
            <div className='projectsPageList'>
                <div className='projectPageItem'>
                    <div className='projectPageImg'>
                        <img src={auraVista} alt='' />
                    </div>
                    <h2>Aura Vista</h2>
                    <p>A vacation planning application using computer vision AI to plan a full vacation for users based on input images.</p>
                    <a href='https://www.auradelvista.com/' target='_blank' rel='noreferrer' >Visit Site {'>'}</a>
                    <div className='projectPageTagList'>
                        <p className='projectPageTag'>Website Design</p>
                        <p className='projectPageTag'>Development</p>
                        <p className='projectPageTag'>UI/UX</p>
                    </div>
                </div>
                <div className='projectPageItem'>
                    <div className='projectPageImg'>
                        <img src={talrd} alt='' />
                    </div>
                    <h2>TALRD</h2>
                    <p>An ecommerce business partnered with an AI startup that takes your measurements for fitted suits without leaving one's home.</p>
                    <a href='https://talrdsuits.com/' target='_blank' rel='noreferrer' >Visit Site {'>'}</a>
                    <div className='projectPageTagList'>
                        <p className='projectPageTag'>Website Design</p>
                        <p className='projectPageTag'>Branding</p>
                        <p className='projectPageTag'>UI/UX</p>
                    </div>
                </div>
                <div className='projectPageItem'>
                    <div className='projectPageImg'>
                        <img src={cpc} alt='' />
                    </div>
                    <h2>CPC-Studio</h2>
                    <p>A design studio website template created to showcase fullstack web development.</p>
                    <a href='https://www.cpc-studio.com/' target='_blank' rel='noreferrer' >Visit Site {'>'}</a>
                    <div className='projectPageTagList'>
                        <p className='projectPageTag'>Website Design</p>
                        <p className='projectPageTag'>Development</p>
                        <p className='projectPageTag'>Animation</p>
                        <p className='projectPageTag'>UI/UX</p>
                    </div>
                </div>
                <div className='projectPageItem'>
                    <div className='projectPageImg'>
                        <img src={plumbing} alt='' />
                    </div>
                    <h2>Boss Plumbing</h2>
                    <p>Website redesign and rebranding for Chicago-based plumbing company.</p>
                    <a href='https://www.bossplumbingcorp.net/' target='_blank' rel='noreferrer' >Visit Site {'>'}</a>
                    <div className='projectPageTagList'>
                        <p className='projectPageTag'>Website Design</p>
                        <p className='projectPageTag'>Branding</p>
                        <p className='projectPageTag'>UI/UX</p>
                    </div>
                </div>
                <div className='projectPageItem'>
                    <div className='projectPageImg'>
                        <img src={visualizer} alt='' />
                    </div>
                    <h2>Music Visualizer</h2>
                    <p>A POC music visualizer utilizing a combination of the Perlin noise algorithm, sound frequency, and volume to create a unique visual.</p>
                    <a href='https://charlescondon.github.io/PerlinNoise/' target='_blank' rel='noreferrer' >Visit Site {'>'}</a>
                    <div className='projectPageTagList'>
                        <p className='projectPageTag'>Development</p>
                        <p className='projectPageTag'>Animation</p>
                    </div>
                </div>
                <div className='projectPageItem'>
                    <div className='projectPageImg'>
                        <img src={visualizer2} alt='' />
                    </div>
                    <h2>Music Visualizer 2</h2>
                    <p>A POC music visualizer built off the previous iteration to create a wider variety of user-controlled visuals using given various templates.</p>
                    <a href='https://charlescondon.github.io/Geosynth/' target='_blank' rel='noreferrer' >Visit Site {'>'}</a>
                    <div className='projectPageTagList'>
                        <p className='projectPageTag'>Development</p>
                        <p className='projectPageTag'>Animation</p>
                    </div>
                </div>
                <div className='projectPageItem'>
                    <div className='projectPageImg'>
                        <img src={wordle} alt='' />
                    </div>
                    <h2>Wordle 2</h2>
                    <p>A satirical recreation of the popular Wordle game with an added twist.</p>
                    <a href='https://www.wordletwo.com/' target='_blank' rel='noreferrer' >Visit Site {'>'}</a>
                    <div className='projectPageTagList'>
                        <p className='projectPageTag'>Website Design</p>
                        <p className='projectPageTag'>Development</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Projects