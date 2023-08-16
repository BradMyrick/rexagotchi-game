
'use client'

import React, { useState, useEffect } from 'react';
import Rexagotchi from './rexagotchi';

const RexagotchiGame: React.FC = () => {
  const [rexagotchi, setTamagotchi] = useState(new Rexagotchi(
    'Default Rex',
    0,
    0,
    0,
    0,
    true,
    "https://i.imgur.com/5NQbQWV.png", // TODO: Replace with default egg image
    60,
  ));

  useEffect(() => {
    const intervalID = setInterval(() => {
      rexagotchi.update(); // Update the rexagotchi's state
    });
    
    return () => clearInterval(intervalID);
  }, [rexagotchi]);

  // TODO Implement button click handlers here and update rexagotchi state

  return (
    <div className="rexagotchi-game">
      {/* TODO Render UI components, meters, buttons, etc. */}
    </div>
  );
};

export default RexagotchiGame;

