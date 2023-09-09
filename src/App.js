import Navbar from "./components/Navbar";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {SideLinks} from "./components/SideLinks";

function App() {
  return (
    <div>
        <Navbar />
        <SideLinks />
        <Home />
        <About />
    </div>
  );
}

export default App;
