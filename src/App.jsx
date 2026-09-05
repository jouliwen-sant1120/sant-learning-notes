import Courses from "./pages/Courses";
import About from "./pages/About";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AiWorkflow from "./pages/AiWorkflow";
import Articles from "./pages/Articles";
import Resources from "./pages/Resources";
import Results from "./pages/Results";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;