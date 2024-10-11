import { FC } from "react";
import testimonial1 from '@/assets/testimonial1.svg';
import testimonial2 from '@/assets/testimonial2.svg';
import Image from "next/image";


const Testimonials : FC = () => {
    return (
        <div className="bg-[#AF8F6F] flex w-[1440px] p-[80px] gap-4">
            <div className="w-[839px] gap-0 font-montreal text-[40px] font-medium"> {/* left */}
                Testimonials
            </div>
            <div className="flex flex-col gap-4"> {/* right */}
                <div className=""> {/* testimoni-wrapper */}
                    <div className="text-[27px]"> {/* testimoni */}
                        "Thanks to INDOCOFFEE WAREHOUSE, our coffee operations have never been smoother! Their 24-hour support for our automation systems is exceptional and anytime we&apos;ve had an issue, 
                        they&apos;ve been there immediately to resolve it. The quality and efficiency of our production have improved drastically, and I can&apos;t imagine running our business without them."
                    </div>
                    <div className="flex gap-4"> {/* person wrapper */}
                        <Image src={testimonial1} className="w-[64px]" alt="testimonial1" />
                        <div className="flex flex-col">
                            <h3>Ayush Raj</h3>
                            <span>Coffee Producer </span>
                        </div>
                        
                    </div>
                </div>

                <div className=""> {/* testimoni-wrapper */}
                    <div className="text-[27px]"> {/* testimoni */}
                    "The Trusted Coffee Buyer and Seller app from INDOCOFFEE WAREHOUSE has been a game-changer for us. We&apos;ve built reliable partnerships with top-tier buyers, 
                    all while feeling confident in the credibility of every transaction. Their focus on trust and transparency has taken the guesswork out of sourcing quality coffee!"
                    </div>
                    <div className="flex gap-4"> {/* person wrapper */}
                        <Image src={testimonial2} className="w-[64px]" alt="testimonial2" />
                        <div className="flex flex-col">
                            <h3>Alex Cattoni</h3>
                            <span>Coffee Supplier</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;