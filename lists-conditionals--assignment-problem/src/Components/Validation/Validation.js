import React, { Component } from "react";

const Validation = props => {
  let count = "text too short";

  if (props.length >= 5) {
    count = "text is long enough";
  }
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Validation;
