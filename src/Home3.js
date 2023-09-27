import React from 'react'
import Card2 from './Card2'
import img1 from './Rectangle 13 (1).png';
import img2 from './Rectangle 14 (1).png';
import img3 from './Rectangle 16.png';
import img4 from './Group 135.png';
const Home3 = () => {
    return (
        <div className='home35'>
            <div className='text-div'>
                <span>Join our vibrant
                </span> <span>community of </span> <span>space enthusiasts </span> <span> where you can</span>
            </div>
            <div className='card-div'>
                <Card2 img={img1} title='Astronomy101' content='Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.' />
                <Card2 img={img2} title='Latest Discoveries' content='Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration.' />
                <Card2 img={img3} title='Space Exploration' content='Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations.' />
                <Card2 img={img4} title='Space Technology' content='Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.' />
            </div>
        </div >
    )
}

export default Home3