import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface ProjectCardProps {
  title?: string;
  imgSrc?: string;
  description?: string;
  key?: React.Key;
  onClick?: () => void;
}

const ProjectCard: React.FC<React.PropsWithChildren<ProjectCardProps>> = (props) => {
  const imgSource = props.imgSrc || "https://cdn-icons-png.freepik.com/512/8136/8136031.png";

  return (
    <Card
      hoverable
      style={{ width: 240, margin: '10px' }}
      cover={<img alt={props.title || "Project Image"} src={imgSource} />}
      onClick={props.onClick}
    >
      <Meta title={props.title || "Project Title"} description={props.description || null} />
    </Card>
  )
};

export default ProjectCard;