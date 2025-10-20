import React from 'react'

function Contact({name="User not found", occupation : job }) {
return (
    <>
    <h2><i>Hello this me {name}</i></h2>
    <h2><i>I'm {job}</i></h2>
    </>
)
}


// function Contact() {
//     return (
//         <>
//         <h2><i>Hello this me {name}</i></h2>
//         <h2><i>I'm {occupation}</i></h2>
//         </>
//     )
//     }

// function Contact(props) {
//     var{name,occupation}=props;
//     return (
//         <>
//         <h2><i>Hello, this is me <mark>{name}</mark></i></h2>
//         <h2><i>the {occupation}</i></h2>
//         </>
//     )
//     }

export default Contact