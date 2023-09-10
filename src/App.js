import Navbar from "./components/Navbar";
import {Home} from "./components/Home";
import {Experience} from "./components/Experience";
import {SideCards} from "./components/SideCards";
import {About} from "./components/About";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects";

function App() {
  return (
    <div>
        <Navbar />
        <SideCards />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
