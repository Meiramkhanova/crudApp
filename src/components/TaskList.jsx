import { useTasks, useTasksDispatch } from "../Context/TasksContext";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <TextField
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
          id="outlined-basic"
          label="Add Task"
          variant="outlined"
        />
        <Button
          onClick={() => setIsEditing(false)}
          variant="contained"
          sx={{ margin: "5px" }}
        >
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <Box>
        {task.text}
        <Button
          onClick={() => setIsEditing(true)}
          variant="contained"
          sx={{ margin: "5px", marginLeft: "20px" }}
        >
          Edit
        </Button>
      </Box>
    );
  }
  return (
    <label style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <Button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
        variant="contained"
        sx={{ margin: "5px" }}
      >
        Delete
      </Button>
    </label>
  );
}
