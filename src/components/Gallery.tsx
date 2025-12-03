import React from "react";

import Card from "./Card";
import './Gallery.css';

const Gallery: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className='gallery-container'>
      <Card key='card-1'/>
      <Card key='card-2' title='2nd Card' />
      <Card key='card-3' />      
      <Card key='card-4' />
    </div>
  );      
};

export default Gallery;