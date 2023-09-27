import React from 'react';
import './Card.css'; // Import your CSS file

const Card2 = ({ img, title, content }) => {
    return (
        <div className="card">
            {/* <div className="card-number">{number}</div> */}
            <img src={img} alt="" />
            <div className="card-title1">{title}</div>
            <div className="card-content1">{content}</div>
        </div>
    );
};

export default Card2;
