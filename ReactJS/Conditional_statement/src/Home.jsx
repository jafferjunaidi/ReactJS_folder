import React from 'react'
import Admin from './Admin';
import Faculty from './Faculty';
import Employee from './Employee';

// function Home() {
//     var mycomponent=prompt("Enter the component")
//     // var mycomponent = "Admin";
//     var role;

//     if(mycomponent=="Admin"){
//         role=<Admin/>
//     }

//     else if(mycomponent=="Faculty"){
//         role=<Faculty/>
//     }

//     else if(mycomponent=="Employee"){
//         role=<Employee/>
//     }

//     else{
//         return(
//             <h1>No Component Found</h1>
//         )
//     }
//   return (
//      <>
//      <h1>{role}</h1>
//      </>
//   )
// }
   
//buttom code works like if , else or else if //


function Home()
{    
var component=prompt("Enter the component");

return component=='admin'?<Admin/>:component=='employee'?<Employee/>:component=='faculty'?<Faculty/>:<h1>No component found</h1>
}

export default Home
