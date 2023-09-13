import React, {useState,useContext} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';
import {LanguageSelector} from "./LanguageSelector";
import {useTranslation} from "react-i18next";
import {AiOutlineDownload} from "react-icons/ai";
import { PdfContext } from './pdf/PdfContext.jsx';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {setNav(!nav);}

    const { downloadPdf } = useContext(PdfContext);

    const { t,i18n } = useTranslation();

    return (
        <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#F4F0F0] text-black z-50">
            <div className="flex flex-row justify-start items-center">
                <div className="pr-5">
                    <h1 className="sm:flex hidden text-2xl md:text-4xl uppercase drop-shadow">Noé Delcroix</h1>
                </div>
                <div className="flex cursor-pointer items-center border-2 border-black duration-300 bg-gradient-to-r from-[#FF8F28] to-[#FFD600] px-2" onClick={downloadPdf}>
                    <AiOutlineDownload className="md:pr-2 text-2xl font-bold"/>
                    <p className="md:flex hidden font-bold">
                        {t('nav.button')}
                    </p>
                </div>
            </div>

            <ul className="hidden md:flex drop-shadow">
                <li className="cursor-pointer px-4">
                    <Link to='home' smooth={true} duration={500}>
                        {t('nav.home')}
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='about' smooth={true} duration={500}>
                        {t('nav.about')}
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='experience' smooth={true} duration={500}>
                        {t('nav.experience')}
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='skills' smooth={true} duration={500}>
                        {t('nav.skills')}
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='projects' smooth={true} duration={500}>
                        {t('nav.projects')}
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='hobbies' smooth={true} duration={500}>
                        {t('nav.hobbies')}
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='contact' smooth={true} duration={500}>
                        {t('nav.contact')}
                    </Link>
                </li>
            </ul>

            <LanguageSelector/>

            <div onClick={handleClick} className="flex md:hidden z-50">
                {nav ? <FaTimes/> : <FaBars className="text-2xl"/>}
            </div>

            <div className={!nav ? "hidden" : "absolute z-40 top-0 left-0 w-full h-screen bg-[#F4F0F0] flex flex-col items-center"}>
                <h1 className="font-extrabold text-center text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] uppercase py-10 drop-shadow">Menu</h1>
                <ul className="flex flex-col justify-center items-center">
                    <li className="py-3 text-2xl cursor-pointer">
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            {t('nav.home')}
                        </Link>
                    </li>
                    <li className="py-3 text-2xl cursor-pointer">
                        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                            {t('nav.about')}
                        </Link>
                    </li>
                    <li className="py-3 text-2xl cursor-pointer">
                        <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
                            {t('nav.experience')}
                        </Link>
                    </li>
                    <li className="py-3 text-2xl cursor-pointer">
                        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                            {t('nav.skills')}
                        </Link>
                    </li>
                    <li className="py-3 text-2xl cursor-pointer">
                        <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                            {t('nav.projects')}
                        </Link>
                    </li>
                    <li className="py-3 text-2xl cursor-pointer">
                        <Link onClick={handleClick} to='hobbies' smooth={true} duration={500}>
                            {t('nav.hobbies')}
                        </Link>
                    </li>
                    <li className="py-3 text-2xl cursor-pointer">
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                            {t('nav.contact')}
                        </Link>
                    </li>
                </ul>
            </div>



        </nav>
    )
}
export default Navbar;