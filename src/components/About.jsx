import React from "react";

import Me from "../assets/images/me.jpg";
import { useTranslation } from 'react-i18next';


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

    const birthDate = "2003-02-14";
    const age = calculateAge(birthDate);

    return (
        <section name="about"
                 className="bg-[#F4F0F0] flex justify-center" >

            <div className="sm:w-8/12 w-full bg-white my-20 pb-10">

                <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">
                    <h1>{t('nav.about')}</h1>
                </div>

                <div className="flex flex-col lg:flex-row justify-around items-center lg:px-10">
                    <div>
                        <img alt="Me" src={Me} className="w-48 lg:w-96 my-10"/>
                    </div>

                    <div className="lg:w-2/3  flex flex-col items-center justify-end px-10 lg:p-10 ">
                        <h1 className="text-4xl font-bold mb-10">
                            {t('about.title1')} <b className="text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent">Noé</b>{t('about.title2')}
                        </h1>

                        <p className="text-xl text-justify">
                            {t('about.p1').replace("{0}", age)}
                        </p>

                        <p className="text-xl text-justify mt-5">
                            {t('about.p2')}
                        </p>

                        <p className="text-xl mt-5 text-justify">
                            <b>{t('about.p3')}</b>
                        </p>


                    </div>
                </div>

            </div>
        </section>
    )
}
