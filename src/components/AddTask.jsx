import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTasksDispatch } from "../Context/TasksContext";

export default function AddTask() {
  const [text, setText] = useState("");

  const dispatch = useTasksDispatch();

  return (
    <Box sx={{ display: "flex", gap: "15px" }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
        sx={{ width: "500px" }}
      />
      <Button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
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
