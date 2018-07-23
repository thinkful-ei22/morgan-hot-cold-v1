import React from 'react';

import './form.css';

export function Form(props){

  return(
  <form className='user-input'>
    <input type='text' placeholder='Enter your guess' />
    <input type='submit' value='Guess' className='guess-button'/>
    <p>Guess #<span>{props.count}</span>!</p>
  </form>
  )
};