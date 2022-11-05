import React from "react";
import { useState } from "react";

export default function FunctionBase() {
  const [arrPeople, setArrPeople] = useState([
    {
      id: 1,
      name: "Lebron James",
      age: 45
    },
    {
      id: 2,
      name: "Kyrie Irving",
      age: 35
    },
    {
      id: 3,
      name: "Steph Curry",
      age: 32
    }
  ]);

  const [objPerson, setObjPerson] = useState({
    name: "Rutherson Delos Santos",
    age: "22",
    job: "Fullstack Developer"
  });
  return (
    <div>
      <b>Array of People</b>
      {arrPeople.map((p) => (
        <p key={p.id}>
          Name: {p.name}, Age: {p.age}
        </p>
      ))}
      <button
        onClick={() => {
          let arr = [...arrPeople];
          let secondIndex = arr[1];
          secondIndex.name = "Michael Jordan";
          secondIndex.age = 54;
          arr[1] = secondIndex;
          setArrPeople(arr);
        }}
      >
        Change 2nd index
      </button>
      <hr />
      <b>Object Person</b>
      <p>
        Name: {objPerson.name} <br />
        Age: {objPerson.age}
        <br />
        Job: {objPerson.job}
      </p>
      <button
        onClick={() => {
          let obj = { ...objPerson };
          obj.job = "Azure devops";
          obj.age = 25;

          setObjPerson(obj);
        }}
      >
        Change 2 Properties
      </button>
      <hr />
    </div>
  );
}
