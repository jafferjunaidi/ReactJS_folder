import React, { useContext } from 'react'
import Third from './Third'
import { age } from './App';

function Second() {
  var user_age = useContext(age);

  return (
   <>
   <Third/>
    <h1>{user_age}</h1>
   </>
  )
}

export default Second