import React from "react";
import { Flex } from "antd";
import { useNavigate } from "react-router";

import ProjectCard from "./ProjectCard";

const Gallery: React.FC<React.PropsWithChildren> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects/tic-tac-toe');
  };

  return (
    <Flex wrap={true} gap='middle'>
      <ProjectCard 
        key='card-1'
        title='Tic-Tac-Toe Game'
        imgSrc='../src/assets/tic-tac-toe.svg'
        onClick={handleClick}
      />
    </Flex>
  );      
};

export default Gallery;