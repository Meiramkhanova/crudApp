import "./App.css";
import { TasksProvider } from "./Context/TasksContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TasksProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <h1>CRUD APP with Reducer and Context</h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}

export default App;
