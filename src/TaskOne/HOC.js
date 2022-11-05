import React from "react";
import { useState } from "react";

export default function UpdatedComponent(OriginalComponent) {
  const NewComponent = () => {
    const [bgColor, setBgColor] = useState();
    const handleBgColorChange = () => {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      let color = "rgb(" + x + "," + y + "," + z + ")";
      setBgColor(color);
    };
    return (
      <OriginalComponent
        handleBgColorChange={handleBgColorChange}
        bgColor={bgColor}
      />
    );
  };
  return NewComponent;
}
