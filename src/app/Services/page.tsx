'use client'
import { FC } from "react";
import Header from "@/components/Header";
import AppsDesc from '@/components/service/AppsDesc'
import CustomerSupport from '@/components/service/CustomerSupport'
import InspectionAI from '@/components/service/InspectionAI'




const Services: FC  = () => {
    return (
        <div className="w-[1440px]">
            <Header />
            <AppsDesc />
            <CustomerSupport />
            <InspectionAI />
      </div>
    );
}

export default Services;