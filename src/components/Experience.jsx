import React from "react";
import {useTranslation} from "react-i18next";
export const Experience = () => {
    const { t } = useTranslation();

    return (
        <section name="experience"
                 className="bg-[#F4F0F0] flex justify-center">

            <div className="md:w-8/12 w-full bg-white my-20 pb-10">

                <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">
                    <h1>{t('nav.experience')}</h1>
                </div>

                <div className="relative wrap overflow-hidden p-10">

                    <div className="p-2 text-2xl md:text-3xl text-center font-extrabold uppercase tracking-widest w-full">
                        <h1>{t('experience.subtitle1')}</h1>
                    </div>
                    <div className="w-full h-[4px] mb-10 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>

                    <div className="w-[8px] ml-[-4px] absolute bg-gradient-to-t from-[#FF8F28] to-[#FFD600] h-full md:flex hidden" style={{ left: '50%' }}></div>


                    <div className="mb-8 flex md:flex-row flex-col justify-between items-center w-full ">
                        <div className="order-1 w-full md:w-5/12 justify-end text-2xl font-bold text-gray-500 drop-shadow">{t('experience.vb.date')}</div>
                        <div className="z-10 items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white md:flex hidden"></div>
                        <div className="order-1 bg-[#F4F0F0] w-full md:w-5/12 px-6 py-4 shadow-xl hover:scale-110 duration-500">
                            <h3 className="font-extrabold text-gray-800 text-3xl">
                                <a href="https://www.vertbaudet.fr/" target="_blank" rel="noreferrer">
                                    Vertbaudet
                                </a>
                            </h3>
                            <h3 className="mb-3 font-bold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent text-xl">{t('experience.vb.job')}</h3>

                            <ul className="list-disc ml-10">
                                <li><div dangerouslySetInnerHTML={{ __html:t('experience.vb.desc1')}}></div></li>
                                <li><div dangerouslySetInnerHTML={{ __html:t('experience.vb.desc2')}}></div></li>
                                <li><div dangerouslySetInnerHTML={{ __html:t('experience.vb.desc3')}}></div></li>
                            </ul>
                        </div>
                    </div>


                    <div className="mb-8 flex md:flex-row-reverse flex-col justify-between items-center w-full">
                        <div className="order-1 w-full md:w-5/12 text-2xl font-bold text-gray-500 drop-shadow">{t('experience.ramery.date')}</div>
                        <div className="z-10 items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white md:flex hidden"></div>
                        <div className="order-1 bg-[#F4F0F0] w-full md:w-5/12 px-6 py-4 shadow-xl hover:scale-110 duration-500">
                            <h3 className="font-extrabold text-gray-800 text-3xl">
                                <a href="https://www.ramery.fr/" target="_blank" rel="noreferrer">
                                    Ramery Bâtiments
                                </a>
                            </h3>
                            <h3 className="mb-3 font-bold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent text-xl">{t('experience.ramery.job')}</h3>

                            <ul className="list-disc ml-10">
                                <li><div dangerouslySetInnerHTML={{ __html:t('experience.ramery.desc1')}}></div></li>
                                <li><div dangerouslySetInnerHTML={{ __html:t('experience.ramery.desc2')}}></div></li>
                                <li><div dangerouslySetInnerHTML={{ __html:t('experience.ramery.desc3')}}></div></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative wrap overflow-hidden p-10">

                    <div className="p-2 text-2xl md:text-3xl text-center font-extrabold uppercase tracking-widest w-full">
                        <h1>{t('experience.subtitle2')}</h1>
                    </div>
                    <div className="w-full h-[4px] mb-10 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>

                    <div className="w-[8px] ml-[-4px] absolute bg-gradient-to-t from-[#FF8F28] to-[#FFD600] h-full md:flex hidden" style={{ left: '50%' }}></div>


                    <div className="mb-8 flex md:flex-row flex-col justify-between items-center w-full">
                        <div className="order-1 w-full md:w-5/12 justify-end text-2xl font-bold text-gray-500 drop-shadow">{t('experience.engineer.date')}</div>
                        <div className="z-10 items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white md:flex hidden"></div>
                        <div className="order-1 bg-[#F4F0F0] w-full md:w-5/12 px-6 py-4 shadow-xl hover:scale-110 duration-500 text-center">
                            <h3 className="font-extrabold text-gray-800 text-xl">{t('experience.engineer.diploma')}</h3>
                            <h3 className="font-bold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent text-xl">
                                <a href="https://imt-nord-europe.fr/" target="_blank" rel="noreferrer">
                                    {t('experience.engineer.school')}
                                </a>
                            </h3>
                        </div>
                    </div>

                    <div className="mb-8 flex md:flex-row-reverse flex-col justify-between items-center w-full">
                        <div className="order-1 w-full md:w-5/12 text-2xl font-bold text-gray-500 drop-shadow">{t('experience.dut.date')}</div>
                        <div className="z-10 items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white md:flex hidden"></div>
                        <div className="order-1 bg-[#F4F0F0] w-full md:w-5/12 px-6 py-4 shadow-xl hover:scale-110 duration-500 text-center">
                            <h3 className="font-bold text-gray-800 text-xl">{t('experience.dut.diploma')}</h3>
                            <p className="font-bold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent text-xl">
                                <a href="https://www.iut-a.univ-lille.fr/" target="_blank" rel="noreferrer">
                                    {t('experience.dut.school')}
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 flex md:flex-row flex-col justify-between items-center w-full">
                        <div className="order-1 w-full md:w-5/12 justify-end text-2xl font-bold text-gray-500 drop-shadow">{t('experience.highschool.date')}</div>
                        <div className="z-10 items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white md:flex hidden"></div>
                        <div className="order-1 bg-[#F4F0F0] w-full md:w-5/12 px-6 py-4 shadow-xl hover:scale-110 duration-500 text-center">
                            <h3 className="font-bold text-gray-800 text-xl">{t('experience.highschool.diploma')}</h3>
                            <h3 className="text-gray-800 text-xl">{t('experience.highschool.dut')}</h3>
                            <p className="font-bold bg-clip-text bg-gradient-to-r from-[#FF8F28] to-[#FFD600] text-transparent text-xl">
                                <a href="https://saint-jude.fr" target="_blank" rel="noreferrer">
                                    {t('experience.highschool.school')}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
