import React from 'react';
import './About.css';
import Image_1 from '../Assets/download.jfif';

const About = () => {
    
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={Image_1} alt="" />
        </div>
        <div className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam aliquid ut nulla 
          voluptatum! Numquam possimus sed earum placeat, illum consectetur aperiam architecto, fuga, 
          deserunt optio nesciunt! Vero, adipisci repudiandae. Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Dignissimos consequuntur quos excepturi atque doloribus blanditiis incidunt 
          enim deserunt. Nostrum est maiores, magni explicabo itaque officia libero aperiam doloremque hic 
          dolor! 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolorem debitis beatae 
            necessitatibus. Iste debitis a, perferendis aut atque assumenda porro fugiat, quo natus nisi 
            eligendi. Molestias voluptatum eaque voluptate.
          </p>
        </div>
      </div>
    </>
  )
}

export default About;
