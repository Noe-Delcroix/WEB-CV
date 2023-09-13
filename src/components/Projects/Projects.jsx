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

export const Projects = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            backgroundImage: MinecraftClone,
            component: <Project title="Minecraft Clone"
                                date="September 2023"
                                isSchoolProject={false}
                                description="Minecraft remade from scratch in C# with OpenGL. Includes a custom game engine and a world generator"
                                technologies={["C# .Net 7","OpenGL"]}
                                githubLink="https://github.com/Noe-Delcroix/MinecraftClone"/>,
        },
        {
            backgroundImage: LaCarteAuxTresors,
            component: <Project title='"La carte aux trésors" (Treasure map)'
                                date="June 2023"
                                isSchoolProject={true}
                                description="Cross-platform geocaching application, with connection system, based on Firebase database"
                                technologies={["Flutter","Dart","Firebase"]}
                                githubLink="https://github.com/Noe-Delcroix/la_carte_aux_tresors"/>
        },
        {
            backgroundImage: Lightflix,
            component: <Project title="LightFlix"
                                date="March 2022"
                                isSchoolProject={true}
                                description="Online series catalog with search page, series information and episode listings. Uses TVMaze API for series information and statistics"
                                technologies={["HTML","CSS","JavaScript"]}
                                githubLink="https://github.com/Noe-Delcroix/Lightflix"/>
        },
        {
            backgroundImage: ThreeDVisualizer,
            component: <Project title="3D Visualizer"
                                date="December 2021"
                                isSchoolProject={true}
                                description="3D file visualization software (.ply) with integrated file library and extensive display customization"
                                technologies={["Java","JavaFX"]}
                                githubLink="https://github.com/Noe-Delcroix/Visualisateur-3D"/>
        },
        {
            backgroundImage: AntSimulation,
            component: <Project title="Ant Simulation"
                                date="March 2021"
                                isSchoolProject={false}
                                description="A program designed to simulate the behavior of ants as they go back and forth to collect food and return it to the colony, using pheromones to orient themselves."
                                technologies={["Java","Processing"]}
                                githubLink="https://github.com/Noe-Delcroix/Ant-Simulation"/>
        },
        {
            backgroundImage: JeuDuConfinement,
            component: <Project title='"Le Jeu du confinement" (Lockdown game)'
                                date="May 2020"
                                isSchoolProject={false}
                                description="An 8bit-style arcade game. Try to do your shopping in a supermarket while respecting the social distancing rules."
                                technologies={["JavaScript","p5.js"]}
                                githubLink="https://github.com/Noe-Delcroix/Le-Jeu-Du-Confinement"
                                onlineLink="https://editor.p5js.org/Noway/full/650cnr2WN"/>
        },
        {
            backgroundImage: TileBasedPlatformer,
            component: <Project title="Tile-Based Platformer"
                                date="March 2020"
                                isSchoolProject={false}
                                description="A 2D platformer with simplistic graphics, an integrated level editor and a level-saving system."
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