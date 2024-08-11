import { memo, useRef } from "react";
import "./Tools.css";

type ToolsProps = {
  onNewTask: (Todo: string) => void;
}

const Tools = memo((props: ToolsProps) => {
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
});

export default Tools;