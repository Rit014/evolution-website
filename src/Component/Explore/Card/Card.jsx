import React from 'react';
import './Card.css';

const Card = ({ image, title }) => {
    return (
        <>
            <div className="explore-design">
                <img src={image} alt="" />
                <div className="car-des">
                    <h2>{title}</h2>
                    <button><a href="https://www.autoevolution.com/" target="_blank"  style={{color: 'white', textDecoration: 'none'}}>Read More</a></button>
                </div>
            </div>
            <div className="explore-design">
                <img src={image} alt="" />
                <div className="car-des">
                    <h2>{title}</h2>
                    <button><a href="https://www.autoevolution.com/" target="_blank" style={{color: 'white', textDecoration: 'none'}}>Read More</a></button>
                </div>
            </div>
        </>
    )
}

export default Card
