import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
type Props = {
  toggle: () => void;
};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="bg-blue-500  w-full px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <span
            onClick={props.toggle}
            className="cursor-pointer text-white text-3xl"
          >
            <AiOutlineMenu />
          </span>
          {/* <h3 className="text-2xl text-white flex px-3 items-center justify-center space-x-3 mx-4">
            Navbar
          </h3> */}
          <div className="relative flex items-center ">
            <input
              type="text"
              className="px-4 py-2 rounded-lg border-0 focus-visible:outline-purple-400"
            />
            <span className="absolute top-3 right-2">
              <BiSearch />
            </span>
          </div>

          {/* <ul className="space-x-4 hidden ">
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
          </ul> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
