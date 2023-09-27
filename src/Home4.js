import React from 'react'
import Card from './Card'

const Home4 = () => {
    return (
        <div className='a12345'>
            <div className='home45'>
                <div className="laks"><div className='home4text'>We are committed to making space science accessible to all. Explore our educational resources, including</div></div>
                <div className='carddivparent'>
                    <div className="carddiv1">
                        <div className='carddiv'>
                            <Card
                                number="01"
                                title="Online free courses and tutorials"
                                content="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
                            />
                            <Card
                                number='02'
                                title="Resources for teachers and educators"
                                content="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats."
                            />
                            <Card
                                number='03'
                                title="Book recommendations and reviews"
                                content="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home4