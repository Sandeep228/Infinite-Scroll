import React from "react";

function Compo() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      <div style={{ height: "200px", width: "200px", backgroundColor: "red" }}>
        BOX1
      </div>
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: "orangered",
        }}
      >
        {" "}
        BOX2
      </div>
      <div
        style={{ height: "200px", width: "200px", backgroundColor: "green" }}
      >
        BOX2
      </div>
      <div
        style={{ height: "200px", width: "200px", backgroundColor: "yellow" }}
      >
        BOX3
      </div>
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: "blueviolet",
        }}
      >
        BOX4
      </div>
      <div style={{ height: "200px", width: "200px", backgroundColor: "blue" }}>
        BOX4
      </div>
      <div
        style={{ height: "200px", width: "200px", backgroundColor: "orange" }}
      >
        BOX5
      </div>
    </div>
  );
}

export default Compo;
