import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { Todo } from "./Todo/Todo";
import { TaskProvider } from "./Todo/TaskContext";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Dhruv");
  // const [age, setAge] = useState(21);
  // const [email, setEmail] = useState("xyz@gmail.com");
  // const some = () => {
  //   console.log("some function called....");
  //   return 10;
  // };
  // const [number, setNumber] = useState([1, 2, 3, 4, 5]);
  // const [user, setUser] = useState({
  //   id:1,name:"ram",age:100
  // });
  // const [state, setState] = useState(() => ({
  //   count: some(),
  //   name: "Dhurv",
  //   age: 21,
  //   email: "xyz@gmail.com",
  // }));

  // const handleClick = () => {
  //   console.log(state.count);
  //   console.log(state.name);
  //   console.log(state.age);
  //   console.log(state.email);
  //   setState({ ...state, count: state.count + 1 });

  //   // setCount(count + 1);
  // };
  // const add = () => {
  //   // number.push(6);
  //   console.log(number);

  //   setNumber([...number, 6]);
  // };
  // const update=()=>{
  //   setUser({...user,age:200});
  // }

  // const [user, setUser] = useState([]);
  // const [update, setUpdate] = useState(false);
  // const fetchApi = async () => {
  //   console.log("getting data...");

  //   const res = await fetch("https://dummyjson.com/users");
  //   const data = await res.json();
  //   console.log(data.users);
  //   const onlyMale = data.users.filter((ele) => ele.gender === "male");
  //   console.log(onlyMale);

  // const change = data.user;
  // change.filter((ele) => ele.gender === "male");
  // setUser(data.users);
  //   setUser(onlyMale);
  // };
  // const refresh = () => {
  //   setUpdate(true);
  // };

  // useEffect(() => {
  // let isMount = true;
  // fetchApi();

  // return () => {
  //   isMount = false;
  // };
  // }, [update]);
  return (
    <>
      {/* <div>
        {user?.map((user) => {
          return <div key={user.id}>{user.firstName}</div>;
        })}
      </div> */}
      {/* <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Email</th>
          </tr>
        </thead>

        {user?.map((user) => {
          return (
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button onClick={refresh}>Refresh</button> */}
      <TaskProvider>
        <Todo />
      </TaskProvider>
    </>
  );
}

export default App;

/*
<div className="card">
        {/* <h1>{state.count}</h1>
        <button onClick={handleClick}>Increment</button>
        <h1>name:{state.name}</h1> */ //}
{
  /* <button onClick={() => setState("Ram")}>Change the Name</button> */
}
{
  /* <h3>age:{state.age}</h3> */
}
{
  /* <button onClick={() => setState(100)}>Change the Age</button> */
}
{
  /* <h3>email:{state.email}</h3>
        <button onClick={add}>Add value</button>
        <button onClick={update}>update</button>
        <h3>{user.age}</h3>
        {number.map((ele, i) => {
          return <h3 key={i}>{ele}</h3>;
        })} */
}
// </div>//

//
