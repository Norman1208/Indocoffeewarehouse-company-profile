'use client';
import { FC } from "react";
import Header from "@/components/Header";
import History from '@/components/about/History'
import Culture from '@/components/about/Culture'
import Team from '@/components/about/Team'
// import Mobilewrapper from "@/components/mobilewrapper/Mobilewrapper";
import Footer from "@/components/Footer";

const AboutUs: FC = () => {
    return (
        // <Mobilewrapper>
        <div className="flex flex-col w-[100%] gap-[100px]">
            <Header />
            <div className="flex justify-center pt-[120px] ">
                <h1 className="text-5xl font-bold">About Us</h1>
                
            </div>
            
                <History />
                <Team />
                <Culture />
                <Footer/>
      </div>
      //</Mobilewrapper> */
    );
}

export default AboutUs;