import { FC } from "react";
import Image from "next/image";
import inspection from '@/assets/Inspection.jpg';
import apps from '@/assets/apps.png';
import maintenance from '@/assets/maintenance.png';


const Products: FC = () => {
    return (
        <div className="py-10 bg-[F8F4E1] px-10">
            <div className="flex justify-center align-center text-4xl font-bold">
                <h1>Products</h1>
            </div>

            <div className="flex gap-5 justify-content-center items-center">
                <div className="flex flex-col gap-5 w-[500px]">
                    <Image className="w-[100px] h-[100px]" src={inspection} alt="product1" />
                    <h1 className="font-bold text-2xl">End to End coffee inspection technology</h1>
                    <p>Our End-to-End Coffee Inspection Technology ensures exceptional coffee quality by utilizing advanced AI and 
                        sensors to analyze and select the finest beans from farm to roast. With full traceability and automated quality control, we optimize every step, 
                        detecting subtle defects and maintaining consistency. This technology not only guarantees the perfect cup but also promotes sustainability by reducing 
                        waste and enhancing the supply chain, delivering premium coffee with every sip. <a className='text-blue-500'href="/InspectionTech">learn more</a></p>
                </div>
                <div className="flex flex-col gap-5 w-[500px]">
                    <Image className="w-[100px] h-[100px]" src={apps} alt="product2" />
                    <h1 className="font-bold text-2xl">Trusted Coffee Buyer and Seller </h1>
                    <p>Our Trusted Coffee Buyer and Seller app brings together a community of highly credible coffee enthusiasts, ensuring every transaction is backed by trust and transparency. 
                        Whether you&apos;re buying or selling, our platform connects you with verified partners, making quality sourcing seamless. With robust credibility checks and a commitment to excellence, 
                        we create a marketplace where every coffee deal is a step toward building lasting business relationships. Enjoy peace of mind knowing you&apos;re engaging with the most reputable buyers 
                        and sellers in the industry. <a className='text-blue-500'href="/Apps">learn more</a></p> 
                </div>
                <div className="flex flex-col gap-5 w-[500px]">
                    <Image className="w-[100px] h-[100px]" src={maintenance} alt="product3" />
                    <h1 className="font-bold text-2xl">24/7 customer support</h1>
                    <p>Our 24-Hour Support for Coffee Technology Automation Maintenance ensures your coffee operations run smoothly around the clock. With dedicated experts on hand, 
                        we provide real-time troubleshooting and proactive maintenance, minimizing downtime and keeping your systems at peak performance. Whether day or night, 
                        our team is ready to tackle any issue, so you can focus on delivering exceptional coffee without interruptions. Experience reliable support and peace of mind, 
                        knowing we’ve got your automation needs covered 24/7. <a className='text-blue-500'href="/Apps">learn more</a></p>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default Products;