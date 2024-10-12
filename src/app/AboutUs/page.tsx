'use client';
import { FC } from "react";
import Header from "@/components/Header";
import History from '@/components/about/History'
import Culture from '@/components/about/Culture'
import Team from '@/components/about/Team'

const AboutUs: FC = () => {
    return (
        <div className="flex flex-col w-[1440px] gap-[100px]">
            <Header />
            <div className="flex justify-center pt-[120px] ">
                <h1 className="text-5xl font-bold">About Us</h1>
                
            </div>
            <History />
            <Team />
            <Culture />
            
      </div>
    )
}

export default AboutUs;