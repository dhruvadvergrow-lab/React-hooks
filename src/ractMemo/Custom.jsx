import React, { useMemo } from "react";
import { useState } from "react";
import { Person } from "./Person";
export const Custom = () => {
  const [person, setPerson] = useState({
    name: "Dhruv",
    age: 21,
  });
  const changeName = () => {
    setPerson({ ...person, name: "Ram" });
  };
  const [number, setNUmber] = useState([1, 2, 3, 4, 5]);
  const sum = useMemo(() => {
    console.log("Render the numbers");
    return number.reduce((acc, curr) => acc + curr, 0);
  }, [number]);
  console.log(sum);

  const ageIncrement = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  const addNum = () => {
    // const newlist = number.push(6);
    setNUmber([...number, 7]);
  };
  return (
    <div>
      <h1>{sum}</h1>
      <button onClick={addNum}>addNum</button>
      <Person name={person.name} age={person.age} />
      <button onClick={changeName}>UpdateName</button>
      <button onClick={ageIncrement}>ageIncrement</button>
    </div>
  );
};
