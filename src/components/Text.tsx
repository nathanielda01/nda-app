import React from 'react';

interface TextProps {
  type?: 'title' | 'sub' | 'body';
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ type = 'body', children }) => {
  switch (type) {
    case 'title':
      return <h1>{children}</h1>;
    case 'sub':
      return <h2>{children}</h2>;
    case 'body':
    default:
      return <p>{children}</p>;
  }
};

export default Text;