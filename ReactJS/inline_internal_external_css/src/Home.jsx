import React from "react";

function Home() {
  // Internal CSS
  var mystyle = {
    color:'red',
    fontSize: 37,
    backgroundColor: "yellow",
    fontFamily: "initial",
    fontWeight: "bold",
  };

  return (
    <>
      {/* Inline CSS  */}
      <h1
        style={{
          color: "darkgreen",
          backgroundColor: "cyan",
          padding: "15px 10px 15px 10px",
          "font-size": 35,
          fontFamily: "initial",
          textAlign: "center",
          border: "solid 7px gray",
          marginTop: "0",
        }}
      >
        Home Component
      </h1>

      {/* Internal CSS */}
      <p style={mystyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        exercitationem rem dolore laborum ex nobis minus temporibus commodi
        adipisci, sit labore repellendus voluptates consequuntur vero modi
        mollitia ipsa nostrum ab.
      </p>
    </>
  );
}

export default Home;
