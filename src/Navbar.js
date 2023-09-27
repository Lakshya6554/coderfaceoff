import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file
import img1 from './Odyssey.svg'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className="logo">
                <img src={img1} alt="" />
            </div>
            <button className="menu-button" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <div className="options">
                <span>Stay connected</span>
                <span>Education</span>
                <span>Community</span>
                <span>About Us</span>
                <span><button className='signin'>Sign in</button></span>
            </div>
        </div>
    );
};

export default Navbar;
