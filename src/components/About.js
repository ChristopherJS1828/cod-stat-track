import React from 'react';
import Button from './Button'; // Import the Button component
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate(); // Define 'navigate' using the 'useNavigate' hook

    const goToHome = () => {
      navigate('/'); // Use 'navigate' to navigate to the '/about' route
    };

  return (
    <div>
      <h1>About Screen</h1>
      {/* Use the Button component */}
      <Button onClick={goToHome}>Go to Home</Button>
    </div>
  );
};

export default About;
