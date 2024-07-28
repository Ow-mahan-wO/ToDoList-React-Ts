import { useState } from "react";
import "./App.css";

import Tools from "./components/Tools/Tools";
import { Task } from "./models/task.model";
import TasksList from "./components/TasksList/TasksList";

let taskId = 0;
export default function App() {
  const [tasks, setTask] = useState<Task[]>([]);

  const createNewTask = (Task: string) => {
    tasks.push({ id: taskId++, title: Task, status: false });
    setTask(() => [...tasks, { id: taskId++, title: Task, status: false }]);
    localStorage.setItem("value", JSON.stringify(tasks));
  };

  return (
    <div className="container">
      <p className="app-title">To-do List</p>
      <Tools onNewTask={createNewTask} />
      <TasksList
        list={JSON.parse(localStorage.getItem("value")!) || tasks}
        setTask={setTask}
      />
    </div>
  );
}
