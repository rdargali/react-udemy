import React, { Component } from "react";

const validation = props => {
  let count = "text too short";

  if (props.length > 5) {
    count = "text is long enough";
  }
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default validation;
