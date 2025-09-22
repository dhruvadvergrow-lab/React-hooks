import { createContext, useMemo, useState } from "react";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState("");
  const addTask = () => {
    console.log(todo);
    setTask([...task, todo]);
    setTodo("");
    console.log("added");
  };
  const deleteTask = (idx) => {
    console.log(idx);

    setTask(
      task.filter((_, i) => {
        return i !== idx;
      })
    );
    console.log("deleted");
  };
  const updateTask = useMemo(() => {
    (idx) => {
      const prevTask = task[idx];
      console.log(prevTask);

      const newTask = prompt("Enter a new Task", prevTask);
      console.log(newTask);

      newTask
        ? setTask(
            task.map((ele, id) => {
              if (id === idx) {
                return newTask;
              }
              return ele;
            })
          )
        : task;
    };
  });
  return (
    <>
      <TaskContext.Provider
        value={{
          addTask,
          deleteTask,
          task,
          setTodo,
          todo,
          setTask,
          updateTask,
        }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
};
