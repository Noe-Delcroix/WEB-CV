import Navbar from "./components/Navbar";
import {Home} from "./components/Home";
import {Experience} from "./components/Experience";
import {SideCards} from "./components/SideCards";
import {About} from "./components/About";
import {Skills} from "./components/Skills/Skills";

function App() {
  return (
    <div>
        <Navbar />
        <SideCards />
        <Home />
        <About />
        <Experience />
        <Skills />
    </div>
  );
}

export default App;
