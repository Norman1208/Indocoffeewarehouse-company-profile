
'use client'
import { FC } from "react";
import Header from "@/components/Header";




const Services: FC  = () => {
    return (
        <div className="flex flex-col w-[1440px] gap-[100px]">
            <Header />
            <div className="flex flex-col justify-center items-center pt-[120px] ">
                <h1 className="text-5xl font-bold">Teams</h1>
                
            </div>
      </div>
    );
}

export default Services;