import React, { Component } from 'react'

class Sitemap extends Component {
    state={
        name:'Jafer',
        age:22,
        city:'Karachi',
        profession:'Software developer'
    }

     ChangeState=()=>{
        this.setState(
       {name:'Haider',
        age:24,
        city:'Lahore',
        profession:'Digital marketing',
       }
        )
     }

  render() {
    return (
      <>
      <center style={{ marginTop: '200px' }}>
      <h1>Hello, that's me {this.state.name}</h1>
      <h1>My age is {this.state.age}</h1>
      <h1>I was born in {this.state.city}</h1>
      <h1>And I'm {this.state.profession}</h1>
      <button onClick={this.ChangeState}>Reset</button>
      </center>
      </>
    )
  }
}

export default Sitemap