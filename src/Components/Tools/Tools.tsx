import { useRef } from "react";
import "./NewTodo.css";

type ToolsProps {
  onNewTask: (Todo: string) => void;
}

export default function Tools(props: ToolsProps) {
  const taskTitleRef = useRef<HTMLInputElement>(null);

  const handleNewTask = () => {
    const newTaskTitle = taskTitleRef.current!.value;
    props.onNewTask(newTaskTitle);

    taskTitleRef.current!.value = "";
  };

  return (
    <div className="tools-container">
      <div className="input-container">
        <input
          className="tools-container__input"
          placeholder="Write your new task!"
          type="text"
          ref={taskTitleRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleNewTask();
            }
          }}
        />
      </div>
      <div className="button-container">
        <button
          className="tools-container__add-button"
          type="submit"
          onClick={handleNewTask}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
