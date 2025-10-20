import React from 'react'

function About() {

    var getvalue=(user)=>{
        user.preventDefault();
      console.log(user.target[0].value)
      console.log(user.target[1].value)
    }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={getvalue}>
        <label>Username:</label>&nbsp;
        <input type="text" name="username" placeholder='Enter your username' />
        <br />
        <label>Password:</label>&nbsp;
        <input type="password" name="password" placeholder='Enter your password' />
        <br />
        <input type="submit" value="Login" />
        
    </form>
    </>
  )
}

export default About