import React from 'react'
import img2 from './Group 145.svg';
const Home = () => {
    return (
        <div className='home1'>
            <div className='hero1'>
                <img src={img2} className='img12' alt="" />
                <div className='a12'>
                    <span>Unveiling the</span>
                    <span>Wonders of</span>
                    <span>the Universe</span>
                </div>

            </div>
            <div className='text23'>
                <div className='text67'> At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. </div>
                <div className='buttons1'>
                    <button className='getstartbtn'>Get Started</button>
                    <button className='abcbtn'>Watch the Video </button>
                </div>
            </div>
        </div>
    )
}

export default Home