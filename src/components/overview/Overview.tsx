import { FC } from "react"; 
import OverviewImage from "./OverviewImage";



const Overview: FC = () => {
    return (
        <div className="pt-10 bg-[#AF8F6F] pb-10">
            <div className="px-[100px] ">
                <h1 className="text-[#F8F4E1] text-[40px] font-bold py-[30px] text-center">Overview</h1>

                <p className="px-[100px] pb-[50px] font-bold">INDOCOFFEE WAREHOUSE was founded with a simple yet powerful mission: to revolutionize the coffee industry 
                    by integrating cutting-edge technology with time-honored craftsmanship. 
                    What started as a small group of coffee enthusiasts with a vision to enhance quality control has grown 
                    into a global leader in coffee inspection, automation, and marketplace solutions. 
                    Over the years, we&apos;ve reached key milestones—introducing our End-to-End Coffee Inspection Technology, 
                    launching the Trusted Coffee Buyer and Seller app, and expanding our 24-hour support services. 
                    Our growth is fueled by a deep commitment to quality, innovation, and sustainability, ensuring that we
                     not only serve the industry but help shape its future.</p>

            </div>

            <div>
                <h1 className="text-center pb-10 font-bold text text-[#F8F4E1] text-[20px]">Several Results</h1>
                <OverviewImage />
            </div>

            <div>
                <h1 className="font-bold text-center text-[25px]">&quot;Fueling Innovation, Growing Together—With Integrity at Every Step.&quot;</h1>
            </div>
        </div>
    );
}

export default Overview;