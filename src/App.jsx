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
    </Routes>
  );
}

export default App;