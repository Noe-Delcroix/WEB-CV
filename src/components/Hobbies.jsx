import React from "react";

import Music from "../assets/images/hobbies/music.png";
import Gaming from "../assets/images/hobbies/gaming.jpg";
import Anime from "../assets/images/hobbies/anime.jpg";

import {LiaMusicSolid} from "react-icons/lia";
import {MdGamepad} from "react-icons/md";
import {PiTelevisionSimpleBold} from "react-icons/pi";
import {useTranslation} from "react-i18next";


export const Hobbies = () => {

    const { t } = useTranslation();

    return (
        <section name="hobbies"
                 className="bg-[#F4F0F0] flex justify-center">

            <div className="sm:w-8/12 w-full bg-white my-20 pb-10">

                <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">
                    <h1>{t('nav.hobbies')}</h1>
                </div>

                <p className="w-full text-center text-gray-500 my-10">{t('hobbies.desc')}</p>

                <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center px-10">

                    <div className="md:w-1/3 w-full max-h-max m-5 shadow-xl bg-[#F4F0F0] hover:scale-105 duration-500">
                        <img src={Music} alt="Music" className="w-full"/>
                        <div className="flex flex-col items-center">
                            <div className="w-full px-4 flex justify-between items-center">
                                <LiaMusicSolid className="text-2xl"/>
                                <h1 className="font-bold text-2xl pt-2 uppercase text-center">{t('hobbies.hobby1.title')}</h1>
                                <LiaMusicSolid className="text-2xl"/>
                            </div>
                            <div className="w-full h-[4px] mb-5 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            <p className="text-justify px-5 pb-5"><div dangerouslySetInnerHTML={{ __html:t('hobbies.hobby1.desc')}}></div></p>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-full max-h-max m-5 shadow-xl bg-[#F4F0F0] hover:scale-105 duration-500">
                        <img src={Gaming} alt="Gaming" className="w-full"/>
                        <div className="flex flex-col items-center">
                            <div className="w-full px-4 flex justify-between items-center">
                                <MdGamepad className="text-2xl"/>
                                <h1 className="font-bold text-2xl pt-2 uppercase text-center">{t('hobbies.hobby2.title')}</h1>
                                <MdGamepad className="text-2xl"/>
                            </div>
                            <div className="w-full h-[4px] mb-5 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            <p className="text-justify px-5 pb-5"><div dangerouslySetInnerHTML={{ __html:t('hobbies.hobby2.desc')}}></div></p>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-full max-h-max m-5 shadow-xl bg-[#F4F0F0] hover:scale-105 duration-500">
                        <img src={Anime} alt="Anime" className="w-full"/>
                        <div className="flex flex-col items-center">
                            <div className="w-full px-4 flex justify-between items-center">
                                <PiTelevisionSimpleBold className="text-2xl"/>
                                <h1 className="font-bold text-2xl pt-2 uppercase text-center">{t('hobbies.hobby3.title')}</h1>
                                <PiTelevisionSimpleBold className="text-2xl"/>
                            </div>
                            <div className="w-full h-[4px] mb-5 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            <p className="text-justify px-5 pb-5"><div dangerouslySetInnerHTML={{ __html:t('hobbies.hobby3.desc')}}></div></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
