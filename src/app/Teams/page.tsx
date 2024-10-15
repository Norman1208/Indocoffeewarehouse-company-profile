
'use client'
import { FC } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllTeams from "@/components/teamspage/AllTeams";


const teams: FC  = () => {
    return (
        <div className="flex flex-col w-[100%] gap-[100px]">
            <Header />
            <div className="flex flex-col justify-center items-center pt-[120px] ">
                <h1 className="text-5xl font-bold">Teams</h1>
                
            </div>
            <div className="flex justify-center items-center">
                <AllTeams/>
            </div>
            <Footer/>
            
      </div>
    );
}

export default teams;