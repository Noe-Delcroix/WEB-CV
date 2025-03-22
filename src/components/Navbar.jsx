import React, {useState,useContext} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';
import {LanguageSelector} from "./LanguageSelector";
import {AiOutlineDownload} from "react-icons/ai";
import { PdfContext } from './pdf/PdfContext.jsx';
import TranslatedText from './TranslatedText';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {setNav(!nav);}

    const { downloadPdf } = useContext(PdfContext);

    const navItems = [
        { id: 'home', label: 'nav.home' },
        { id: 'about', label: 'nav.about' },
        { id: 'projects', label: 'nav.projects' },
    ];

    return (
        <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#F4F0F0] text-black z-50">
            <div className="flex flex-row justify-start items-center">
                <div className="sm:pr-10 pr-0">
                    <h1 className="sm:flex hidden text-2xl md:text-3xl uppercase drop-shadow">Noé Delcroix</h1>
                </div>

                <button class="relative overflow-hidden rounded-md border border-neutral-200 bg-white from-[#FF8F28] to-[#FFD600] px-3 py-1 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:-translate-x-full before:bg-gradient-to-r before:transition-transform hover:before:translate-x-0" onClick={downloadPdf}>
                    <span class="relative flex">
                        <AiOutlineDownload className="md:pr-2 text-2xl font-bold"/>
                        <TranslatedText as="p" className="md:flex hidden font-bold" translationKey="nav.button" />
                    </span>
                </button>
            </div>

            <ul className="hidden md:flex drop-shadow ml-auto mr-4">
                
            {navItems.map((item) => (
                    <li key={item.id} className="group cursor-pointer px-4">
                        <Link to={item.id} smooth={true} duration={500} className="relative">
                            <TranslatedText translationKey={item.label} />
                            <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#FF8F28] to-[#FFD600] group-hover:w-full transition-all duration-300 -translate-x-1/2"></span>
                        </Link>
                    </li>
                ))}

            </ul>

            <LanguageSelector/>

            <div onClick={handleClick} className="flex md:hidden z-50">
                {nav ? <FaTimes/> : <FaBars className="text-2xl"/>}
            </div>

            <div className={!nav ? "hidden" : "absolute z-40 top-0 left-0 w-full h-screen bg-[#F4F0F0] flex flex-col items-center"}>
                <h1 className="font-extrabold text-center text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] uppercase py-10 drop-shadow">Menu</h1>
                <ul className="flex flex-col justify-center items-center">
                    
                    {navItems.map((item) => (
                        
                        <li key={item.id} className="py-3 text-2xl cursor-pointer">
                            <Link onClick={handleClick} to={item.id} smooth={true} duration={500}>
                                <TranslatedText translationKey={item.label} />
                            </Link>
                        </li>
                        
                    ))}

                </ul>
            </div>



        </nav>
    )
}
export default Navbar;