import {Testimonials} from "@/components/service/InspectionAIData"
import {handleNextIndex, handlePrevIndex} from '@/components/service/indexNavigation';
import { useState } from "react";

const InspectionAI = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(handleNextIndex(currentIndex, Testimonials.length));
    };

    const handlePrev = () => {
        setCurrentIndex(handlePrevIndex(currentIndex, Testimonials.length))
    }
    return (
        <div className="flex flex-col gap-5 py-[50px]  bg-[#74512D] text-[#F8F4E1] justify-center items-center">
            <h1 className="font-bold text-2xl text-center">End-to-End Coffee Inspection Technology</h1>
            <span className="text-center">Delivering coffee perfection from farm to cup.</span>

            <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
            <p>Our End-to-End Coffee Inspection Technology is designed to ensure the finest 
                coffee quality at every step of the journey. Utilizing advanced AI and sensor 
                technology, we meticulously analyze each bean from harvest to roast, 
                identifying subtle defects and selecting only the best. Our system guarantees 
                full traceability, allowing you to monitor quality and consistency from the 
                farm to the final product. This technology not only helps you deliver the 
                perfect cup of coffee but also promotes sustainability by reducing waste 
                and optimizing the supply chain.</p>

            <div>
                <h1 className="font-bold">Key Features:</h1>

                <ul className="list-disc">
                    <li>AI-driven quality control from farm to roast</li>
                    <li>Full traceability for transparency and consistency</li>
                    <li>Automated defect detection for unmatched precision</li>
                    <li>Sustainable practices that reduce waste and improve efficiency</li>  
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

export default InspectionAI