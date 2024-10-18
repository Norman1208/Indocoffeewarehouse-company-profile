import { FC } from "react";
import Image from "next/image";
import norman from '@/assets/norman.jpg';
import bima from '@/assets/bima.png';
import hanif from '@/assets/hanif.png';
import adib from '@/assets/adib.jpg';


const Team: FC = () => {
    return (
        <div >
            <div><h1 className="text-[#543310] text-[40px] font-bold py-[30px] text-center">Meet Our Founder</h1></div>
            
            <div className="flex  flex-col justify-center gap-5 px-5 w-[100%] sm:flex-row">
                <div className="flex flex-col gap-3 justify-center ">
                    <h1 className="font-bold">Achmad Norman Firdaus</h1>
                    <Image className="rounded-full w-[200px] h-[200px]" src={norman} alt="achmad"/>
                    <h2>Founder</h2>
                    <p>With over a decade of experience in AI-driven automation, norman has been pivotal in shaping the technological vision at INDOCOFFEE WAREHOUSE. His expertise in machine learning and robotics has brought innovation to our coffee inspection systems, ensuring cutting-edge solutions that drive quality and efficiency. norman’s forward-thinking approach continues to push the boundaries of what&apos;s possible in coffee technology.</p>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <h1 className="font-bold">Bima Fahimna</h1>
                    <Image className="rounded-full w-[200px] h-[200px]" src={bima} alt="achmad"/>
                    <h2>Co-Founder</h2>
                    <p>Bima&apos;s extensive background in logistics and supply chain management is key to optimizing our processes at INDOCOFFEE WAREHOUSE. He ensures that from bean sourcing to final delivery, every step runs smoothly. Bima&apos;s focus on operational efficiency and sustainability has helped us minimize waste while delivering high-quality coffee products with precision.</p>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <h1 className="font-bold">Hanif Satrio Dwiandoko</h1>
                    <Image className="rounded-full w-[200px] h-[200px]" src={hanif} alt="achmad"/>
                    <h2>Co-Founder</h2>
                    <p>With over a decade of experience in AI-driven automation, Hanif has been pivotal in shaping the technological vision at INDOCOFFEE WAREHOUSE. His expertise in machine learning and robotics has brought innovation to our coffee inspection systems, ensuring cutting-edge solutions that drive quality and efficiency. Hanif’s forward-thinking approach continues to push the boundaries of what&apos;s possible in coffee technology.</p>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <h1 className="font-bold">Andi Hadiba Ihsan F</h1>
                    <Image className="rounded-full w-[200px] h-[200px]" src={adib} alt="achmad"/>
                    <h2>Co-Founder</h2>
                    <p>Andi excels in business development and fostering strong client relationships at INDOCOFFEE WAREHOUSE. With a deep understanding of the coffee industry and tech solutions, he tailors our services to meet the unique needs of each client. Andi’s customer-first approach has been key to expanding our partner network and ensuring long-term satisfaction, making him an invaluable asset to our growth.</p>
                </div>
            </div>
        </div>
    )
}

export default Team