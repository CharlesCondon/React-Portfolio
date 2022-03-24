import React from 'react'

const Work = () => {
  return (
    <div name="work" className='bg-polka bg-repeat w-full h-full md:h-screen'>

        <div className='justify-center items-center w-full h-full fade'>
            <div className='flex flex-col md:flex-row top-[25%] relative h-[50%] md:w-[85%] md:m-auto'>

                <div className='md:flex-col md:relative md:top-[-125px]'>
                    <div className='md:w-[75%] w-[80%] m-auto outline outline-2 rounded-tr-lg rounded-bl-lg rounded-[30px] bg-black/40 mt-[75px] md:mt-[25px] '>
                        <div className='outline outline-2 m-1 rounded-tr-lg rounded-bl-lg rounded-[30px]'>
                            <h1 className='py-3 px-6 text-[2.5rem] md:text-[2.25rem] underline text-center'>Experience</h1>
                            <p className='pt-3 px-6 text-[1rem] xl:text-[1.5rem]'>CTO Associate Analyst</p>
                            <p className='pb-3 px-6 text-[.65rem]'>PepsiCo | Aug. 2021 - Present</p>
                            <p className='pt-3 px-6 text-[1rem] xl:text-[1.5rem]'>Technical Assistant</p>
                            <p className='pb-3 px-6 text-[.65rem]'>New York University | Oct. 2019 - Jul. 2021</p>
                            <p className='pt-3 px-6 text-[1rem] xl:text-[1.5rem]'>Studio Assistant</p>
                            <p className='pb-6 px-6 text-[.65rem]'>Alan Sonfist Studio | Oct. 2017 - Dec. 2018</p>
                        </div>
                    </div>

                    <div className='md:w-[75%] w-[80%] m-auto outline outline-2 rounded-tl-lg rounded-bl-lg rounded-[30px] bg-black/40 mt-[25px]'>
                        <div className='outline outline-2 m-1 rounded-tl-lg rounded-bl-lg rounded-[30px]'>
                            <h1 className='py-3 px-6 text-[2.25rem] underline text-center'>Education</h1>
                            <p className='pt-3 px-6 text-[1rem] xl:text-[1.5rem]'>New York University</p>
                            <p className='pb-0 px-6 text-[.65rem]'>Bachelor's Degree, Computer Science</p>
                            <p className='pb-3 px-6 text-[.65rem]'>2017-2021</p>
                            <p className='pt-3 px-6 text-[1rem] xl:text-[1.5rem]'>Azure AZ-900 Certification</p>
                            <p className='pb-3 px-6 text-[.65rem]'>Oct. 2021</p>
                            <p className='pt-3 px-6 text-[1rem] xl:text-[1.5rem]'>Hispanic Student Leadership Community Summit by Google</p>
                            <p className='pb-6 px-6 text-[.65rem]'>Feb. 2019</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%] w-[80%] m-auto outline outline-2 rounded-tl-lg rounded-br-lg rounded-[30px] bg-black/40 mt-[25px] mb-[50px] md:mb-[auto]'>
                    <div className='outline outline-2 m-1 rounded-tl-lg rounded-br-lg rounded-[30px]'>
                        <h1 className='py-3 px-6 text-[2rem] text-center underline'>Code Examples</h1>
                        <p className='py-3 px-10 text-[1rem] xl:text-[1.5rem] hover:underline'><a href='https://github.com/CharlesCondon/Wordle2'> ~ Wordle Clone</a></p>
                        <p className='py-3 px-10 text-[1rem] xl:text-[1.5rem] hover:underline'><a href='https://github.com/CharlesCondon/BottomsUp'> ~ Cocktail Recipe Generator Web App</a></p>
                        <p className='py-3 px-10 text-[1rem] xl:text-[1.5rem] hover:underline'><a href='https://github.com/CharlesCondon/ArtNewsBot'> ~ Twitter Bot and Web Scraper</a></p>
                        <p className='py-3 px-10 text-[1rem] xl:text-[1.5rem] hover:underline'><a href='https://github.com/CharlesCondon/URLshortener'> ~ URL Shortener</a></p>
                        <p className='pt-3 pb-6 px-10 text-[1rem] xl:text-[1.5rem] hover:underline'><a href='https://github.com/CharlesCondon/testofvirtues'> ~ Rice Purity Test Clone</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work