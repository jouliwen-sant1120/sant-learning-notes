import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import LearningMap from "../components/LearningMap/LearningMap";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <LearningMap />
      <Footer />
    </>
  );
}

export default Home;