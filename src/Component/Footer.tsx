import React from "react";
import { FaFacebook,FaYoutube ,FaTwitter,FaInstagram ,FaTiktok  } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-20 w-full print:hidden bg-[]">
      <div className="m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 ">
          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Core Courses</h1>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              <a href="" className="truncate">
                Programming Fundamentals
              </a>
              <a href="" className="truncate">
                Web2 Using NextJS
              </a>
              <a href="" className="truncate">
                Earn as You Learn
              </a>
            </div>
          </div>

          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Advanced Courses</h1>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              <a href="">Web 3 and Metaverse</a>
              <a href="">Cloud-Native Computing</a>
              <a href="">Artificial Intelligence (AI) and Deep Learning</a>
              <a href="">Ambient Computing and IoT</a>
              <a href="">Genomics and Bioinformatics</a>
              <a href="">Network Programmability and Automation</a>
            </div>
          </div>

          <div className="text-zinc-800">
            <h1 className="text-xl font-bold">Social Links</h1>
            <div className="my-5 flex gap-3  md:text-sm">
              <a
                href=""
                className="flex h-8 w-8 items-center justify-center rounded-full bg-#4267B2] text-white"
              >
                <FaFacebook className="text-blue-800 w-48 h-20" />
              </a>
              <a
                href=""
                className="flex h-8 w-8 items-center justify-center rounded-full bg-#4267B2] text-white"
              ><FaInstagram className="text-white-800 w-48 h-8 rounded-lg bg-[#FCAF45]"/></a>
              <a
                href=""
                className="flex h-8 w-8 items-center justify-center rounded-full bg-#4267B2] text-white"
              ><FaTwitter className="text-white-800 w-48 h-8 bg-[#27e5cb] rounded-lg "/></a>
              <a
                href=""
                className="flex h-8 w-8 items-center justify-center rounded-full bg-#4267B2] text-white"
              ><FaTiktok className="text-white-800 w-48 h-8 bg-black rounded-lg"/></a>
              <a
                href=""
                className="flex h-8 w-8 items-center justify-center rounded-full bg-#4267B2] text-white"
              ><FaYoutube className="text-white-800 w-48 h-8 bg-red-600 rounded-lg"/></a>
            </div>
            <a
              href=""
              className="mt-4 flex items-center py-1 text-main underline text-blue-800"
            >
              <div className="mr-3 h-6 w-6 space-x-3 ">
                <MdOutlineMail  className="text-blue-800 w-8 h-8" />
              </div>
              education@governorsindh.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
