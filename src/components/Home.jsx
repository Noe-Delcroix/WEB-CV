import React from "react";

import Background from "../assets/images/background.jpg";
import {HiArrowRight} from "react-icons/hi";
import {Link} from "react-scroll";
import TranslatedText from "./TranslatedText";

export const Home = () => {
    return (
        <section name='home'
                 className="w-full h-screen bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center"
                 style={{ backgroundImage: `url(${Background})` }}>

            <div className="bg-white shadow-lg sm:w-1/2 w-full h-1/2 flex items-start justify-center sm:rounded-md">
                <div className="h-full w-full flex flex-col justify-around items-center lg:items-stretch">

                    <TranslatedText as="h2" translationKey="home.welcome" className="text-black lg:text-5xl text-3xl uppercase tracking-widest text-center"/>

                    <div className="w-full flex flex-col lm:items-center">

                    <TranslatedText as="h1" text="Noé Delcroix" className="lg:text-6xl text-4xl lg:-mt-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] uppercase text-center"/>

                        <div className="p-2 w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600]">
                            <h1 className="lg:text-4xl text-2xl font-bold text-black text-center">
                                <TranslatedText translationKey="home.job" />
                            </h1>
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <a href="#_" class="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden text-black bg-gradient-to-r from-[#FF8F28] to-[#FFD600] rounded-lg group border-2 border-white hover:border-gray-200 duration-500 font-medium">
                            <Link to='about' smooth={true} duration={500}>
                            <div className="flex items-center justify-center">
                                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    
                                <TranslatedText as="p" translationKey="home.button" className="mr-5 relative"/>
                                    
                                    <span className="group-hover:rotate-90 duration-300">
                                        <HiArrowRight/>
                                </span>
                            </div>
                            </Link>
                        </a>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
}
