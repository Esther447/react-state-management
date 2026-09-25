import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <TaskManager />
    </ThemeProvider>
  );
}

export default App;