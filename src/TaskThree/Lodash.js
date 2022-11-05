import React from "react";
import _ from "lodash";
import { arrOne, arrTwo, arr, a, t } from "./Constants";

export default function Lodash() {
  const SymmetricDiff = () => {
    return JSON.stringify(_.xor(arrOne, arrTwo));
  };
  const GetTableProp = () => {
    return JSON.stringify(_.reject(_.map(arr, "table"), _.isNil));
  };

  const Flatten = () => {
    return JSON.stringify(_.flatten(a));
  };

  const FlattenAndRemoveDupli = () => {
    const result = _.uniq(_.flattenDepth(t, 2));
    return JSON.stringify(result);
  };
  return (
    <div>
      <b>Lodash</b>
      <p>
        1) output
        <br />
        {SymmetricDiff()}
      </p>
      <p>
        2) output
        <br />
        {GetTableProp()}
      </p>
      <p>
        3) output
        <br />
        {Flatten()}
      </p>
      <p>
        4) output
        <br />
        {FlattenAndRemoveDupli()}
      </p>
    </div>
  );
}
