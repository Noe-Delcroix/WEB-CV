import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {setNav(!nav);}

    return (
        <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#F4F0F0] text-black">
            <div>
                <h1 className="text-2xl md:text-4xl uppercase drop-shadow">Noé Delcroix</h1>
            </div>

            <ul className="hidden md:flex drop-shadow">
                <li className="cursor-pointer px-4">
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='experience' smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='hobbies' smooth={true} duration={500}>
                        Hobbies
                    </Link>
                </li>
                <li className="cursor-pointer px-4">
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className="flex md:hidden z-50">
                {nav ? <FaTimes/> : <FaBars className="text-2xl"/>}
            </div>

            <div className={!nav ? "hidden" : "absolute z-40 top-0 left-0 w-full h-screen bg-[#F4F0F0] flex flex-col items-center"}>
                <h1 className="font-extrabold text-center text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] uppercase py-10 drop-shadow">Menu</h1>
                <ul className="flex flex-col justify-center items-center">
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to='hobbies' smooth={true} duration={500}>
                            Hobbies
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;