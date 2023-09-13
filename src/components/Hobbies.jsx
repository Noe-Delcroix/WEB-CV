import React from "react";

import Music from "../assets/images/hobbies/music.png";
import Gaming from "../assets/images/hobbies/gaming.jpg";
import Anime from "../assets/images/hobbies/anime.jpg";

import {LiaMusicSolid} from "react-icons/lia";
import {MdGamepad} from "react-icons/md";
import {PiTelevisionSimpleBold} from "react-icons/pi";


export const Hobbies = () => {
    return (
        <section name="hobbies"
                 className="bg-[#F4F0F0] flex justify-center">

            <div className="sm:w-8/12 w-full bg-white my-20 pb-10">

                <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">
                    <h1>Hobbies</h1>
                </div>

                <p className="w-full text-center text-gray-500 my-10">/* Things I enjoy doing when I'm not working */</p>

                <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center px-10">

                    <div className="md:w-1/3 w-full max-h-max m-5 shadow-xl bg-[#F4F0F0] hover:scale-105 duration-500">
                        <img src={Music} alt="Music" className="w-full"/>
                        <div className="flex flex-col items-center">
                            <div className="w-full px-4 flex justify-between items-center">
                                <LiaMusicSolid className="text-2xl"/>
                                <h1 className="font-bold text-2xl pt-2 uppercase text-center">Music Production</h1>
                                <LiaMusicSolid className="text-2xl"/>
                            </div>
                            <div className="w-full h-[4px] mb-5 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            <p className="text-justify px-5 pb-5">I've been composing and producing music on <b>FL Studio</b> for about 3 years. I mainly make <b>electronic bass music</b>, but I try to experiment with as many styles as I can to discover new sounds.</p>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-full max-h-max m-5 shadow-xl bg-[#F4F0F0] hover:scale-105 duration-500">
                        <img src={Gaming} alt="Gaming" className="w-full"/>
                        <div className="flex flex-col items-center">
                            <div className="w-full px-4 flex justify-between items-center">
                                <MdGamepad className="text-2xl"/>
                                <h1 className="font-bold text-2xl pt-2 uppercase text-center">Gaming</h1>
                                <MdGamepad className="text-2xl"/>
                            </div>
                            <div className="w-full h-[4px] mb-5 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            <p className="text-justify px-5 pb-5">I've always enjoyed playing video games in my spare time. I mainly like games with built-in level editors so I can express my creativity, like <b>Minecraft</b>, <b>Trackmania</b> or <b>Geometry Dash</b>. But I also enjoy playing with friends, from example on <b>Rocket League</b>.</p>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-full max-h-max m-5 shadow-xl bg-[#F4F0F0] hover:scale-105 duration-500">
                        <img src={Anime} alt="Anime" className="w-full"/>
                        <div className="flex flex-col items-center">
                            <div className="w-full px-4 flex justify-between items-center">
                                <PiTelevisionSimpleBold className="text-2xl"/>
                                <h1 className="font-bold text-2xl pt-2 uppercase text-center">Series</h1>
                                <PiTelevisionSimpleBold className="text-2xl"/>
                            </div>
                            <div className="w-full h-[4px] mb-5 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>
                            <p className="text-justify px-5 pb-5">I like to watch series to relax. If I had to choose three works, I'd recommend you watch <b><i>Gurren Lagann</i></b>, <b><i>Attack on Titans</i></b> and <b><i>Arcane</i></b>.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
