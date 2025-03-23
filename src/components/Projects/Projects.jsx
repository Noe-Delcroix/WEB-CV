import React,{ useState } from 'react';

import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';

import Forgor from '../../assets/images/projects/forgor.png';
import Deploy from '../../assets/images/projects/deploy.png';
import Lamazon from '../../assets/images/projects/lamazon.png';
import MinecraftClone from '../../assets/images/projects/minecraft-clone.png';
import TileBasedPlatformer from '../../assets/images/projects/tile-based-platformer.png';
import JeuDuConfinement from '../../assets/images/projects/jeu-du-confinement.png';
import ThreeDVisualizer from '../../assets/images/projects/3d-visualizer.png';
import Lightflix from '../../assets/images/projects/lightflix.png';
import LaCarteAuxTresors from '../../assets/images/projects/la-carte-aux-tresors.jpg';

import Project from './Project';
import TranslatedText from "../TranslatedText";

export const Projects = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const slides = [
        {
            backgroundImage: Forgor,
            component: <Project name="forgor"
                                isSchoolProject={true}
                                technologies={["C#","Unity","VR"]}
                                githubLink="https://github.com/theoernould/forgor"/>,
        },
        {
            backgroundImage: Lamazon,
            component: <Project name="lamazon"
                                isSchoolProject={true}
                                technologies={["React","AWS cloud","Terraform"]}
                                githubLink="https://github.com/CyrilDemand/projet_cloud_aws"/>,
        },
        {
            backgroundImage: Deploy,
            component: <Project name="deploy"
                                isSchoolProject={true}
                                technologies={["React","Docker","WebSockets","Webhooks"]}
                                githubLink="https://github.com/CyrilDemand/Delivecrous_front_deploy"/>,
        },
        {
            backgroundImage: MinecraftClone,
            component: <Project name="minecraftclone"
                                isSchoolProject={false}
                                technologies={["C# .Net 7","OpenGL"]}
                                githubLink="https://github.com/Noe-Delcroix/MinecraftClone"/>,
        },
        {
            backgroundImage: LaCarteAuxTresors,
            component: <Project name="treasuremap"
                                isSchoolProject={true}
                                technologies={["Flutter","Dart","Firebase"]}
                                githubLink="https://github.com/Noe-Delcroix/la_carte_aux_tresors"/>
        },
        {
            backgroundImage: Lightflix,
            component: <Project name="lightflix"
                                isSchoolProject={true}
                                technologies={["HTML","CSS","JavaScript"]}
                                githubLink="https://github.com/Noe-Delcroix/Lightflix"/>
        },
        {
            backgroundImage: ThreeDVisualizer,
            component: <Project name="3d"
                                isSchoolProject={true}
                                technologies={["Java","JavaFX"]}
                                githubLink="https://github.com/Noe-Delcroix/Visualisateur-3D"/>
        },
        {
            backgroundImage: JeuDuConfinement,
            component: <Project name="lockdown"
                                isSchoolProject={false}
                                technologies={["JavaScript","p5.js"]}
                                githubLink="https://github.com/Noe-Delcroix/Le-Jeu-Du-Confinement"
                                onlineLink="https://editor.p5js.org/Noway/full/650cnr2WN"/>
        },
        {
            backgroundImage: TileBasedPlatformer,
            component: <Project name="platformer"
                                isSchoolProject={false}
                                technologies={["JavaScript","p5.js"]}
                                githubLink="https://github.com/Noe-Delcroix/Tile-Based-Platformer"
                                onlineLink="https://editor.p5js.org/Noway/full/evY_AHGk1"/>
        },
    ];

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && activeIndex < slides.length - 1) {
            goToSlide(activeIndex + 1);
        } else if (isRightSwipe && activeIndex > 0) {
            goToSlide(activeIndex - 1);
        }
    };

    const goToSlide = (index) => {
        if (index >= 0 && index < slides.length) {
            setActiveIndex(index);
        }
    };

    return (
        <div>
            <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">
                <TranslatedText as="h1" translationKey="nav.projects"/>
            </div>

            <section name='projects' className="w-full h-screen">
                <div className="relative w-full h-full overflow-hidden"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div 
                        className="absolute w-full h-full transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: `translateX(-${(activeIndex * 100) / slides.length}%)`,
                            width: `${slides.length * 100}%`,
                            display: 'flex'
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div 
                                key={index}
                                className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                                style={{ 
                                    backgroundImage: `url(${slide.backgroundImage})`,
                                    width: `${100 / slides.length}%`
                                }}
                            >
                                {slide.component}
                            </div>
                        ))}
                    </div>

                    {activeIndex > 0 && (
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-full">
                            <button 
                                onClick={() => goToSlide(activeIndex - 1)} 
                                className="text-white p-2 hover:scale-110 duration-500 h-full"
                            >
                                <IoIosArrowBack className="text-4xl"/>
                            </button>
                        </div>
                    )}

                    {activeIndex < slides.length - 1 && (
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full">
                            <button 
                                onClick={() => goToSlide(activeIndex + 1)} 
                                className="text-white p-2 hover:scale-110 duration-500 h-full"
                            >
                                <IoIosArrowForward className="text-4xl"/>
                            </button>
                        </div>
                    )}

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                className="h-8 w-8 flex items-center justify-center hover:scale-110 duration-200"
                                onClick={() => goToSlide(index)}
                            >
                                <div className={`h-1 w-8 ${
                                    index === activeIndex 
                                        ? 'bg-white' 
                                        : 'bg-white/40 hover:bg-white/60'
                                }`}
                                ></div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};