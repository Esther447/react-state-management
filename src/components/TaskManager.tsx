import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");

  const { theme } = useTheme();

  const addTask = () => {
    dispatch({
      type: "add",
      payload: task,
    });

    setTask("");
  };

  return (
    <div
      className={`${styles.container} ${
        theme === LIGHT_THEME ? styles.light : styles.dark
      }`}
    >
      <h2>Task Manager</h2>

      <input
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask} disabled={!task.trim()}>
        Add Task
      </button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            {item.text}

            <button
              onClick={() =>
                dispatch({
                  type: "remove",
                  payload: item.id,
                })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;