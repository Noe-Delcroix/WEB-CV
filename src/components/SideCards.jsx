import React, {useContext} from "react";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {PdfContext} from "./pdf/PdfContext.jsx";
import TranslatedText from "./TranslatedText";

export const SideCards = () => {
    const { downloadPdf } = useContext(PdfContext);

    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-gradient-to-r from-[#FF8F28] to-[#FFD600] px-4 duration-300 bg-white rounded-tr-md hover:rounded-md drop-shadow">
                    <a className="flex justify-between items-center w-full text-black cursor-pointer" onClick={downloadPdf}>
                        <TranslatedText translationKey="side.resume"/>
                        <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>

                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] px-4 duration-300 bg-white hover:rounded-md drop-shadow">
                    <a target="_blank" className="flex justify-between items-center w-full text-gray-500"
                       href="https://github.com/Noe-Delcroix" rel="noreferrer">
                        <TranslatedText translationKey="side.github"/>
                        <FaGithub size={30}/>
                    </a>
                </li>

                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] px-4 duration-300 bg-white hover:rounded-md drop-shadow">
                    <a target="_blank" className="flex justify-between items-center w-full text-gray-500"
                       href="https://www.linkedin.com/in/no%C3%A9-delcroix-0ab6411b8/" rel="noreferrer">
                        <TranslatedText translationKey="side.linkedin"/>
                        <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] px-4 duration-300 bg-white rounded-br-md hover:rounded-md drop-shadow">
                    <a target="_blank" rel="noopener noreferrer" className="flex justify-between items-center w-full text-gray-500"
                       href="mailto:noe.delcroix59@gmail.com">
                        <TranslatedText translationKey="side.email"/>
                        <HiOutlineMail size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
