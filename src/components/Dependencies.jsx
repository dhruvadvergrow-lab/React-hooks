import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Dependencies = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([
    "India",
    "USA",
    "Russia",
    "Korea",
  ]);
  const [user, setUser] = useState({
    id: 1,
    name: "Ram",
    age: 21,
    email: "ram@gmail.com",
  });
  const increase = () => {
    setCount(count + 1);
  };
  const showCountry = () => {
    setShow(true);
  };
  const addCountry = () => {
    setCountries([...countries, "Japan"]);
  };
  const changeUser = () => {
    setUser({ ...user, name: "Hanuman" });
  };
  useEffect(() => {
    // console.log("useEffect is triggered...");
  }, [count, countries, show, user]);
  return (
    <div>
      <h1>{count}</h1>
      {show ? "The content was shown" : ""}
      {countries.map((country, id) => {
        return <li key={id}>{country}</li>;
      })}
      <h1>Name:{user.name}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={showCountry}>ShowCountry</button>
      <button onClick={addCountry}>Add Country</button>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
};
