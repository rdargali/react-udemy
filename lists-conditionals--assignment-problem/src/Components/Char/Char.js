import React from "react";

const Char = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };
  return (
    <div style={style} onClick={props.clicked}>
      <p>{props.character}</p>
    </div>
  );
};

export default Char;
