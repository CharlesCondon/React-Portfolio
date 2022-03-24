import React from 'react'
import Fire from '../assets/fire.png'
import Hand from '../assets/hand.png'

const Home = () => {
    return (
        <div name='home' className="bg-polka w-full h-screen">
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full relative z-0 fade'>

                <h1 className='xl:text-[10vw] lg:text-[12vw] text-[16vw] mt-[37%] xl:mt-[15%] lg:mt-[15%] mb-5 md:mt-[20%] md:text-center xl:relative xl:left-[-30%] lg:relative lg:left-[-15%] textStroke'>CHARLES <br/> CONDON;</h1>

                <div className='flex flex-row'>
                    <div className='w-[100%] bg-[#f2aa4cff] ml-[-35px] rounded-r-full pr-[50px] pl-[15px] md:pl-0 py-1 xl:fixed xl:left-[0px] xl:w-[60%] lg:w-[67%] lg:absolute lg:left-0 xl:mt-[2vw] '>
                        <h2 className='text-[#101820FF] text-center text-[3vw] xl:text-[2vw] md:pt-1 xl:pr-[]'>Illustrator and Developer</h2>
                    </div>
                    <div className='w-[25%] bg-[#f2aa4cff] rounded-l-full ml-5 mr-[-35px] h-[6.75vw] xl:hidden lg:hidden'></div>
                </div>
                
                <img src={Fire} alt="fire" className='fixed bottom-[100px] right-[38%] m-auto w-[23%] md:w-[15%] xl:w-[12%] md:right-[40%] md:bottom-[150px] xl:right-[15%] xl:bottom-[300px] lg:right-[13%] lg:bottom-[175px] burn'/>
                <img src={Hand} alt="hand" className='fixed bottom-0 right-[15%]  w-[75%] md:w-[50%] xl:w-[45%] md:right-[25%] xl:right-[0%] lg:right-[-5%]' />
                

            </div>

        </div>
    )
}

export default Home