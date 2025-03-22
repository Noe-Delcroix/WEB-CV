import Navbar from "./components/Navbar";
import {Home} from "./components/Home";
import {SideCards} from "./components/SideCards";
import {About} from "./components/About";
import {Projects} from "./components/Projects/Projects";
import { PdfProvider } from './components/pdf/PdfProvider.jsx';
import i18n from "i18next";


function App() {

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
    }

    return (
        <div>
            <PdfProvider>
                <Navbar />
                <SideCards />
                <Home />
                <About />
                <Projects />
            </PdfProvider>
        </div>
    );
}

export default App;
