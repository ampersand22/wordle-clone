import React, { useContext, useState } from 'react'
import { AppContext } from '../App';
import { boardDefault } from '../Words';

const Letter = ({ letterPos, attemptVal }) => {
  const {board} = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter;