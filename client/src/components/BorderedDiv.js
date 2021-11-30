import React from "react";

const BorderedDiv = (props) => {
  const borderColor = props.color ? props.color : "grey";
  return (
    <div
      style={{
        border: `3px solid ${borderColor}`,
        margin: "10px",
        padding: "5px",
      }}
    >
      {props.children}
    </div>
  );
};

export default BorderedDiv;