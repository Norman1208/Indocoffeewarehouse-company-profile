import { FC } from "react";

const Footer: FC = () => {
    return (
        <div className="bg-[#543310] flex pt-[100px] pl-[50px] pr-10 h-[70%] w-[100%] pb-5"> {/* footer */}
            <div className="flex flex-col pr-[5%]"> {/* left */}
                <div className="flex flex-col gap-3">{/* top */}
                    <span className="text-white text-3xl">Have Problems with Coffee Production or Inspection ?</span>
                    <div className="flex">
                        <span className="text-white text-3xl">let’s build it together.</span>
                    </div>
                </div>
                <div className="pt-[10%]">{/* bottom */}
                    <span className="text-white">Powered by Ganesha Indo Persada</span>
                </div>
            </div>

            <div className="flex flex-col gap-[40%] mr-0"> {/* right */}
                <div className="flex pl-[100px]">{/* top */}
                    <button className="bg-white text-black rounded-full w-[100%] h-[70px] hover:text-bold">Get in touch</button>
                </div>
                <div className="flex gap-[32px] text-gray-400">
                    <a href="https://www.linkedin.com/in/ayush-barnwal/" className="hover:text-white hover:text-bold">Linkedin</a>
                    <a href="https://twitter.com" className="hover:text-white hover:text-bold" >Twitter</a>
                    <a href="https://www.instagram.com" className="hover:text-white hover:text-bold" >Instagram</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;