import React, {useContext} from "react";
import Me from "../assets/images/me.jpg";
import { useTranslation } from 'react-i18next';
import { PdfContext } from './pdf/PdfContext.jsx';
import {HiArrowRight} from "react-icons/hi";
import {Link} from "react-scroll";
import TranslatedText from "./TranslatedText";


const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

export const About = () => {

    const { t } = useTranslation();

    const { downloadPdf } = useContext(PdfContext);

    const birthDate = "2003-02-14";
    const age = calculateAge(birthDate);

    return (
        <section name="about"
                 className="bg-[#F4F0F0] h-screen flex justify-center items-center">

            <div className="sm:w-8/12 w-full bg-white my-20 pb-10 rounded-md shadow-md">

                <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center rounded-t-md">
                    <TranslatedText as="h1" translationKey="nav.about"/>
                </div>

                <div className="flex flex-col lg:flex-row justify-around items-center lg:px-10">
                    <div>
                        <img alt="Me" src={Me} className="w-48 lg:w-96 my-3 sm:my-10 rounded-md"/>
                    </div>

                    <div className="lg:w-2/3  flex flex-col items-center justify-end px-10 lg:p-10 ">
                        <div className="text-2xl sm:text-4xl font-bold mb-10">
                            <TranslatedText translationKey="about.title1" /> 
                            
                            <TranslatedText text="Noé" className="pl-3 sm:text-6xl text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent"/>
                            
                            <TranslatedText translationKey="about.title2" />
                        </div>

                        <p className="text-md sm:text-justify">
                            <TranslatedText 
                                text={t('about.p1').replace("{0}", age)} 
                            />
                        </p>

                        <TranslatedText as="p" translationKey="about.p2" className="text-md sm:text-justify mt-5"/>

                        <div className="pt-8 flex justify-evenly items-center w-full">
                            
                            <button class="group relative inline-flex py-2 items-center justify-center overflow-hidden rounded-md border  bg-white font-medium" onClick={downloadPdf}>
                                <div class="inline-flex translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%] text-nowrap">
                                    <TranslatedText translationKey="about.career" />
                                </div>
                                
                                <div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                                    <span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-gradient-to-r from-[#FF8F28] to-[#FFD600] transition duration-500 group-hover:translate-y-0 group-hover:scale-150 text-nowrap"></span>
                                    <span class="z-10 text-black"><TranslatedText translationKey="about.resume" /></span>
                                </div>
                            </button>

                            <a href="#_" class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden text-black bg-white rounded-lg group border hover:border-white duration-500 font-medium">
                                <Link to='projects' smooth={true} duration={500}>
                                <div className="flex items-center justify-center">
                                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-[#FF8F28] to-[#FFD600] rounded-full group-hover:w-64 group-hover:h-64"></span>
                                        <p className="mr-5 relative text-nowrap">
                                            <TranslatedText translationKey="about.projects" />
                                        </p>
                                        
                                        <span className="group-hover:rotate-90 duration-300">
                                            <HiArrowRight/>
                                    </span>
                                </div>
                                </Link>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
