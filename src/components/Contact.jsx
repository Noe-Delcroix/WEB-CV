
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BiLogoDiscord} from "react-icons/bi";

export const Contact = () => {
    return (
        <section name="contact"
                 className="bg-gradient-to-r from-[#FF8F28] to-[#FFD600] flex justify-center">

            <div className="sm:w-2/3 w-full my-20 pb-10">
                <div className="flex flex-row flex-wrap justify-around">
                    <a href="https://github.com/Noe-Delcroix" className="border-2 border-black m-4 px-2 py-1 text-2xl flex justify-center items-center drop-shadow-xl">
                        <FaGithub className="pr-1"/> GitHub
                    </a>

                    <a href="mailto:noe.delcroix59@gmail.com" className="border-2 border-black m-4 px-2 py-1 text-2xl flex justify-center items-center drop-shadow-xl">
                        <HiOutlineMail className="pr-1"/> Email : noe.delcroix59@gmail.com
                    </a>

                    <a href="https://www.linkedin.com/in/no%C3%A9-delcroix-0ab6411b8/" className="border-2 border-black m-4 px-2 py-1 text-2xl flex justify-center items-center drop-shadow-xl">
                        <FaLinkedin className="pr-1"/> LinkedIn
                    </a>

                    <div className="border-2 border-black m-4 px-2 py-1 text-2xl flex justify-center items-center drop-shadow-xl">
                        <HiOutlineMail className="pr-1"/> Discord : @noway7043
                    </div>
                </div>
            </div>
        </section>
    )
}
