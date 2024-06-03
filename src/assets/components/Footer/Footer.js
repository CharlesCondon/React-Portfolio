import React from 'react';
import './Footer.css';
import {useNavigate} from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    function handleNav(e) {
		navigate(e)
	}

    return (
        <div className='footerCont'>
            <p>© 2024 Charles Condon</p>
            <div className='footerLinks'>
                <button id='contactBtn' onClick={() => handleNav('/contact')}>Contact</button>
            </div>
        </div>
    )
}

export default Footer