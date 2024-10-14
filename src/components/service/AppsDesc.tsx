import { FC } from "react";


const AppsDesc: FC = () => {

    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl text-center">Trusted Coffee Buyer and Seller App</h1>
            <span className="text-center">Connecting the coffee world with trust and transparency.</span>

            <p>Our Trusted Coffee Buyer and Seller App brings together coffee enthusiasts, 
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


            <div>
                <h1>Testimonials</h1>
                <p>The Trusted Coffee Buyer and Seller app has transformed the way we do 
                    business. It&apos;s so easy to find verified partners who share our commitment 
                    to quality. Every transaction feels secure, and we&apos;ve built great 
                    relationships with some amazing suppliers!</p>
                <div>
                    <h1>Daniel T.</h1>
                    <span>Coffee Distributor</span>
                </div>
            </div>
        </div>
    )
}

export default AppsDesc;