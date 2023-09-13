import React,{ useState } from 'react';
import Background from "../../assets/images/background2.jpg";

import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';

import MinecraftClone from '../../assets/images/projects/minecraft-clone.png';
import TileBasedPlatformer from '../../assets/images/projects/tile-based-platformer.png';
import JeuDuConfinement from '../../assets/images/projects/jeu-du-confinement.png';
import AntSimulation from '../../assets/images/projects/ant-simulation.png';
import ThreeDVisualizer from '../../assets/images/projects/3d-visualizer.png';
import Lightflix from '../../assets/images/projects/lightflix.png';
import LaCarteAuxTresors from '../../assets/images/projects/la-carte-aux-tresors.jpg';

import Project from './Project';
import {useTranslation} from "react-i18next";

export const Projects = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useTranslation();

    const slides = [
        {
            backgroundImage: MinecraftClone,
            component: <Project title={t("projects.minecraftclone.title")}
                                date={t("projects.minecraftclone.date")}
                                isSchoolProject={false}
                                description={t("projects.minecraftclone.desc")}
                                technologies={["C# .Net 7","OpenGL"]}
                                githubLink="https://github.com/Noe-Delcroix/MinecraftClone"/>,
        },
        {
            backgroundImage: LaCarteAuxTresors,
            component: <Project title={t("projects.treasuremap.title")}
                                date={t("projects.treasuremap.date")}
                                isSchoolProject={true}
                                description={t("projects.treasuremap.desc")}
                                technologies={["Flutter","Dart","Firebase"]}
                                githubLink="https://github.com/Noe-Delcroix/la_carte_aux_tresors"/>
        },
        {
            backgroundImage: Lightflix,
            component: <Project title={t("projects.lightflix.title")}
                                date={t("projects.lightflix.date")}
                                isSchoolProject={true}
                                description={t("projects.lightflix.desc")}
                                technologies={["HTML","CSS","JavaScript"]}
                                githubLink="https://github.com/Noe-Delcroix/Lightflix"/>
        },
        {
            backgroundImage: ThreeDVisualizer,
            component: <Project title={t("projects.3d.title")}
                                date={t("projects.3d.date")}
                                isSchoolProject={true}
                                description={t("projects.3d.desc")}
                                technologies={["Java","JavaFX"]}
                                githubLink="https://github.com/Noe-Delcroix/Visualisateur-3D"/>
        },
        {
            backgroundImage: AntSimulation,
            component: <Project title={t("projects.ant.title")}
                                date={t("projects.ant.date")}
                                isSchoolProject={false}
                                description={t("projects.ant.desc")}
                                technologies={["Java","Processing"]}
                                githubLink="https://github.com/Noe-Delcroix/Ant-Simulation"/>
        },
        {
            backgroundImage: JeuDuConfinement,
            component: <Project title={t("projects.lockdown.title")}
                                date="May 2020"
                                isSchoolProject={false}
                                description={t("projects.lockdown.desc")}
                                technologies={["JavaScript","p5.js"]}
                                githubLink="https://github.com/Noe-Delcroix/Le-Jeu-Du-Confinement"
                                onlineLink="https://editor.p5js.org/Noway/full/650cnr2WN"/>
        },
        {
            backgroundImage: TileBasedPlatformer,
            component: <Project title={t("projects.platformer.title")}
                                date={t("projects.platformer.date")}
                                isSchoolProject={false}
                                description={t("projects.platformer.desc")}
                                technologies={["JavaScript","p5.js"]}
                                githubLink="https://github.com/Noe-Delcroix/Tile-Based-Platformer"
                                onlineLink="https://editor.p5js.org/Noway/full/evY_AHGk1"/>
        },
    ];

    const goToSlide = (index) => {
        if (index < 0) {
            setActiveIndex(slides.length - 1);
        } else if (index >= slides.length) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section name='projects'
                 className="w-full h-screen bg-cover bg-center bg-fixed bg-no-repeat flex flex-col items-center justify-center"
                 style={{ backgroundImage: `url(${Background})` }}>

            <div className="relative w-full h-full sm:w-3/4 sm:h-3/4 bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: `url(${slides[activeIndex].backgroundImage})` }}>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <button onClick={() => goToSlide(activeIndex - 1)} className="bg-black text-white p-2 hover:scale-110 duration-500"><IoIosArrowBack className="text-3xl"/></button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button onClick={() => goToSlide(activeIndex + 1)} className="bg-black text-white p-2 hover:scale-110 duration-500"><IoIosArrowForward className="text-3xl"/></button>
                </div>

                {slides[activeIndex].component}

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            className={`h-4 w-4 bg-white rounded-full hover:scale-125 duration-200 ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>

        </section>
    );
};