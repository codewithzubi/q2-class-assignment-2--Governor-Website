import React from "react";

const Courses = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">
        Advanced Courses
      </h1>
      <div className="grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
        <a href="" className="hover:scale-105 duration-200 transition-all">
          <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
            <div>
              <img src="img4.jpg" alt="" />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <h2>Artificial Intelligence</h2>
            </div>
          </div>
        </a>

        <a href="" className="hover:scale-105 duration-200 transition-all">
          <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
            <div>
              <img src="img5.jpg" alt="" />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <h2>Web 3 and Metaverse</h2>
            </div>
          </div>
        </a>

        <a href="" className="hover:scale-105 duration-200 transition-all">
          <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
            <div>
              <img src="img6.jpg" alt="" />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <h2>Cloud-Native Computing</h2>
            </div>
          </div>
        </a>

        <a href="" className="hover:scale-105 duration-200 transition-all">
          <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
            <div>
              <img src="img7.jpg" alt="" />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <h2>Ambient Computing and IoT</h2>
            </div>
          </div>
        </a>

        <a href="" className="hover:scale-105 duration-200 transition-all">
          <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
            <div>
              <img src="img8.jpg" alt="" />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <h2>Genomics and Bioinformatics</h2>
            </div>
          </div>
        </a>

        <a href="" className="hover:scale-105 duration-200 transition-all">
          <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
            <div>
              <img src="img9.jpg" alt="" />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <h2>Network Programmability and Automation</h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Courses;
