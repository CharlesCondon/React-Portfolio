import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-polka bg-repeat w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full fade'>

            <div className='flex flex-col outline outline-2 rounded-[20px] bg-black/50 w-[85%] md:w-[60%]'>

                <div className='outline outline-2 rounded-[20px] m-1 p-8'>

                    <form action="https://formspree.io/f/xlezlqqv" method="POST" className='text-[.75rem] md:text-[1rem]'>
                        <div>
                            <input class="req" type="text" name="name" placeholder="NAME*" required className='contactBG w-full outline outline-2 outline-black mx-auto py-[1em] text-white rounded-3xl px-6 mb-4 font-sans'/>
                        </div>
                        <div>
                            <input class="req" type="email" name="_replyto" placeholder="EMAIL*" required className='contactBG w-full outline outline-2 outline-black mx-auto py-[1em] text-white rounded-3xl px-6 mb-4 font-sans'/>
                        </div>
                        <div>
                            <input type="text" name="subject" placeholder="SUBJECT" className='contactBG w-full outline outline-2 outline-black mx-auto py-[1em] text-white rounded-3xl px-6 mb-4 font-sans'/>
                        </div>
                        <div>
                            <textarea name="message" placeholder="MESSAGE" className='contactBG w-full outline outline-2 outline-black mx-auto py-[1em] text-white rounded-3xl px-6 resize-none mb-4 font-sans h-[12em]'></textarea>
                        </div>
                        <div>
                            <input type="submit" value="SEND" className='contactBG w-full outline outline-2 outline-black mx-auto py-[1em] rounded-3xl hover:bg-white/20'/>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact