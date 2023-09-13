import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
// type Props = {
//   togglestatus: boolean;
//   toggle: () => void;
// };

import { AvatarGenerator } from "random-avatar-generator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PiGitlabLogoSimpleDuotone } from "react-icons/pi";

const Navbar = () => {
  const generator = new AvatarGenerator();
  const image = generator.generateRandomAvatar();

  return (

    <nav className="bg-gray-300 p-4 shadow-slate-400 shadow-md sticky top-0  ">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-gray-800 text-2xl font-semibold cursor-pointer">Admin Dashboard</div>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-gray-400">Home</button>
          <button className="text-gray-700 hover:text-gray-400">Settings</button>
          <button className="text-gray-700 hover:text-gray-400">Logout</button>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
