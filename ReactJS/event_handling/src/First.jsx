import React from 'react'
import Second from './Second'
import Third from './Third'

function First() {
    var myfunction=()=>{
        alert('This is my first component')
    }
  return (
    <>
    <h1>First Component</h1>
    <Second mymethod={myfunction}/>
    <Third mymethod2={myfunction}/>
    </>
  )
}

export default First