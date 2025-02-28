import Tools from "./components/Tools/Tools";
import TasksList from "./components/TasksList/TasksList";

export default function App() {
  return (
    <div className="container">
      <h1 className="app-title">To-do List</h1>
      <Tools />
      <TasksList />
    </div>
  );
}
