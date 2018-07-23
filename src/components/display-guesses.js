import React from 'react';

import './display-guesses.css';
export function DisplayGuesses(props){
  return(
  <div className='display-guesses'>
    <p>{props.guessedAlready.toString().replace(/,/g, ', ')}</p>
  </div>
  );
};