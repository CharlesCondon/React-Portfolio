import React, {useState} from 'react'
import Logo from '../assets/yellowEye.png'
import Giphy from '../assets/giphy.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 z-[1] fade'>
            <div>
                <img src={Logo} alt="Logo" className='w-[50px]'/>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex xl:text-[1.5vw]  xl:pr-[6rem]'>
                <span><li><Link to='/'>Home</Link></li></span>
                <span><li><Link to='/about'>About</Link></li></span>
                <span><li><Link to='skills'>Skills</Link></li></span>
                <span><li><Link to='/work'>Work</Link></li></span>
                <span><li><Link to='/contact'>Contact</Link></li></span>
            </ul>

            {/* Hamburger Menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black/50 flex flex-col justify-center items-center z-9'}>
                <li className='py-6 text-4xl text-[#101820FF] bg-[#f2aa4cff] m-2 outline outline-2 rounded-md w-[75%] text-center'><Link onClick={handleClick} to='/'>Home</Link></li>
                <li className='py-6 text-4xl text-[#101820FF] bg-[#f2aa4cff] m-2 outline outline-2 rounded-md w-[75%] text-center'><Link onClick={handleClick} to='/about'>About</Link></li>
                <li className='py-6 text-4xl text-[#101820FF] bg-[#f2aa4cff] m-2 outline outline-2 rounded-md w-[75%] text-center'><Link onClick={handleClick} to='skills'>Skills</Link></li>
                <li className='py-6 text-4xl text-[#101820FF] bg-[#f2aa4cff] m-2 outline outline-2 rounded-md w-[75%] text-center'><Link onClick={handleClick} to='/work'>Work</Link></li>
                <li className='py-6 text-4xl text-[#101820FF] bg-[#f2aa4cff] m-2 outline outline-2 rounded-md w-[75%] text-center'><Link onClick={handleClick} to='/contact'>Contact</Link></li>
            </ul>

            {/* Socials */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900 outline outline-2 m-1 rounded-tr-lg'>
                        <a  className='flex justify-between items-center w-full' target='_blank'
                            href='https://www.linkedin.com/in/charles-condon-991594149/'>LinkedIn<FaLinkedin size={30}/></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900 outline outline-2 m-1'>
                        <a  className='flex justify-between items-center w-full' target='_blank'
                            href='https://github.com/CharlesCondon'>Github<FaGithub size={30}/></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900 outline outline-2 my-1 pr-3'>
                        <a  className='flex justify-between items-center w-full' target='_blank'
                            href='https://giphy.com/charlescon'>Giphy<img src={Giphy} alt="Giphy logo" className='w-[40px]' /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900 outline outline-2 m-1 rounded-br-lg'>
                        <a  className='flex justify-between items-center w-full' target='_blank'
                            href='https://docs.google.com/document/d/1oNYIew9EtKe56GV77732yGceXrYnwwlEWtX5XdRqyr8/edit?usp=sharing'>Resume<BsFillPersonLinesFill size={30}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar