import Navbar from "./components/Navbar";
import {Home} from "./components/Home";
import {Experience} from "./components/Experience";
import {SideCards} from "./components/SideCards";
import {About} from "./components/About";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Hobbies} from "./components/Hobbies";
import {Contact} from "./components/Contact";
import i18n from "i18next";

function App() {

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
    }

    return (
        <div>
            <Navbar />
            <SideCards />
            <Home />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Hobbies />
            <Contact />
        </div>
    );
}

export default App;
