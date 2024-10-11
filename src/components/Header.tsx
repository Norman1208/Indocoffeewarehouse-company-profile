import { FC } from "react";
import Logo from '@/assets/indo_coffee_warehouse_logo.png';
import Image from "next/image";

const Header: FC = () => {
    return (
        <header className="absolute top-0 left-0 w-[calc(100%-160px)] py-6 px-20 z-[2]">
            <nav className="flex justify-between text-lg font-normal">
                <div>
                    <Image onClick={() => window.location.href = "/"} className='w-20' src={Logo} alt="logo" />
                </div>
                <div className="flex gap-10">
                    <a href="/AboutUs">About Us</a>
                    <a href="/Services">Services</a>
                    <a href="/contact">Teams</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;