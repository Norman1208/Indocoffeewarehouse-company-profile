// import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/overview/Overview";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="w-[1440px]">
        <Header />
        <Hero />
        <Overview />
        <Products />
        <Testimonials />
        <Footer />
      </div>
    </>

  );
}
