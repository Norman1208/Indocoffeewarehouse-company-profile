'use client'
import { FC } from "react";
import Header from "@/components/Header";
import AppsDesc from '@/components/service/AppsDesc'
import CustomerSupport from '@/components/service/CustomerSupport'
import InspectionAI from '@/components/service/InspectionAI'
import Footer from '@/components/Footer'




const Services: FC  = () => {
    return (
        <div className="flex flex-col w-[100%]">
            <Header />
            <div className="flex flex-col justify-center items-center pt-[120px] pb-[50px] gap-5">
                <h1 className="text-5xl font-bold">Products & Services</h1>
                <p className="text-center w-[80%]">At INDOCOFFEE WAREHOUSE, we provide innovative solutions designed to elevate 
                    every stage of the coffee production and sourcing process. From ensuring 
                    the highest quality of coffee beans to seamless business transactions 
                    and round-the-clock support, our products and services are built to meet 
                    the needs of the modern coffee industry. Here&apos;s a closer look at what we 
                    offer:</p>
            </div>
            
            <AppsDesc />
            <CustomerSupport />
            <InspectionAI />
            <Footer />
      </div>
    );
}

export default Services;