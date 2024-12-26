import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center flex-col py-28 px-10">
        <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl text-[#044E83] ">
          Governor Sindh
        </h1>
        <h1 className=" whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[#044E83]">
          Kamran Khan Tessori
        </h1>
        <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-extrabold leading-[2rem] tracking-wider  text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[#1dbdb6]">
          Certified Cloud
          <br />
          Applied Generative AI
          <br />
          Engineer (GenEng)
        </h1>
        <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left text-[#044E83]">
          Earn up to $5,000 / month
        </p>
        <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left text-[#044E83]">
          Now admissions are open in Hyderabad
        </p>
        <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
          <a className="w-full md:w-auto" href="">
            <button className="w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52 bg-blue-800">
              APPLY NOW
            </button>
          </a>

          <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
            <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
              <div className="w-40 font-extrabold">562,143</div>
              <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">
                Accepted Applications
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[600px]">
        <img src="governor.png" alt="" className="w-[800px] py-8" />
      </div>
    </div>
  );
};

export default HeroSection;
