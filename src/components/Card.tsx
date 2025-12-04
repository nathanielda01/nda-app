import React from "react";

import './Card.css';

interface CardProps {
  title?: string;
  imgSrc?: string;
  description?: string;
  key?: React.Key;
}

const Card: React.FC<React.PropsWithChildren<CardProps>> = (props) => {
  const imgSource = props.imgSrc || "https://cdn-icons-png.freepik.com/512/8136/8136031.png";

  return (
    <article key={props.key} className='card-container'>
      <img className='card-img' src={imgSource} alt="Card Image" />
      <div className='card-body'>
        <h3 className='card-title'>{props.title || 'Sample Card Title'}</h3>
      </div>
    </article>
  )
};

export default Card;