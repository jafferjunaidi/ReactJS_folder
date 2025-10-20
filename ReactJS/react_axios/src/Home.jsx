import React, { useState , useEffect} from 'react';
import  Axios  from 'axios';


function Home() {
 
  let[data ,Setdata]=useState([]);
  
  useEffect(()=>{
   var apiurl = "https://jsonplaceholder.typicode.com/posts";

   Axios.get(apiurl).then((res)=>{
      Setdata(res.data)
   })

 })

  return (
    <>
    <table border={2}>
      <tr>
        {/* <th>User Id</th> */}
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
    {
     data.map((response) => (
       <tr>
        {/* <td>{response.userId}</td> */}
        <td>{response.id}</td>
        <td>{response.title}</td>
        <td>{response.body}</td>
       </tr>
     ))
    }
    </table>
    </>
  )
}

export default Home