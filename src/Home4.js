import React from 'react'
import Card from './Card'

const Home4 = () => {
    return (
        <div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsum dolores. Nemo nihil deserunt, quo deleniti dolor modi rem est libero voluptates necessitatibus beatae ex, a sed esse consequuntur corrupti!</div>
            <div>
                <div className='carddiv'>
                    <Card
                        number={1}
                        title="Card Title 1"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <Card
                        number={2}
                        title="Card Title 2"
                        content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <Card
                        number={3}
                        title="Card Title 3"
                        content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
        </div>
    )
}

export default Home4