import React from "react";
import Images from "./Images";
import Tech from "./pages/Tech";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex flex-col px-20 py-5 ">
        <div className="p-10 flex flex-col ">
          {/* Badge */}
          <div className="flex items-center w-72 space-x-2.5 border border-gray-500/30 rounded-full bg-gray-500/10 p-2 text-sm text-gray-800">
            <div className="bg-white border border-gray-500/30 rounded-2xl px-3 py-1">
              <p>Update it</p>
            </div>
            <p className="pr-3">let's start your journey.</p>
          </div>
          {/* heading */}
          <h1 className="font-bold text-7xl mt-5 text-[#404258] tracking-tight">
            Master Programming{" "}
            <span className="text-[#6B728E] tracking-widest">Skills</span>{" "}
            <br /> with{" "}
            <span className="text-[#6B728E] tracking-widest">Real-World</span>{" "}
            Projects
          </h1>
          <h3 className="font-semibold text-2xl text-[#6B728E] underline mt-4 tracking-tight">
            Build, Learn, and Grow with Our Guided Coding Platform.
          </h3>
        </div>
        {/* Images component */}
        <Images />
      </div>
      <hr className="border-t border-gray-300" />
      <Tech />
      <hr className="border-t border-gray-300" />
      <Testimonial />
      <hr className="border-t border-gray-300" />
      <Footer />
    </>
  );
};

export default Hero;
