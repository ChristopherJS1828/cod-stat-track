import React from 'react';
import Button from './Button'; // Import the Button component
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Define 'navigate' using the 'useNavigate' hook

  const goToAbout = () => {
    navigate('/about'); // Use 'navigate' to navigate to the '/about' route
  };
  
  return (
    <div>
      <h1>Home Screen</h1>
      {/* Use the Button component */}
      <Button onClick={goToAbout}>Go to About</Button>
    </div>
  );
};

export default Home;
