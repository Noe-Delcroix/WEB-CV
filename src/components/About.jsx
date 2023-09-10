import React from "react";

import Me from "../assets/images/me.jpg";


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

    const birthDate = "2003-02-14";
    const age = calculateAge(birthDate);

    return (
        <section name="about"
                 className="bg-[#F4F0F0] flex justify-center" >

            <div className="sm:w-8/12 w-full bg-white my-20 pb-10">

                <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">
                    <h1>About</h1>
                </div>

                <div className="flex flex-col lg:flex-row justify-around items-center lg:px-10">
                    <div>
                        <img alt="Me" src={Me} className="w-48 lg:w-96 my-10"/>
                    </div>

                    <div className="lg:w-2/3  flex flex-col items-center justify-end px-10 lg:p-10 ">
                        <h1 className="text-4xl font-bold mb-10">
                            Hello, my name is <b className="text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent">Noé</b>, nice to meet you !
                        </h1>

                        <p className="text-xl text-justify">
                            I'm a {age} years old <b></b> french developer, currently following a work-study program as a web developer in a french children's clothing company called Vertbaudet.
                            I'm studying computer science and network engineering at IMT Nord Europe.
                        </p>

                        <p className="text-xl text-justify mt-10">
                            I've been passionate about computers and development for a long time and I'm always looking for new challenges to discover new technologies !
                        </p>


                    </div>
                </div>

            </div>
        </section>
    )
}
