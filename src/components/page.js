import React from 'react';

import './page.css'
import Board from './board'
import {NavBar} from './navbar';

export default function Page(){
  return(
    <main>
      <NavBar />
      <Board />
    </main>
  )
};