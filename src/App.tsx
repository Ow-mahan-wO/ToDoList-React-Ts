import { useState } from "react";
import "./App.css";

import NewTodo from "./components/NewTodo/NewTodo";
import { Task } from "./models/task.model";
import TasksList from "./components/TasksList/TasksList";

let TaskId = 0;
export default function App() {
  const [Tasks, setTask] = useState<Task[]>([]);

  const AddTaskHandler = (Task: string) => {
    Tasks.push({ id: TaskId++, title: Task, status: false });
    setTask(() => [...Tasks, { id: TaskId++, title: Task, status: false }]);
    localStorage.setItem("value", JSON.stringify(Tasks));
  };

  return (
    <>
      <NewTodo onAddTodo={AddTaskHandler} />
      <TasksList
        list={JSON.parse(localStorage.getItem("value")!) || Tasks}
        setTask={setTask}
      />
    </>
  );
}
