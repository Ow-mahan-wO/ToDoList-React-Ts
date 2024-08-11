import { Dispatch, SetStateAction } from "react";
import { Task } from "../../models/task.model";
import "./TasksList.css";

type TasksListProps = {
  list: Task[];
  setTask: Dispatch<SetStateAction<Task[]>>;
};

/**
 * TasksList component displays a list of tasks and provides functionality
 * to remove tasks and mark them as complete.
 * 
 * @param {TasksListProps} props - The props for the component.
 */
export default function TasksList({ list, setTask }: TasksListProps) {
  /**
   * Removes a specific task by its ID.
   * @param {number} targetId - The ID of the task to be removed.
   */
  const removeTask = (targetId: number) => {
    const updatedTasks = list.filter((task) => task.id !== targetId);
    localStorage.setItem(
      "ow-mahan-wo-todo-list-tasks",
      JSON.stringify(updatedTasks)
    );
    setTask(updatedTasks);
  };

  /**
   * Marks a task as complete by its ID.
   * @param {number} targetId - The ID of the task to be marked as complete.
   */
  const markTaskAsComplete = (targetId: number) => {
    const updatedTasks = list.map((task) =>
      task.id === targetId ? { ...task, status: true } : task
    );
    localStorage.setItem(
      "ow-mahan-wo-todo-list-tasks",
      JSON.stringify(updatedTasks)
    );
    setTask(updatedTasks);
  };

  return (
    <>
      {list.map((task: Task) => (
        <div className="task-container" key={task.id}>
          <div
            className={
              !task.status
                ? "task-container__name-box"
                : "task-container__name-box--completed"
            }
          >
            <p className={!task.status ? "" : "name-box--completed"}>
              {task.title}
            </p>
          </div>
          <div
            className={
              !task.status
                ? "task-btn-container"
                : "task-btn-container--complete"
            }
          >
            <button
              className={!task.status ? "task__btn" : "task__btn--complete"}
              onClick={() => markTaskAsComplete(task.id)}
            >
              <img
                src="icons/mark-as-complete-icon.svg"
                alt="mark as complete icon"
              />
            </button>
            <button className="task__btn" onClick={() => removeTask(task.id)}>
              <img src="icons/trash.svg" alt="trash icon" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
