import React from 'react';
import './Card.css'; // Import your CSS file

const Card = ({ number, title, content }) => {
    return (
        <div className="card">
            <div className="card-number">{number}.</div>
            <div className="card-title">{title}</div>
            <div className="card-content">{content}</div>
        </div>
    );
};

export default Card;
