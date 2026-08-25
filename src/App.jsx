import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AiWorkflow from "./pages/AiWorkflow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/ai-workflow" element={<AiWorkflow />} />
    </Routes>
  );
}

export default App;