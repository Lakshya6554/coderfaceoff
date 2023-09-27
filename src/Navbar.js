import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className="logo">Logo</div>
            <button className="menu-button" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <div className="options">
                <a href="#">Stay Connected</a>
                <a href="#">Education</a>
                <a href="#">Community</a>
                <a href="#">About Us</a>
                <a href="#"><button>Sign in</button></a>
            </div>
        </div>
    );
};

export default Navbar;
