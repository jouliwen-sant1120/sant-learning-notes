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

              <section id="results">
        <h2>成果分享</h2>

        <div className="article-list">
          {results.map((item) => (
            <article className="article-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
              <Contact />
      </main>
            <Footer />
            
    </>
  );
}

export default App;