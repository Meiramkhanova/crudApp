import { createContext, useContext, useReducer, useEffect } from "react";
import uuid from "react-uuid";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  // Load initial tasks from session storage or use an empty array if none exists
  const initialTasks = JSON.parse(sessionStorage.getItem("list")) || [];

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // Save tasks to session storage whenever tasks change
  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      if (!action.text) return tasks;
      const newTask = { id: uuid(), text: action.text, done: false };
      return [...tasks, newTask];
    }
    case "changed": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
