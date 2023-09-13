import React from 'react';

import {FaGithub} from "react-icons/fa";
import {BsFillPlayFill} from "react-icons/bs";

function Project({title, date, isSchoolProject, description, technologies, githubLink, onlineLink}) {
    return (
        <div className='md:w-1/3 w-3/4 flex flex-col justify-start bg-black py-3 px-10 bg-opacity-70'>

            <div className="p-2 text-3xl font-extrabold uppercase tracking-widest w-full text-white text-center">
                <h1>{title}</h1>
            </div>
            <div className="w-full h-[4px] mb-1 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
            <h2 className="mb-5 font-extrabold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent uppercase text-center">{date} - {isSchoolProject ? "School" : "Personnal"} project</h2>

            <p className="text-white text-justify mb-5">{description}</p>

            <ul className="flex justify-center items-center">
                {technologies.map((technology) => (
                    <li className="bg-gradient-to-r font-extrabold from-[#FF8F28] to-[#FFD600] py-1 px-3 mx-5 mb-10">{technology}</li>
                ))}
            </ul>

            <div className="flex justify-center">

                {onlineLink &&
                    <a className="w-1/2 cursor-pointer group text-white border-2 border-white duration-300 hover:bg-[#FF8F28] flex items-center justify-center p-2 m-2"
                       href={onlineLink} target="_blank" rel="noreferrer">
                        <BsFillPlayFill className="mr-3"/>Try it online
                    </a>
                }
                {githubLink &&
                    <a className="w-1/2 cursor-pointer group text-white border-2 border-white duration-300 hover:bg-[#FF8F28] flex items-center justify-center p-2 m-2"
                       href={githubLink} target="_blank" rel="noreferrer">
                        <FaGithub className="mr-3"/>Source code
                    </a>
                }

            </div>


        </div>
    );
}

export default Project;