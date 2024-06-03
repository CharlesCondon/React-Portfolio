import React from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react'
import './About.css';
import retro from '../../images/retro.jpg';
import buff from '../../js/buffer'

function About() {

    return (
        <div className='aboutCont'>
            <div className='aboutHead'>
                <div className='aboutHero'>
                    <h1 className='aboutHeroName'>I'm Charles Condon</h1>
                </div>
                <div className='aboutHeadText'>
                    <div className='aboutParagraphs'>
                        <p>I was born and raised in a small suburb of Dallas, Texas, and now split my time between 
                            New York and Dallas. A lifelong tech enthusiast and digital artist, I find joy in 
                            blending creativity with technology.</p>
                        <p>My journey started with me earning a bachelor's degree in Computer Science from NYU. Along 
                            the way, I've worn many hats — from being a Technical Assistant at NYU to working as 
                            an Enterprise Architect for Pepsico, and now as a Frontend Developer.</p>
                        <p>I am also a verified artist on Giphy, where my animations have garnered over 500 million 
                            views. This achievement reflects my passion for visual design and digital art, 
                            which I weave into every project I undertake.</p>
                        <p>When I’m not coding or designing, you might find me going for a run, drawing, animating 
                            new pieces, or exploring the latest tech trends.</p>
                    </div>
                        
                    <div className='aboutImg'>
                        <div className='aboutBuffer' id='bufferDiv'>
                            <ReactP5Wrapper sketch={buff} />
                        </div>
                        <img className='selfPortrait' src={retro} alt='' />
                    </div>   
                    
                </div>
                <div className='aboutFooter'>
                    <h2>Want to see more? Click one of the links below!</h2>
                    <div className='aboutLinks'>
                        <a href='https://www.linkedin.com/in/charles-condon-991594149/' target='_blank' rel='noreferrer'>LinkedIn</a>
                        <a href='https://github.com/CharlesCondon' target='_blank' rel='noreferrer'>Github</a>
                        <a href='https://giphy.com/charlescon' target='_blank' rel='noreferrer'>Giphy</a>
                        <a href='https://docs.google.com/document/d/1oNYIew9EtKe56GV77732yGceXrYnwwlEWtX5XdRqyr8/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>
                    </div>   
                </div>
                
            </div>
        </div>
    )
}

export default About