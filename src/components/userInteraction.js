import React from 'react';

import './userInteraction.css';

import {DisplayMessage} from './display-message';
import {Form} from './form';
import { DisplayGuesses } from './display-guesses';

export default function UserInteraction(props){
  return(
    <div className='game-box'>
      <DisplayMessage message={props.message} />
      <Form count={props.count}/>
      <DisplayGuesses guessedAlready={props.guessedAlready}/>
    </div>
  )
};