'use client';
import { FC } from "react";
import Header from "@/components/Header";
import History from '@/components/about/History'
import Services from '@/components/about/Services'
import Team from '@/components/about/Team'

const AboutUs: FC = () => {
    return (
        <div className="w-[1440px]">
            <Header />
            <History />
            <Services />
            <Team />
      </div>
    )
}

export default AboutUs;