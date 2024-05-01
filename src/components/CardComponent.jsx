import React from "react";
import Card from "./Card";

const CardComponent = ({ data }) => {
  return (
    <div >
      <h1>PROGRAMMING QUOTES</h1>
        <div >
          {data.map((curVal, id) => {
            return <Card key={id} myData={curVal} />;
          })}
        </div>
    </div>
  );
};

export default CardComponent;
