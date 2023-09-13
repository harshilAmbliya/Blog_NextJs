"use client";

import React, { useState } from "react";
import { AiOutlinePartition, AiFillHome } from "react-icons/ai";
import { FaMicroblog, FaBookReader } from "react-icons/fa";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { PiGitlabLogoSimpleDuotone } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
type Props = {};

const Sidebar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    // <div className="bg-white shadow-lg  h-screen  top-0 left-0">
    //   <div className="flex items-center justify-between px-7 py-5 ">
    //     <span className="text-4xl text-blue-500 cursor-pointer ">
    //       <PiGitlabLogoSimpleDuotone />
    //     </span>
    //     <h3 className="text-2xl text-blue-500  cursor-pointer">Bloggy</h3>
    //   </div>
    //   <div className=" flex items-center justify-center text-center relative py-2">
    //     <input
    //       type="text"
    //       className="px-4  py-2 text-sm text-gray-800 border-2 border-blue-400 rounded-lg  focus-visible:outline-blue-600 "
    //     />
    //     <span className="absolute top-[17px] text-gray-600 text-xl right-7 cursor-pointer ">
    //       <BiSearch />
    //     </span>
    //   </div>
    //   <ul className="flex flex-col w-full px-5 py-5 ">
    //     <li className="py-2 px-8 text-white  bg-blue-700 my-2 rounded-lg flex items-center ">
    //       <span className="px-3">
    //         <AiFillHome />
    //       </span>
    //       Home
    //     </li>
    //     <li className="py-2 px-8 text-gray-700   hover:bg-blue-200 my-1 rounded-lg flex items-center">
    //       <span className="px-3 text-gray-700 ">
    //         <FaBookReader />
    //       </span>
    //       About
    //     </li>
    //     <li className="py-2 px-8 text-gray-700 hover:bg-blue-200 my-1 rounded-lg flex items-center">
    //       <span className="px-3">
    //         <FaMicroblog />
    //       </span>
    //       Blogs
    //     </li>
    //     <li className="py-2 px-8 text-gray-700 hover:bg-blue-200 my-1 rounded-lg flex items-center">
    //       <span className="px-3">
    //         <RiQuestionAnswerFill />
    //       </span>
    //       Suggestions
    //     </li>
    //     <li className="py-2 px-8 text-gray-700 hover:bg-blue-200 my-1 rounded-lg flex items-center">
    //       <span className="px-3">
    //         <IoMdContacts />
    //       </span>
    //       Contact
    //     </li>
    //   </ul>
    // </div>
    // <aside
    //   className={`${
    //     isOpen ? 'w-64' : 'w-16'
    //   } bg-blue-200 text-gray-800 p-4 transition-all duration-500 ease-in-out `}
    // >
    //   {isOpen && (
    //     <>
    //       <div className="text-2xl font-semibold mb-4">Dashboard Menu</div>
    //       <ul className="space-y-2">
    //         <li>
    //           <a href="#" className="block hover:text-blue-500">
    //             Dashboard
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block hover:text-blue-500">
    //             Posts
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block hover:text-blue-500">
    //             Categories
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block hover:text-blue-500">
    //             Tags
    //           </a>
    //         </li>
    //       </ul>
    //     </>
    //   )}
    //   <button
    //     className={`${
    //       isOpen ? 'absolute top-4 right-4' : 'absolute top-4 left-4'
    //     } text-gray-800 hover:text-blue-500`}
    //     onClick={toggleSidebar}
    //   >
    //     {isOpen ? (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M6 18L18 6M6 6l12 12"
    //         />
    //       </svg>
    //     ) : (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M4 6h16M4 12h16m-7 6h7"
    //         />
    //       </svg>
    //     )}
    //   </button>
    //   {isOpen && (
    //     <div
    //       className="fixed inset-0 bg-gray-400 opacity-20 z-50"
    //       onClick={closeSidebar}
    //     ></div>
    //   )}
    // </aside>
    <aside
      className={`${
        isOpen ? "w-64 " : "w-16"
      } bg-gray-200 text-gray-800 p-4 transition-all duration-100 hidden lg:block ease-in-out relative overflow-y-hidden`}
    >
      <button
        className={`${
          isOpen ? "absolute top-4 right-4 " : "absolute top-4 left-4"
        } text-gray-800 hover:text-blue-500`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <>
          <div className="text-2xl font-semibold mb-4 ">Dashboard Menu</div>
          <div className="overflow-y-auto max-h-[calc(100vh-7rem)]">
            <ul className="space-y-2">
              <li>
                <a href="#" className="block hover:text-blue-500">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-500">
                  Posts
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-500">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-500">
                  Tags
                </a>
              </li>
              {/* Add more menu items here */}
            </ul>
          </div>
        </>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-40 z-50"
          onClick={closeSidebar}
        ></div>
      )}
    </aside>
  );
};

export default Sidebar;
