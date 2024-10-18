import { FC } from "react";
import Image from "next/image";
import Heroimg from '@/assets/hero-img.jpg';


const Hero: FC = () => {
    return (
        <div className='relative flex-col gap-10'>
            <div className=" flex gap-3 pt-[150px] w-[calc(100%-160px)] py-6 px-[100px] z-[2] justify-center align-center">
                <h1 className="text-5xl">We provide the best solution for coffee producers and consumers!</h1>
                <p className="align-bottom"><span>INDOCOFFEE WAREHOUSE</span> provide customized services for customers around the world from 50+ leading coffee industries</p>
            </div>

            <div className="flex justify-center align-center">
                <Image src={Heroimg} alt="hero-image" />
            </div>
        </div>
    );
}

export default Hero;