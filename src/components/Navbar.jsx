import React, {useState,useContext} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
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
        <nav className="fixed w-full h-[60px] flex flex-row-reverse justify-between items-center px-4 bg-[#F4F0F0] text-black z-50 sm:flex-row">
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
                {nav ? <FaTimes className="text-3xl"/> : <FaBars className="text-3xl"/>}
            </div>

            {/* Overlay */}
            <div className={!nav 
                ? "hidden"
                : "fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            } onClick={handleClick}></div>

            {/* burger menu */}
            <div className={!nav 
                ? "fixed z-40 top-0 left-0 w-[80%] h-screen bg-[#F4F0F0] flex flex-col items-center -translate-x-full transition-transform duration-300 ease-in-out"
                : "fixed z-40 top-0 left-0 w-[80%] h-screen bg-[#F4F0F0] flex flex-col items-center translate-x-0 transition-transform duration-300 ease-in-out"
            }>
                <h1 className="font-bold text-center text-black text-4xl bg-gradient-to-r from-[#FF8F28] to-[#FFD600] uppercase py-5 drop-shadow w-full">Menu</h1>
                <ul className="flex flex-col justify-center items-center w-full">
                    {navItems.map((item) => (
                        <li key={item.id} className="text-2xl cursor-pointer group w-full">
                            <div className="bg-white shadow-sm mt-3 mx-3 rounded-md">
                                <Link onClick={handleClick} to={item.id} smooth={true} duration={500} className="relative flex justify-center items-center w-full py-4">
                                    <TranslatedText className="text-left" translationKey={item.label} />
                                </Link>
                            </div>
                            
                            
                        </li>
                    ))}
                </ul>

                {/* Boutons sociaux */}
                <div className="flex gap-4 mt-auto mb-8">
                    <a
                        href="https://github.com/Noe-Delcroix"
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-md bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"
                    >
                        <FaGithub size={30} className="text-black"/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/noé-delcroix-0ab6411b8/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-md bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"
                    >
                        <FaLinkedin size={30} className="text-black"/>
                    </a>
                </div>
            </div>



        </nav>
    )
}
export default Navbar;