import React, { createContext , useState } from 'react';
import Product from './Product';


export var name = createContext()
export var pwd = createContext()

function Gallery() {

 let [username , Setusername]=useState()
     let [password , Setpassword]=useState()

    var getvalue=(user)=>{
        user.preventDefault();
      Setusername(user.target[0].value)
      Setpassword(user.target[1].value)
    }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={getvalue}>
        <label>Username:</label>&nbsp;
        <input type="text"  placeholder='Enter your username' />
        <br />
        <label>Password:</label>&nbsp;
        <input type="password" placeholder='Enter your password' />
        <br />
        <input type="submit" value="Login" />
        
    </form>

    {/* <h1>Name: {username}</h1>
    <h1>Password: {password}</h1> */}

    <name.Provider value={username}>
        <pwd.Provider value={password}>
           <Product/>
        </pwd.Provider>   
    </name.Provider>
    </>
  )
}

export default Gallery