import React, { useContext } from 'react'
import { data } from './App'


function Third() {

  var mydata=useContext(data)

  return (
    <>
    <h1>{mydata}</h1>
    </>
  )
}

export default Third