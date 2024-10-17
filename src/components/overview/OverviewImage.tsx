import {motion} from "framer-motion";
import { FC } from "react";
import Image from "next/image";

const OverviewImage:FC = () => {
    const ImageCol = [
        '/image1.png',
        '/image2.png',
        '/image3.png',
        '/image4.png',
        '/image5.png',
        '/image6.png',
        '/image7.png',
    ]

    return (
        <div className="container pb-10">
            <div className="flex gap-[20px] pb-10">
                <motion.div 
                    initial={{ x:0}}
                    animate={{ x: '-100%'}}
                    transition={{duration: 200, repeat: Infinity, ease:"linear"}}
                    className="flex flex-shrink-0 gap-10">
                        {ImageCol.map((image, index) => {
                            return <Image className="border-2 bg-[#F8F4E1] py-10 px-10" width={500} height={150} key={index} src={image} alt="image" />
                        })}
                </motion.div>
                <motion.div 
                    initial={{ x:0}}
                    animate={{ x: '-100%'}}
                    transition={{duration: 200, repeat: Infinity, ease:"linear"}}
                    className="flex flex-shrink-0 gap-10">
                        {ImageCol.map((image, index) => {
                            return <Image className="border-2 bg-[#F8F4E1] py-10 px-10" width={500} height={150} key={index} src={image} alt="image" />
                        })}
                </motion.div>
            </div>

        </div>
    )
}

export default OverviewImage;