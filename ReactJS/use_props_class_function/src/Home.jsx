import React from 'react'
// function Home({name='Invalid attribute',age})
function Home({name,age}) {
  return (
    <>
    <h1>My name is {name}</h1>
     <h1>My age is {age}</h1> 
    </>
  )
}

export default Home


// import React, { Component } from 'react'

// class Home extends Component {
    
//   render() {
//     return (
//       <>
//       <h1>My name is {this.props.name}</h1>
//       <h1>My age is {this.props.age}</h1>
//       <h1>I lived in {this.props.city}</h1>
//       <h1>My phone number is {this.props.phone_number}</h1>
//       </>
//     )
//   }
// }

// export default Home

