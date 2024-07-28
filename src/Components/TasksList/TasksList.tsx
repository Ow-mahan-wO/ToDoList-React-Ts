import { Dispatch, SetStateAction } from "react";
import { Task } from "../../models/task.model";
import "./TasksList.css";

type TasksListProps = {
  list: Task[];
  setTask: Dispatch<SetStateAction<Task[]>>;
};

export default function TasksList(props: TasksListProps) {
  // ? Tasks into the `localStorage`
  let savedTasks: Task[];
  const tasksInLocalStorage = localStorage.getItem("value");
  if (tasksInLocalStorage) savedTasks = JSON.parse(tasksInLocalStorage);

  /**
   * Removing a specific task
   * @param targetId the task's id that should be removed
   */
  const removeTask = (targetId: number) => {
    props.list.map((task: Task, i: number) => {
      if (task.id === targetId) {
        savedTasks.splice(i, 1);
        localStorage.setItem("value", JSON.stringify(savedTasks));
      }
    });
    props.setTask([...savedTasks]);
  };

  /**
   * Marking a task as complete
   * @param targetId the task's id that should be marked as complete
   */
  const markTaskAsComplete = (targetId: number) => {
    props.list.map((task: Task, i: number) => {
      if (task.id === targetId) {
        savedTasks[i].status = true;
        localStorage.setItem("value", JSON.stringify(savedTasks));
      }
    });
    props.setTask([...props.list]);
  };

  return (
    <>
      {props.list.map((task: Task) => (
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
