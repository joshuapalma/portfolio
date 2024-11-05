import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <About />
        <Portfolio />
        {/* <Projects /> */}
        <Technologies />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
