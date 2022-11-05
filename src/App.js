import React from "react";
import ComponentOne from "./TaskOne/ComponentOne";
import ComponentTwo from "./TaskOne/ComponentTwo";
import Lodash from "./TaskThree/Lodash";
import FunctionBase from "./TaskTwo/FunctionBase";

export default function App() {
  return (
    <div style={{ padding: "100px 0" }}>
      {/* task 1 */}
      <ComponentOne />
      <ComponentTwo />

      {/* task 2 */}
      <FunctionBase />

      {/* task 3 */}
      <Lodash />
    </div>
  );
}
