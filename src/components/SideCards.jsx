import React from "react";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
export const SideCards = () => {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white drop-shadow">
                    <a className="flex justify-between items-center w-full text-gray-500"
                       >Resume <BsFillPersonLinesFill size={30}/></a>
                </li>

                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white drop-shadow">
                    <a target="_blank" className="flex justify-between items-center w-full text-gray-500"
                       href="https://github.com/Noe-Delcroix" rel="noreferrer">GitHub <FaGithub size={30}/></a>
                </li>

                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white drop-shadow">
                    <a target="_blank" className="flex justify-between items-center w-full text-gray-500"
                       href="https://www.linkedin.com/in/no%C3%A9-delcroix-0ab6411b8/" rel="noreferrer">LinkedIn <FaLinkedin size={30}/></a>
                </li>

                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white drop-shadow">
                    <a target="_blank" rel="noopener noreferrer" className="flex justify-between items-center w-full text-gray-500"
                       href="mailto:noe.delcroix59@gmail.com">Mail <HiOutlineMail size={30}/></a>
                </li>
            </ul>
        </div>
    )
}
