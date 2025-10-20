import React from 'react'

const Home = () => {

  let Getvalue=(user)=>{
    // console.log('Function Executed')
    console.log(user.target.value)
  }

  return (
    <>
    <h1>Login</h1>
    <form>
        <label>Username:</label>&nbsp;
        <input type="text" name="username" placeholder='Enter your username' onChange={Getvalue} />
        <br />
        <label>Password:</label>&nbsp;
        <input type="password" name="password" placeholder='Enter your password' />
        <br />
        <input type="submit" value="Login" />
        
    </form>
    </>
  )
}

export default Home