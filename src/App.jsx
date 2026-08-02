import "./App.css";
import { resources, results } from "./data";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import LearningMap from "./components/LearningMap/LearningMap";
import Articles from "./components/Articles/Articles";
import Resources from "./components/Resources/Resources";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Results from "./components/Results/Results";

function App() {
  return (
    <>
      <Navbar />
      <main>
              <Hero />
              <About />
              <LearningMap />
              <Articles />
              <Resources />

              <Results />
              <Contact />
      </main>
            <Footer />
            
    </>
  );
}

export default App;