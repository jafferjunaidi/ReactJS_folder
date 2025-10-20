import React, { useContext } from 'react'
import { name, pwd } from './Gallery'

function Product() {

    let myname=useContext(name)
    let pass=useContext(pwd)

  return (
    <>
     <h1>Name: {myname}</h1>
     <h1>Password: {pass}</h1>
    </>
  )
}

export default Product