import { useState, useEffect } from "react";
import { Task } from "./models/task.model";
import Tools from "./components/Tools/Tools";
import TasksList from "./components/TasksList/TasksList";

export default function App() {
  // Load tasks from local storage or use an empty array if no tasks are found.
  const [tasks, setTask] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("ow-mahan-wo-todo-list-tasks");
    return JSON.parse(savedTasks!) ?? [];
  });

  // Save tasks to local storage whenever the tasks state changes.
  useEffect(() => {
    try {
      localStorage.setItem("ow-mahan-wo-todo-list-tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to local storage", error);
    }
  }, [tasks]);

  /**
   * Creates a new task with the provided title.
   * @param taskTitle - The title of the task to be created.
   */
  const createNewTask = (taskTitle: string) => {
    const newTask: Task = { id: tasks.length, title: taskTitle, status: false };
    setTask((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="container">
      <h1 className="app-title">To-do List</h1>
      <Tools onNewTask={createNewTask} />
      <TasksList list={tasks} setTask={setTask} />
    </div>
  );
}
