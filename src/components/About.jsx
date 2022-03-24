import React from 'react'

const About = () => {
  return (
    <div name="about" className='bg-polka bg-repeat w-full h-full md:h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full fade'>
            <div className='xl:w-[45%] w-[80%] m-auto outline outline-2 rounded-tr-lg rounded-bl-lg rounded-[50px] bg-black/30 mt-[75px] mb-[25px]'>
                <div className='outline outline-2 m-1 rounded-tr-lg rounded-bl-lg rounded-[50px]'>
                    <h1 className='py-3 px-6 text-[4rem]'>Charles</h1>
                    <p className='py-4 px-6 text-[1rem] xl:text-[1.5rem]'>Hi! My name is Charles Condon and I am a full-stack developer as well as a digital illustrator.</p>
                    <p className='py-4 px-6 text-[1rem] xl:text-[1.5rem]'>I graduated from NYU with a bachelors degree in Computer Science and currently work as an Enterprise 
                        Architect for PepsiCo.</p>
                    <p className='py-4 px-6 text-[1rem] xl:text-[1.5rem]'>My work consists of managing commercial applications used by PepsiCo, evaluating potential new 
                        software capabilities, and analyzing business solutions to fill capability gaps within current architecture.</p>
                    <p className='py-4 px-6 text-[1rem] xl:text-[1.5rem]'>Outside of my career, I am also a digital illustrator. My work has consisted of still illustrations, 
                        short animations, and short original gifs. Over the years, I have created a decent following online and have even become a verified artist on Giphy.  
                        My greatest achievement from these thus far has been my gif animations, which have currently collectively achieved over <b>186 million</b> views.</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About