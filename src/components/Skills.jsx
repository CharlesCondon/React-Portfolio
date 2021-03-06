import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-polka md:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-[90%] h-full pt-[100px] md:pt-[0]'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#f2aa4cff]'>Skills</p>
              <p className='py-4'>Technologies I have worked with:</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-black/40'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-black/40'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-black/40'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-black/40'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-black/40'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-black/40'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-black/40'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-black/40'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;