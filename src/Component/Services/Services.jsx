import React from 'react';
import Service from './Service.js';
import './Services.css';
import { useState } from 'react';
import Card from './Card/Card';

const Services = () => {

  const [item, setItems] = useState(Service);
  return (
    <>
      <div className="services">
      {
        item.map((elem) => {
          const {image, title, description} = elem;
          return(
            <Card image={image} title={title} description={description}/>
          )
        })
      }
      </div>
    </>
  )
}

export default Services
