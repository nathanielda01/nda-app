import React from "react";
import { Card } from 'antd';

const { Meta } = Card;

import './ProjectCard.css';

interface ProjectCardProps {
  title?: string;
  imgSrc?: string;
  description?: string;
  key?: React.Key;
}

const ProjectCard: React.FC<React.PropsWithChildren<ProjectCardProps>> = (props) => {
  const imgSource = props.imgSrc || "https://cdn-icons-png.freepik.com/512/8136/8136031.png";

  const handleClick = async () => {
    try {
      // Start the tic-tac-toe app via the backend
      await fetch('/api/start-tic-tac-toe');
      
      // Wait a few seconds for the app to start
      setTimeout(() => {
        window.open('http://localhost:3001', '_blank');
      }, 5000); // Adjust delay as needed
    } catch (error) {
      console.error('Failed to start tic-tac-toe app:', error);
    }
  };

  return (
    <Card
      hoverable={true}
      cover={
        <img
          draggable={false}
          className='card-img'
          src={imgSource}
          alt="Card Image"
        />
      }
      onClick={handleClick}
    >
      <Meta
        title={props.title || 'Sample Card Title'}
        description={props.description || 'This is a sample description for the card component.'}
      />
    </Card>
  )
};

export default ProjectCard;