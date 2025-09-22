import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import "./Todo.css";
export const Todo = () => {
  const { addTask, setTask, setTodo, task, todo, deleteTask, updateTask } =
    useContext(TaskContext);
  return (
    <>
      <div className="container">
        <h1 className="title">Todo List</h1>
        <input
          type="text"
          placeholder="Enter the task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <div className="task">
          {task.map((ele, idx) => {
            return (
              <div key={idx}>
                <span>
                  <li>{ele}</li>
                  <button onClick={() => deleteTask(idx)}>Delete Task</button>
                  <button onClick={() => updateTask(idx)}>Edit Task</button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
