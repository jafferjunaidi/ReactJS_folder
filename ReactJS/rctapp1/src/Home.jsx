import React, {Component} from "react";
class Home extends Component{
    render(){
        return(
            <>
            <h1>Hello my name is {this.props.name}</h1>
            <h1>My age is {this.props.age}</h1>
            </>
        )
    }
}


// class About extends Component{
//     render(){
//         return(
//             <>
//             <h1>This is about component</h1>
//             </>
//         )
//     }
// }

// export {Home,About} 

export {Home} 