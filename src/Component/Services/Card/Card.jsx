import React from 'react';
import './Card.css';

const Card = ({image, title, description}) => {
  return (
    <>
      <div className="service-info">
        <img src={image} alt="" />
        <div className="des">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Card
