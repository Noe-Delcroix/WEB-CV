import React from "react";

import Background from "../assets/images/background.jpg";
import {HiArrowRight} from "react-icons/hi";
import {Link} from "react-scroll";

export const Home = () => {
    return (
        <section name='home'
                 className="w-full h-screen bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center"
                 style={{ backgroundImage: `url(${Background})` }}>

            <div className="bg-white shadow-lg w-2/3 h-1/2 flex items-start justify-center">
                <div className="w-1/2 h-full md:flex hidden">
                    <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/cRT_n85a3tI?mute=1&autoplay=1"
                            frameBorder="0" allowFullScreen>
                    </iframe>
                </div>

                <div className="h-full md:w-1/2 w-80 lg:pl-10 flex flex-col justify-around items-center lg:items-stretch">

                    <h2 className="text-black lg:text-5xl text-3xl uppercase tracking-widest text-center">Welcome</h2>

                    <div className="w-full flex flex-col lm:items-center">
                        {/*<p className="text-gray-700 font-light">My name is</p>*/}
                        <h1 className="lg:text-6xl text-4xl lg:-mt-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] uppercase">Noé Delcroix</h1>

                        {/*<p className="text-gray-700 font-light">I am a</p>*/}
                        <div className="p-2 w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600]">
                            <h1 className="lg:text-4xl text-2xl font-bold text-black">Full Stack Developper</h1>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <a href="" className="w-1/2 cursor-pointer group text-black border-2 border-gray-500 duration-300 hover:bg-[#FF8F28]">
                            <Link to='about' smooth={true} duration={500}>
                            <div className="flex items-center justify-center p-2">
                                <p className="mr-5">Explore</p>
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
