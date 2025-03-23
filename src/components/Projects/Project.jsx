import React from 'react';

import {FaGithub} from "react-icons/fa";
import {BsFillPlayFill} from "react-icons/bs";
import TranslatedText from "../TranslatedText";

function Project({name, isSchoolProject, technologies, githubLink, onlineLink}) {

    return (
        <div className='md:w-1/3 sm:w-2/3 w-full flex flex-col justify-start py-3 px-10 backdrop-blur-sm bg-black/10 rounded-md'>

            <div className="p-2 text-3xl font-extrabold uppercase tracking-widest w-full text-white text-center">
                <TranslatedText as="h1" translationKey={"projects."+name+".title"}/>
            </div>
            <div className="w-full h-[4px] mb-1 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
            <div className="mb-5 flex items-center justify-center">
                <TranslatedText 
                    translationKey={"projects."+name+".date"}
                    className='font-extrabold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent uppercase text-center'
                />
                <TranslatedText 
                    text=" - "
                    className='font-extrabold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent uppercase text-center px-2'
                />
                <TranslatedText 
                    translationKey={`projects.type.${isSchoolProject ? 'school' : 'personal'}`}
                    className='font-extrabold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent uppercase text-center'
                />
            </div>

            <TranslatedText as ="p" className="text-white text-justify mb-5" translationKey={"projects."+name+".desc"}/>

            <ul className="flex justify-center items-center">
                {technologies.map((technology) => (

                    <li className="font-extrabold text-white py-1 px-2 mx-5 mb-10 rounded-md border-2">
                        <TranslatedText text={technology}/>
                    </li>
                ))}
            </ul>

            <div className="flex justify-evenly">
                
                {onlineLink &&
                    <a class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#FF8F28] to-[#FFD600] font-medium text-neutral-200 transition-all duration-300 hover:w-40" href={onlineLink} target="_blank" rel="noreferrer">
                        <div class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100 mr-3 text-black">
                            <TranslatedText translationKey="projects.button.demo"/>
                        </div>
                        <div class="absolute right-0 text-black">
                            <BsFillPlayFill className="mr-2 text-3xl"/>
                        </div>
                    </a>
                }
                
                {githubLink &&
                    <a class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#FF8F28] to-[#FFD600] font-medium text-neutral-200 transition-all duration-300 hover:w-40" href={githubLink} target="_blank" rel="noreferrer">
                        <div class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100 mr-3 text-black">
                            <TranslatedText translationKey="projects.button.source"/>
                        </div>
                        <div class="absolute right-0 text-black">
                            <FaGithub className="mr-2 text-3xl"/>
                        </div>
                    </a>
                }

            </div>


        </div>
    );
}

export default Project;