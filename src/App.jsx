import Courses from "./pages/Courses";
import About from "./pages/About";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AiWorkflow from "./pages/AiWorkflow";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/articles/ai-workflow" element={<AiWorkflow />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;