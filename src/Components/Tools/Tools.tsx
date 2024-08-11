import React, { memo, useRef } from "react";
import "./Tools.css";
import { useTasks } from "../../context/TasksContext";


const Tools = memo(() => {
  const { addTask } = useTasks();
  const taskTitleRef = useRef<HTMLInputElement>(null);

  /**
   * Handles the creation of a new task.
   */
  const handleNewTask = (): void => {
    const newTaskTitle = taskTitleRef.current?.value;
    if (newTaskTitle) {
      addTask(newTaskTitle);
      taskTitleRef.current.value = "";
    }
  };

  /**
   * Handles the key down event for the input field.
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleNewTask();
    }
  };

  return (
    <div className="tools-container">
      <div className="tools-container__input-container">
        <input
          className="tools-container__input"
          placeholder="Write your new task!"
          type="text"
          ref={taskTitleRef}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="tools-container__button-container">
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
