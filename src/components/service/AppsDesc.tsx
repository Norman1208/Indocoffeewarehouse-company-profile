import { FC, useState } from "react";
import {Testimonials} from '@/components/service/AppsDescData';
import {handleNextIndex, handlePrevIndex} from '@/components/service/indexNavigation';

const AppsDesc: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(handleNextIndex(currentIndex, Testimonials.length));
    };

    const handlePrev = () => {
        setCurrentIndex(handlePrevIndex(currentIndex, Testimonials.length))
    }

    return (
        <div className="flex flex-col gap-5 py-[50px]  bg-[#AF8F6F] justify-center items-center">
            <h1 className="font-bold text-2xl text-center">Trusted Coffee Buyer and Seller App</h1>
            <span className="text-center">Connecting the coffee world with trust and transparency.</span>

            <div className="flex flex-col gap-5 justify-center items-center w-[90%]">
            <p className="text-center">Our Trusted Coffee Buyer and Seller App brings together coffee enthusiasts, 
                producers, and suppliers into a secure and credible marketplace. Whether 
                you&apos;re sourcing high-quality beans or finding trusted buyers, our platform
                 connects you with verified, like-minded partners. With built-in credibility 
                 checks and user ratings, you can be confident in every transaction. It&apos;s 
                 the ideal solution for building long-term, trustworthy relationships in 
                 the coffee industry.</p>

            <div>
                <h1 className="font-bold">Key Features:</h1>

                <ul className="list-disc">
                    <li>Verified buyer and seller profiles for trusted transactions</li>
                    <li>Secure marketplace for seamless sourcing and selling</li>
                    <li>Credibility checks to ensure quality partnerships</li>
                    <li>Easy communication tools for direct connections between buyers and sellers</li>  
                </ul>
            </div>
            </div>


            <div>
                
                <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
                    <h1 className="font-bold text-center pb-3">Testimonials</h1>
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

export default AppsDesc;