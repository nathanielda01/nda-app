import React from "react";

import ProjectCard from "./ProjectCard";
import './Gallery.css';

const Gallery: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className='gallery-container'>
      <ProjectCard 
        key='card-1'
        title='Tic-Tac-Toe Game'
        imgSrc='../src/assets/tic-tac-toe.svg'
      />
    </div>
  );      
};

export default Gallery;