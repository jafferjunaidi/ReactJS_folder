import React, { useState } from "react";

const Home = () => {
  var [name, setName] = useState("Jaffer Junaidi");
  let [lab, setlab] = useState(208);
  const [batchcode, setbatchcode] = useState("PR2-2022-10B");
  var [Faculty, setFaculty] = useState("Miss Aqsa Khan");

  function ChangeName() {
    setName("Hamid Junaidi");
  }

  function Changelab() {
    setlab(245);
  }

  return (
    <>
      <h1>Hooks in ReactJS</h1>
      <br />
      <h1>Name: {name}</h1>
      <h1>Lab: {lab}</h1>
      <h1>Batchcode: {batchcode}</h1>
      <h1>Faculty: {Faculty}</h1>
      <br />

      <center>
        <button onClick={ChangeName}>Change name</button>&nbsp;&nbsp;
        <button onClick={Changelab}>Change lab</button>&nbsp;&nbsp;
        <button onClick={() => setbatchcode("PR2-2022-9B+10B+11B")}>Change batchcode</button>&nbsp;&nbsp;
        <button onMouseEnter={() => setFaculty("Sir Mansoor Ahmed")}>Change Faculty</button>&nbsp;&nbsp;
      </center>
    </>
  );
};

export default Home;
