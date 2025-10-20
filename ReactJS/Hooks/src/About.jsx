import React, { useState } from 'react'

const About = () => {

  let biodata={
    name:"Junaidi Sahab",
    age:23,
    institute:"Aptech MSG",
    course:"ACCP",
    occupation:"Software Engineer",
    maritial_status:false
  }
  var [data,setdata]=useState(biodata)

  function Changevalue(){
    setdata({
      name:"Jafer Bhai",
      age:25,
      institute:"Aptech SFC",
      course:"HDSE",
      occupation:"Database Analyst",
      maritial_status:true
    })

  }


  return (
    <>
       <h1>{data.name}</h1>
       <h1>{data.age}</h1>
       <h1>{data.institute}</h1>
       <h1>{data.course}</h1>
       <h1>{data.occupation}</h1>
       <h1>{data.maritial_status.toString()}</h1>
       <br />
       <center>
       <button onClick={Changevalue}>Update Values</button>
       </center>
    </>
  )
}


export default About