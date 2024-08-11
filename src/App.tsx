import { useState, useEffect } from "react";
import { Task } from "./models/task.model";
import Tools from "./components/Tools/Tools";
import TasksList from "./components/TasksList/TasksList";

export default function App() {
  const [tasks, setTask] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("ow-mahan-wo-todo-list-tasks");
    return JSON.parse(savedTasks!) ?? [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("ow-mahan-wo-todo-list-tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to local storage", error);
    }
  }, [tasks]);

  const createNewTask = (taskTitle: string) => {
    const newTask: Task = { id: tasks.length, title: taskTitle, status: false };
    setTask((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="container">
      <p className="app-title">To-do List</p>
      <Tools onNewTask={createNewTask} />
      <TasksList list={tasks} setTask={setTask} />
    </div>
  );
}
