import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Task } from "../models/task.model";

type TasksContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: number) => void;
  markTaskAsComplete: (id: number) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
	const savedTasks = localStorage.getItem("ow-mahan-wo-todo-list-tasks");
	return JSON.parse(savedTasks!) ?? [];
  });

  useEffect(() => {
	localStorage.setItem("ow-mahan-wo-todo-list-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
	const newTask: Task = { id: tasks.length, title, status: false };
	setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id: number) => {
	const updatedTasks = tasks.filter((task) => task.id !== id);
	setTasks(updatedTasks);
  };

  const markTaskAsComplete = (id: number) => {
	const updatedTasks = tasks.map((task) =>
	  task.id === id ? { ...task, status: true } : task
	);
	setTasks(updatedTasks);
  };

  return (
	<TasksContext.Provider value={{ tasks, addTask, removeTask, markTaskAsComplete }}>
	  {children}
	</TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
	throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};