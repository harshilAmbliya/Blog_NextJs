import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
type Props = {
  togglestatus: boolean;
  toggle: () => void;
};

import { AvatarGenerator } from "random-avatar-generator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PiGitlabLogoSimpleDuotone } from "react-icons/pi";

const Navbar = (props: Props) => {
  const generator = new AvatarGenerator();
  const image = generator.generateRandomAvatar();

  return (
    <div>
      <nav className="bg-blue-500  w-full px-4 py-6">
        <div className="container mx-auto flex justify-between items-center ">
          <span
            onClick={props.toggle}
            className="cursor-pointer hidden md:block text-white text-3xl duration-500 transition-all delay-300"
          >
            {props.togglestatus ? <AiOutlineClose /> : <AiOutlineMenu />}
          </span>
          <div className="md:hidden text-3xl  px-2 text-white">
            <PiGitlabLogoSimpleDuotone />
          </div>

          <div className="flex px-3 items-center justify-center space-x-3 focus-visible:outline-none">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="w-12 h-12 bg-green-300 rounded-full">
                  <img
                    src={image}
                    className="w-full h-full focus-visible:outline-none"
                    alt=""
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex items-center justify-start">
                  <span className="px-2">
                    <BiSolidUser />
                  </span>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-start">
                  <span className="px-2">
                    <BiSolidUser />
                  </span>
                  Settings
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center justify-start">
                  <span className="px-2">
                    <BiSolidUser />
                  </span>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <div className="w-12 h-12 bg-red-300 rounded-full">
              <img src={image2} className="w-full h-full" alt="" />
            </div> */}
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
