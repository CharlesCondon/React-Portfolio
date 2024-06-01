import React from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    function handleNav(e) {
		navigate(e)
	}

    return (
        <div className='navLinks'>
            <button onClick={() => handleNav('/')}>Home</button>
            <button onClick={() => handleNav('/projects')}>Projects</button>
            <button onClick={() => handleNav('/about')}>About</button>
            <button id='contactBtn' onClick={() => handleNav('/contact')}>Contact</button>
        </div>
    )
}

export default Navbar