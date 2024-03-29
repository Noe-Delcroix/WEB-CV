import React, { useState }  from "react";
import GridElement from "./GridElement";


import Git from "../../assets/images/skills/languages/git.png";
import Csharp from "../../assets/images/skills/languages/csharp.png";
import Java from "../../assets/images/skills/languages/java.png";
import Python from "../../assets/images/skills/languages/python.png";
import SQL from "../../assets/images/skills/languages/sql.png";
import JavaScript from "../../assets/images/skills/languages/javascript.png";
import HTML from "../../assets/images/skills/languages/html.png";
import CSS from "../../assets/images/skills/languages/css.png";

import ReactJS from "../../assets/images/skills/librairies/react.png";
import Tailwind from "../../assets/images/skills/librairies/tailwind.png";
import SpringBoot from "../../assets/images/skills/librairies/spring-boot.png";
import Flutter from "../../assets/images/skills/librairies/flutter.png";
import OpenGL from "../../assets/images/skills/librairies/opengl.png";
import Processing from "../../assets/images/skills/librairies/processing.png";
import p5js from "../../assets/images/skills/librairies/p5.js.png";
import JQuery from "../../assets/images/skills/librairies/jquery.png";

import GitHub from "../../assets/images/skills/software/github.png";
import IntelliJ from "../../assets/images/skills/software/intellij.png";
import VS from "../../assets/images/skills/software/visual-studio.png";
import SQLServer from "../../assets/images/skills/software/sql-server.png";
import VSCode from "../../assets/images/skills/software/vs-code.png";
import Atom from "../../assets/images/skills/software/atom.png";
import PaintNet from "../../assets/images/skills/software/paint.net.png";
import Photoshop from "../../assets/images/skills/software/photoshop.png";
import Postman from "../../assets/images/skills/software/postman.png";
import Word from "../../assets/images/skills/software/word.png";
import Excel from "../../assets/images/skills/software/excel.png";
import PowerPoint from "../../assets/images/skills/software/powerpoint.png";

import UK from 'country-flag-icons/react/3x2/GB';
import DE from 'country-flag-icons/react/3x2/DE';

import {GrLanguage} from "react-icons/gr";
import {LuFolderCog} from "react-icons/lu";
import {RiToolsFill} from "react-icons/ri";


import {useTranslation} from "react-i18next";

export const Skills = () => {

    const [activeTab, setActiveTab] = useState(1);
    const { t } = useTranslation();

    return (
        <section name="skills"
                 className="bg-[#F4F0F0] flex justify-center">

            <div className="sm:w-8/12 w-full bg-white my-20 pb-10">

                <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">
                    <h1>{t('nav.skills')}</h1>
                </div>

                <p className="w-full text-center text-gray-500 mt-10">{t('skills.desc')}</p>

                <div className="mx-10 mt-10">
                    <div className="flex md:justify-center justify-around border-b-2">
                        <button
                            onClick={() => setActiveTab(1)}
                            className={`py-1 px-2 md:px-4 ${activeTab === 1 ? 'border-b-2 border-[#FF8F28]' : ''}`}>
                            <GrLanguage className="inline-block mr-2 text-6xl sm:text-xl"/>
                            <p className="text-xl md:text-2xl sm:flex hidden uppercase">
                                {t('skills.tab1')}
                            </p>

                        </button>
                        <button
                            onClick={() => setActiveTab(2)}
                            className={`py-1 px-2 md:px-4 ${activeTab === 2 ? 'border-b-2 border-[#FF8F28]' : ''}`}>
                            <LuFolderCog className="inline-block mr-2 text-6xl sm:text-xl"/>
                            <p className="text-xl md:text-2xl sm:flex hidden uppercase">
                                {t('skills.tab2')}
                            </p>
                        </button>
                        <button
                            onClick={() => setActiveTab(3)}
                            className={`py-1 px-2 md:px-4 ${activeTab === 3 ? 'border-b-2 border-[#FF8F28]' : ''}`}>
                            <RiToolsFill className="inline-block mr-2 text-6xl sm:text-xl"/>
                            <p className="text-xl md:text-2xl sm:flex hidden uppercase">
                                {t('skills.tab3')}
                            </p>
                        </button>
                    </div>

                    {activeTab === 1 && (
                        <div>
                            <div className="mt-5 sm:hidden block">
                                <h1 className="text-2xl text-center font-bold uppercase">{t('skills.tab1')}</h1>
                                <div className="w-full h-[4px] bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            </div>

                            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                                <GridElement softwareName="Git" imageUrl={Git}/>
                                <GridElement softwareName="C# .Net 7" imageUrl={Csharp}/>
                                <GridElement softwareName="Java 17" imageUrl={Java}/>
                                <GridElement softwareName="Python 3" imageUrl={Python}/>
                                <GridElement softwareName="SQL" imageUrl={SQL}/>
                                <GridElement softwareName="JavaScript" imageUrl={JavaScript}/>
                                <GridElement softwareName="HTML 5" imageUrl={HTML}/>
                                <GridElement softwareName="CSS 3" imageUrl={CSS}/>
                            </div>
                        </div>

                    )}
                    {activeTab === 2 && (
                        <div>

                            <div className="mt-5 sm:hidden block">
                                <h1 className="text-2xl text-center font-bold uppercase">{t('skills.tab2')}</h1>
                                <div className="w-full h-[4px] bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            </div>

                            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                                <GridElement softwareName="React JS" imageUrl={ReactJS}/>
                                <GridElement softwareName="Tailwind CSS" imageUrl={Tailwind}/>
                                <GridElement softwareName="Spring Boot" imageUrl={SpringBoot}/>
                                <GridElement softwareName="Flutter" imageUrl={Flutter}/>
                                <GridElement softwareName="OpenGL" imageUrl={OpenGL}/>
                                <GridElement softwareName="Processing" imageUrl={Processing}/>
                                <GridElement softwareName="p5.js" imageUrl={p5js}/>
                                <GridElement softwareName="JQuery" imageUrl={JQuery}/>
                            </div>
                        </div>


                    )}
                    {activeTab === 3 && (

                        <div>
                            <div className="mt-5 sm:hidden block">
                                <h1 className="text-2xl text-center font-bold uppercase">{t('skills.tab3')}</h1>
                                <div className="w-full h-[4px] bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            </div>

                            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                                <GridElement softwareName="GitHub" imageUrl={GitHub}/>
                                <GridElement softwareName="IntelliJ" imageUrl={IntelliJ}/>
                                <GridElement softwareName="Visual Studio" imageUrl={VS}/>
                                <GridElement softwareName="SQL Server" imageUrl={SQLServer}/>
                                <GridElement softwareName="VS Code" imageUrl={VSCode}/>
                                <GridElement softwareName="Atom" imageUrl={Atom}/>
                                <GridElement softwareName="Paint.net" imageUrl={PaintNet}/>
                                <GridElement softwareName="Photoshop" imageUrl={Photoshop}/>
                                <GridElement softwareName="Postman" imageUrl={Postman}/>
                                <GridElement softwareName="Word" imageUrl={Word}/>
                                <GridElement softwareName="Excel" imageUrl={Excel}/>
                                <GridElement softwareName="PowerPoint" imageUrl={PowerPoint}/>
                            </div>
                        </div>


                    )}

                    <div className="p-2 text-2xl md:text-3xl text-center font-extrabold uppercase tracking-widest w-full">
                        <h1>{t('skills.subtitle1')}</h1>
                    </div>
                    <div className="w-full h-[4px] mb-10 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>

                    <div className="flex flex-col lg:flex-row justify-center mb-5">
                        <div className="flex flex-col justify-between items-center shadow-xl bg-[#F4F0F0] hover:scale-110 duration-500 my-2 mx-0 lg:m-10">
                            <UK className="w-1/2 p-5"/>
                            <p className="font-extrabold">{t('skills.lang.en2')}</p>
                            <h1 className="bg-gradient-to-r from-[#FF8F28] to-[#FFD600] font-extrabold w-full text-center sm:text-3xl text-xl p-1">{t('skills.lang.en')}</h1>
                        </div>
                        <div className="flex flex-col justify-between items-center shadow-xl bg-[#F4F0F0] hover:scale-110 duration-500 my-2 mx-0 lg:m-10">
                            <DE className="w-1/2 p-5"/>
                            <h1 className="bg-gradient-to-r from-[#FF8F28] to-[#FFD600] font-extrabold w-full text-center sm:text-3xl text-xl p-1">{t('skills.lang.de')}</h1>
                        </div>
                    </div>

                    <div className="p-2 text-2xl md:text-3xl text-center font-extrabold uppercase tracking-widest w-full">
                        <h1>{t('skills.subtitle2')}</h1>
                    </div>
                    <div className="w-full h-[4px] mb-5 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>


                    <ul className="w-full flex flex-col justify-center text-center mb-10">
                        <li className="text-2xl my-2 font-bold">{t('skills.soft1')}</li>
                        <li className="text-2xl my-2">{t('skills.soft2')}</li>
                        <li className="text-2xl my-2">{t('skills.soft3')}</li>
                        <li className="text-2xl my-2">{t('skills.soft4')}</li>
                    </ul>


                    <div className="p-2 text-2xl md:text-3xl text-center font-extrabold uppercase tracking-widest w-full">
                        <h1>{t('skills.subtitle3')}</h1>
                    </div>
                    <div className="w-full h-[4px] mb-5 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>


                    <ul className="w-full flex flex-col justify-center text-center">
                        <li className="text-2xl my-2">{t('skills.other1')}</li>
                        <li className="text-2xl my-2">{t('skills.other2')}</li>
                    </ul>
                </div>


            </div>
        </section>
    )
}
