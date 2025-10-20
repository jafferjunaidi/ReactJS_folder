import React from "react";

function About(props) {
    var{name,age,city,email}=props;
  return (
    <>
    <h2><i>Hello, my name is {name}</i></h2>
    <h2><i>I'm {age} years old</i></h2>
    <h2><i>I live in {city}</i></h2>
    <h2><i>My email is {email}</i></h2>
    </>
  )
}

export default About
