// Assignment 04
// Build a Toggle Switch Component with Image and Status Display"


import React, { useState } from 'react';
import '/bulb.css';


const Bulb: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  
  return (
    <div className="bulb-container">
      <header className="bulb-header">My React App</header>

      <div className="status">
        <strong>Status:</strong>{' '}
     
      </div>

      <div className="controls">
        <img
          src={isOn ? 'my-app/src/images/on-button.png' : 'my-app/src/images/off-button.png'}
          alt="Toggle Button"
          className="switch"
          onClick={toggleSwitch}
        />
        <img
          src={isOn ? 'my-app/src/images/on bulb.jpeg' : 'my-app/src/images/off.png'}
          alt="Light Bulb"
          className="bulb"
        />
      </div>

      <footer className="bulb-footer" />
    </div>
  );
};

export default Bulb;

