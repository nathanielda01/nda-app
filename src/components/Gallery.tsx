import React from "react";

import Card from "./Card";
import './Gallery.css';

const Gallery: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className='gallery-container'>
      <Card 
        key='card-1'
        title='Tic-Tac-Toe Game'
        imgSrc='../src/assets/tic-tac-toe.svg'
      />
    </div>
  );      
};

export default Gallery;