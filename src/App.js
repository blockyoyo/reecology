import "./App.css";
import Hero from "./components/Hero.js";
import Menu from "./components/Menu.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Process from "./components/Process.js";
import Articles from "./components/Articles.js";
import Friends from "./components/Friends.js";
import Create from "./components/Create.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Hero />
      <Menu />
      <About />
      <Process />
      <Projects />
      <Articles />
      <Friends />
      <Create />
      <Footer />
    </div>
  );
}

export default App;
