import React from 'react';

export const Header: React.FC<React.PropsWithChildren> = (props) => {
  const view: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    width: '100%',
  };
  
  return (
    <header style={ view }>
      { props.children }
    </header>
  );
};

export const Footer: React.FC<React.PropsWithChildren> = (props) => {
  const view: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#f1f1f1',
    color: '#333',
    textAlign: 'center',
    width: '100%',
  };

  return (
    <footer style={ view }>
      { props.children }
    </footer>
  );
};