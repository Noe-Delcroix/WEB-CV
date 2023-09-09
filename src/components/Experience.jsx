import React from "react";
export const Experience = () => {
    return (
        <section name="experience"
                 className="bg-[#F4F0F0] flex justify-center">

            <div className="w-8/12 bg-white my-20 pb-32">

                <div className="p-4 text-4xl font-bold uppercase tracking-widest w-full bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">
                    <h1>Experience</h1>
                </div>

                <div className="relative wrap overflow-hidden p-10">

                    <div className="p-2 text-3xl font-extrabold uppercase tracking-widest w-full">
                        <h1>Work Experience</h1>
                    </div>
                    <div className="w-full h-[4px] mb-10 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>

                    <div className="w-[8px] ml-[-4px] absolute bg-gradient-to-t from-[#FF8F28] to-[#FFD600] h-full" style={{ left: '50%' }}></div>

                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full">
                        <div className="order-1 w-5/12 flex justify-end text-2xl font-bold text-gray-500 drop-shadow">02/89/8520</div>
                        <div className="z-10 flex items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white"></div>
                        <div className="order-1 bg-[#F4F0F0] w-5/12 px-6 py-4 shadow-xl">
                            <h3 className="mb-3 font-extrabold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900">Lorem Ipsum is ...</p>
                        </div>
                    </div>

                    {/* left timeline */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                        <div className="order-1 w-5/12 text-2xl font-bold text-gray-500 drop-shadow">01/02/2023</div>
                        <div className="z-10 flex items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white"></div>
                        <div className="order-1 bg-[#F4F0F0] w-5/12 px-6 py-4 shadow-xl">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900">Lorem Ipsum is ...</p>
                        </div>
                    </div>
                </div>

                <div className="relative wrap overflow-hidden p-10">

                    <div className="p-2 text-3xl font-extrabold uppercase tracking-widest w-full">
                        <h1>Diplomas</h1>
                    </div>
                    <div className="w-full h-[4px] mb-10 bg-gradient-to-r from-[#FF8F28] to-[#FFD600]"></div>

                    <div className="w-[8px] ml-[-4px] absolute bg-gradient-to-t from-[#FF8F28] to-[#FFD600] h-full" style={{ left: '50%' }}></div>

                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full">
                        <div className="order-1 w-5/12 flex justify-end text-2xl font-bold text-gray-500 drop-shadow">02/89/8520</div>
                        <div className="z-10 flex items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white"></div>
                        <div className="order-1 bg-[#F4F0F0] w-5/12 px-6 py-4 shadow-xl">
                            <h3 className="mb-3 font-extrabold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900">Lorem Ipsum is ...</p>
                        </div>
                    </div>

                    {/* left timeline */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
                        <div className="order-1 w-5/12 text-2xl font-bold text-gray-500 drop-shadow">01/02/2023</div>
                        <div className="z-10 flex items-center order-1 bg-gray-500 w-8 h-8 rounded-full border-4 border-white"></div>
                        <div className="order-1 bg-[#F4F0F0] w-5/12 px-6 py-4 shadow-xl">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900">Lorem Ipsum is ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
