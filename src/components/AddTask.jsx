import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTasksDispatch } from "../Context/TasksContext";
import uuid from "react-uuid";

export default function AddTask() {
  const [text, setText] = useState("");

  const dispatch = useTasksDispatch();

  return (
    <Box>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
      />
      <Button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: uuid(),
            text: text,
          });
        }}
        variant="contained"
      >
        Add Task
      </Button>
    </Box>
  );
}
