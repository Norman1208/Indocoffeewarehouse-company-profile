import { FC } from "react";
import Image from "next/image";
import norman from '@/assets/norman.jpg';
import bima from '@/assets/bima.png';
import hanif from '@/assets/hanif.png';
import adib from '@/assets/adib.jpg';


const Team: FC = () => {
    return (
        <div >
            <div><h1 className=" text-[40px] font-bold py-[30px] text-center">Meet Our Founder</h1></div>
            
            <div className="flex justify-center gap-10">
                <div className="flex flex-col gap-3 justify-center">
                    <h1>Achmad Norman Firdaus</h1>
                    <Image className="rounded-full w-[200px] h-[200px]" src={norman} alt="achmad"/>
                    <h2>Founder</h2>
                    <p>With over 15 years of experience in both the coffee industry and tech innovation, norman founded INDOCOFFEE WAREHOUSE with a vision to merge these two worlds. 
                        His leadership has been the cornerstone of our rapid growth and impact.</p>
                </div>
                <div>
                    <h1>Achmad Norman Firdaus</h1>
                    <Image className="rounded-full w-[200px] h-[200px]" src={bima} alt="achmad"/>
                    <h2>Founder</h2>
                    <p>With over 15 years of experience in both the coffee industry and tech innovation, norman founded INDOCOFFEE WAREHOUSE with a vision to merge these two worlds. 
                        His leadership has been the cornerstone of our rapid growth and impact.</p>
                </div>
                <div>
                    <h1>Achmad Norman Firdaus</h1>
                    <Image className="rounded-full w-[200px] h-[200px]" src={hanif} alt="achmad"/>
                    <h2>Founder</h2>
                    <p>With over 15 years of experience in both the coffee industry and tech innovation, norman founded INDOCOFFEE WAREHOUSE with a vision to merge these two worlds. 
                        His leadership has been the cornerstone of our rapid growth and impact.</p>
                </div>
                <div>
                    <h1>Achmad Norman Firdaus</h1>
                    <Image className="rounded-full w-[200px] h-[200px]" src={adib} alt="achmad"/>
                    <h2>Founder</h2>
                    <p>With over 15 years of experience in both the coffee industry and tech innovation, norman founded INDOCOFFEE WAREHOUSE with a vision to merge these two worlds. 
                        His leadership has been the cornerstone of our rapid growth and impact.</p>
                </div>
            </div>
        </div>
    )
}

export default Team