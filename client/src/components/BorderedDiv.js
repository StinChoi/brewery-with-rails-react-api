import React from "react";
// made a seperate file to make code cleaner
// setting up up some style and following James's example
const BorderedDiv = (props) => {
  const borderColor = props.color ? props.color : "whitesmoke";
  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        margin: "10px",
        padding: "5px",
      }}
    >
      {props.children}
    </div>
  );
};

export default BorderedDiv;