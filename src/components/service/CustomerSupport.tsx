import { FC, useState } from "react"
import {Testimonials} from "@/components/service/CustomerSupportData"
import { handleNextIndex, handlePrevIndex } from "./indexNavigation";

const CustomerSupport: FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(handleNextIndex(currentIndex, Testimonials.length));
    };

    const handlePrev = () => {
        setCurrentIndex(handlePrevIndex(currentIndex, Testimonials.length))
    };
    return (
        <div className="flex flex-col gap-5 py-[50px] bg-[#543310] text-[#F8F4E1] justify-center items-center">
            <h1 className="font-bold text-2xl text-center">24-Hour Support for Coffee Technology Automation Maintenance</h1>
            <span className="text-center">Keeping your coffee operations running smoothly—day or night.</span>

            <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
            <p className="text-center">At INDOCOFFEE WAREHOUSE, we know how critical it is for your coffee production systems
                 to be operational at all times. That&apos;s why our 24-Hour Support for Coffee 
                 Technology Automation Maintenance is available to ensure your operations run 
                 seamlessly. Whether you encounter an issue or need routine maintenance, our 
                 team of experts is ready to provide real-time troubleshooting and proactive 
                 service. With our support, you can minimize downtime and keep your systems 
                 performing at their best, allowing you to focus on delivering exceptional 
                 coffee to your customers.</p>

            <div>
                <h1 className="font-bold">Key Features:</h1>

                <ul className="list-disc">
                    <li>24/7 availability for real-time troubleshooting</li>
                    <li>Proactive maintenance to prevent system breakdowns</li>
                    <li>Experienced support team dedicated to your coffee operations</li>
                    <li>Quick response times to minimize downtime</li>  
                </ul>
            </div>
            </div>

            <div>
                <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
                    <h1 className="font-bold text-center pb-3 text-black">Testimonials</h1>
                    <div className="mb-6">
                        <p className="text-lg text-gray-700">{Testimonials[currentIndex].message}</p>
                        <p className="mt-4 font-bold text-gray-900">
                            {Testimonials[currentIndex].name}, {Testimonials[currentIndex].role}
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 bg-black text-white rounded-full hover:bg-green-600 duration-300 mr-2"
                            >
                                ◀
                            </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-black text-white rounded-full hover:bg-green-600 duration-300 ml-2">
                                ▶
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CustomerSupport;