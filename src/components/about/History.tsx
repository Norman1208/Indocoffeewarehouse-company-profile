import { FC } from "react"
import Image from "next/image"
import img2021_2 from '@/assets/2021_2.png';
import img2021 from '@/assets/2021.png';
import img2022 from '@/assets/2022.png';
import img2023 from '@/assets/2023.jpeg';
import img2024 from '@/assets/2024.jpeg';


const History: FC = () => {

    return (
        <div className="px-[100px] bg-[#AF8F6F] py-10">
            <h1 className="text-[#F8F4E1] text-[40px] font-bold py-[30px] text-center">Our Journey: From Passion to Innovation</h1>

            <div > 
                <div className="flex flex-col sm:flex-row">
                    <div className="w-[50%] justify-center items-center">
                        <div className="flex justify-center gap-3">
                            <Image src={img2021_2} alt="manual inspection" className="w-[30%]"/>
                            <Image src={img2021} alt="manual inspection" className="w-[30%]"/>
                        </div>
                        
                    </div>
                    <div className="w-[50%] gap-2">
                        <h1 className="text-center font-bold">2021 : Manual Inspection & build Automation Concept</h1>
                        <p>In 2021, the coffee industry was still heavily reliant on manual inspection 
                            by human experts to assess the quality of coffee beans. Trained inspectors 
                            or workers would visually inspect the beans to identify defects, such as 
                            discoloration, cracks, insect damage, or deformities. This process required 
                            a significant amount of time and effort, and the inspectors would also 
                            calculate defect rates to determine the quality grade of the batch. 
                            While human expertise brought a level of nuance and experience to the task, 
                            it was labor-intensive and could lead to inconsistencies due to subjective 
                            judgment. Additionally, the scalability of manual inspection was limited, 
                            especially as demand for high-quality coffee continued to grow.</p>
                    </div>
                </div>

                <div className="flex pt-10 flex-col-reverse sm:flex-row">
                    <div className="w-[50%] gap-2">
                        <h1 className="text-center font-bold">2022 : First Prototype Development</h1>
                        <p>In 2022, the first major step towards automating coffee bean inspection was 
                            achieved by developing a controlled chamber. This chamber was designed to 
                            capture high-quality data of coffee beans to detect defects more efficiently. 
                            The initial development of the automation system allowed machines to take 
                            over the labor-intensive task of visual inspection, using this data to begin 
                            building a more scalable solution for quality control. This represented a 
                            crucial transition from manual to semi-automated processes, laying the 
                            groundwork for future innovations in AI-driven coffee inspection.</p>
                    </div>
                    <div className="w-[50%] justify-center items-center">
                        <div className="flex justify-center gap-3">
                            <Image src={img2022} alt="manual inspection" className="w-[50%]"/>
                        </div>
                        
                    </div>
                </div>


                <div className="flex pt-10 flex-col sm:flex-row">
                    
                    <div className="w-[50%] justify-center items-center">
                        <div className="flex justify-center gap-3">
                            <Image src={img2023} alt="manual inspection" className="w-[50%]"/>
                        </div>
                        
                    </div>
                    <div className="w-[50%] gap-2">
                        <h1 className="text-center font-bold">2023 : Machine Learning Optimization and Larger Chambers</h1>
                        <p>By 2023, the focus shifted towards optimizing the machine learning model 
                            that powered the inspection process. With a refined algorithm, the system 
                            became more accurate in detecting defects and ensuring consistency in coffee 
                            bean quality. A larger controlled chamber was also built to accommodate more 
                            coffee beans at once, enabling faster processing and inspections. This 
                            improvement significantly enhanced productivity and reduced the time required 
                            to analyze large batches of beans, marking a major step forward in the 
                            automation of coffee quality control.</p>
                    </div>
                </div>


                <div className="flex pt-10 flex-col-reverse sm:flex-row">
                    <div className="w-[50%] gap-2">
                        <h1 className="text-center font-bold">2024 : Development Negative Pressure Suction For Faster Setup</h1>
                        <p>In 2024, further innovations were introduced with the integration of a negative
                             pressure suction system. This technology was designed to optimize the region 
                             of interest (ROI) for the system’s computer vision, allowing for faster and 
                             more precise identification of defects in coffee beans. This advancement not 
                             only improved the speed of the inspection process but also made the setup of 
                             coffee beans in the controlled chamber much faster and more efficient. 
                             The combination of computer vision, negative pressure, and machine learning 
                             created a highly optimized and fully automated coffee bean inspection system.</p>
                    </div>
                    <div className="w-[50%] justify-center items-center">
                        <div className="flex justify-center gap-3">
                            <Image src={img2024} alt="manual inspection" className="w-[50%]"/>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default History