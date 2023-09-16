"use client";

import React, { useState } from "react";
import { AiOutlinePartition, AiFillHome } from "react-icons/ai";
import { FaMicroblog, FaBookReader } from "react-icons/fa";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { PiGitlabLogoSimpleDuotone } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
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
    <aside
      className={`${
        isOpen ? "w-64 " : "w-16"
      } bg-gray-200 text-gray-800 p-4 transition-all duration-100 hidden lg:block ease-in-out relative overflow-y-hidden`}
    >
      <button
        className={`${
          isOpen
            ? "absolute top-5 right-2 cursor-pointer"
            : "absolute top-4 left-4 cursor-pointer"
        } text-gray-800 hover:text-blue-500 cursor-pointer`}
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
          <div className="text-2xl font-semibold mb-4 ">Menu content</div>
          <div className="overflow-y-auto max-h-[calc(100vh-7rem)]">
            <ul className="space-y-2">
              <li className="py-2 text-center bg-white rounded-lg text-blue-500">
                <Link href="/dashboard" className="block">
                  Dashboard
                </Link>
              </li>
              <li className="py-2 text-center hover:bg-white rounded-lg hover:text-blue-500 ">
                <Link href="/" className="block   ">
                  Home
                </Link>
              </li>
              <li
                className="py-2 text-center rounded-lg
hover:bg-white hover:text-blue-500"
              >
                <Link href="about" className="block  ">
                  About
                </Link>
              </li>
              <li
                className="py-2 text-center rounded-lg
hover:bg-white hover:text-blue-500"
              >
                <Link href="contact" className="block  ">
                  Contact
                </Link>
              </li>
              {/* Add more menu items here */}
            </ul>
          </div>
        </>
      )}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-gray-40 z-50"
          onClick={closeSidebar}
        ></div>
      )} */}
    </aside>
  );
};

export default Sidebar;
