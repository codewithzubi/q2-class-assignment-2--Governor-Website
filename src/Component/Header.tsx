import React from "react";

const Header = () => {
  return (
    <div className="bg-[#044E83] sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden">
      <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
        <a href="">
        <img alt="logo" className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]" style={{}} src="logo2.png"/>
        </a>
        <h1 className="text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">
          Tuition Free Program
        </h1>
        <div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10">
          <a href="">
            <div>Home</div>
          </a>
          <a href="">
            <div>Apply</div>
          </a>
          <a href="">
            <div>Result</div>
          </a>
          <a href="">
            <div>Courses</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

// export default function Navbar() {
//   return (
//     <nav className="bg-[#124e87] p-2">
//       <div className="container mx-auto flex justify-between items-center">
//       <img src="logo1.png" alt="NOT FOUND" className="w-14 mr-24"/>
//         <a href="/" className="flex items-center">
//           <span className="text-white text-xl font-bold">
//             Tuition Free Education Program on Latest Technologies
//           </span>
//         </a>
//         <ul className="flex space-x-6">
//           <li>
//             <a href="/" className="text-white hover:text-gray-300">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/apply" className="text-white hover:text-gray-300">
//               Apply
//             </a>
//           </li>
//           <li>
//             <a href="/jobs" className="text-white hover:text-gray-300">
//               Jobs
//             </a>
//           </li>
//           <li>
//             <a href="/result" className="text-white hover:text-gray-300">
//               Result
//             </a>
//           </li>
//           <li>
//             <a href="/courses" className="text-white hover:text-gray-300">
//               Courses
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
