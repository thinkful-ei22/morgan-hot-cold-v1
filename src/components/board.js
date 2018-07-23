import React from 'react';

import UserInteraction from './userInteraction';
import './board.css';

export default function Board(){
  let gameState = {
    count: 2,
    guess: null,
    guessedAlready: [17, 81],
    message: 'Make Your Guess'
  };
  
  return(
    <div className='board-container'>
      <h2>HOT or COLD</h2>
      <UserInteraction {...gameState}/>
    </div>
  )
};