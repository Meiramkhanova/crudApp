import "./App.css";
import { TasksProvider } from "./Context/TasksContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TasksProvider>
      <h1>CRUD APP</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
