import React from 'react';
import './Explore.css';
import Card from './Card/Card';
import Car from './Car.js';
import { useState } from 'react';

const Explore = () => {

  const [items, setItems] = useState(Car);

  return (
    <>
      <div className="explore">
        {
          items.map((elem) => {
            const { id, image, title } = elem;
            return (
              <Card image={image} title={title}/>
            )
          })
        }
      </div>
    </>
  )
}

export default Explore;
