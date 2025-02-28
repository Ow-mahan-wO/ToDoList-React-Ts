import TasksList from "./Components/TasksList/TasksList";
import Tools from "./Components/Tools/Tools";

export default function App() {
  return (
    <div className="container">
      <h1 className="app-title">To-do List</h1>
      <Tools />
      <TasksList />
    </div>
  );
}
