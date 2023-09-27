import React from 'react'
import img1 from './Odyssey.svg'

const Footer = () => {
    return (
        <div className='foot'>
            <div className="logo">
                <img src={img1} alt="" />
            </div>
            <div className="options">
                <span>Stay Connected</span>
                <span>Eductaion</span>
                <span>Community</span>
                <span>About us</span>
            </div>
            <div className="options">
                <span>Privacy Policy</span>
                <span>Terms and aggrement</span>
            </div>
        </div>
    )
}

export default Footer