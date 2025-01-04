import React from 'react';
import Text from '../components/Text';

const Home: React.FC = () => {
  return (
    <div>
      <Text type='title'>Heading</Text>
      <Text type='sub'>This is the home page of our application.</Text>
      <Text>Feel free to look around and explore the features we offer.</Text>
    </div>
  );
};

export default Home;