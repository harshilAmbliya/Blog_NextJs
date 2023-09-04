import React from "react";
import { toggleSidebar } from "./Sidebar";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="bg-gray-500 px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h3 className="text-2xl text-white flex px-3 ">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-8 w-8 mx-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
            Navbar
          </h3>

          <ul className="space-x-4">
            <li className="inline-block">
              <a href="#" className="text-white hover:text-blue-300">
                Home
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-white hover:text-blue-300">
                About
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-white hover:text-blue-300">
                Services
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-white hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
