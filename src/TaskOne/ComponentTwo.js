import React from "react";
import UpdatedComponent from "./HOC";

function ComponentTwo(props) {
  return (
    <div
      style={{
        backgroundColor: props.bgColor ?? "gray",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "10%"
      }}
      onMouseEnter={props.handleBgColorChange}
    >
      Hover To Change Color
    </div>
  );
}

export default UpdatedComponent(ComponentTwo);
