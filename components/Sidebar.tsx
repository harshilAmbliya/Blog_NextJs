import React from "react";
import { AiOutlinePartition, AiFillHome } from "react-icons/ai";
import { FaMicroblog, FaBookReader } from "react-icons/fa";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { PiGitlabLogoSimpleDuotone } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-white shadow-lg  h-screen  top-0 left-0">
      <div className="flex items-center justify-between px-7 py-5 ">
        <span className="text-4xl text-blue-500 cursor-pointer ">
          <PiGitlabLogoSimpleDuotone />
        </span>
        <h3 className="text-2xl text-blue-500  cursor-pointer">Bloggy</h3>
      </div>
      <div className=" flex items-center justify-center text-center relative py-2">
        <input
          type="text"
          className="px-4  py-2 text-sm text-gray-800 border-2 border-blue-400 rounded-lg  focus-visible:outline-blue-600 "
        />
        <span className="absolute top-[17px] text-gray-600 text-xl right-7 cursor-pointer ">
          <BiSearch />
        </span>
      </div>
      <ul className="flex flex-col w-full px-5 py-5 ">
        <li className="py-2 px-8 text-white  bg-blue-700 my-2 rounded-lg flex items-center ">
          <span className="px-3">
            <AiFillHome />
          </span>
          Home
        </li>
        <li className="py-2 px-8 text-gray-700   hover:bg-blue-200 my-1 rounded-lg flex items-center">
          <span className="px-3 text-gray-700 ">
            <FaBookReader />
          </span>
          About
        </li>
        <li className="py-2 px-8 text-gray-700 hover:bg-blue-200 my-1 rounded-lg flex items-center">
          <span className="px-3">
            <FaMicroblog />
          </span>
          Blogs
        </li>
        <li className="py-2 px-8 text-gray-700 hover:bg-blue-200 my-1 rounded-lg flex items-center">
          <span className="px-3">
            <RiQuestionAnswerFill />
          </span>
          Suggestions
        </li>
        <li className="py-2 px-8 text-gray-700 hover:bg-blue-200 my-1 rounded-lg flex items-center">
          <span className="px-3">
            <IoMdContacts />
          </span>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
