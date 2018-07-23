import React from 'react';

import './display-message.css';

export function DisplayMessage(props){
  return(
  <div className='display-message'>
    <h3>{props.message}</h3>
  </div>
  );
};