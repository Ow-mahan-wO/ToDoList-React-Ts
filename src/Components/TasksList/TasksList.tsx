import { Task } from "../../models/task.model";
import "./TasksList.css";
import { useTasks } from "../../context/TasksContext";

/**
 * TasksList component displays a list of tasks and provides functionality
 * to remove tasks and mark them as complete.
 * 
 */
export default function TasksList() {
  const { tasks, removeTask, markTaskAsComplete } = useTasks();

  return (
    <>
      {tasks.map((task: Task) => (
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
