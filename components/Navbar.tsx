// import React from "react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";

// import { ModeToggle } from "./ModeToggle";

// type Props = {};

// const Navbar = (props: Props) => {
//   return (
//     <div className=" h-20 p-3 flex justify-between items-center">
//       <div className="text-white">
//         <h3 className="text-2xl pl-5">Blogger</h3>
//       </div>
//       <div className="relative">
//         <input
//           type="text"
//           className="w-full border-0 rounded-full py-2 px-4"
//           placeholder="Enter text here"
//         />
//         <button className="absolute top-2 right-3  rounded-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 text-gray-700"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//             />
//           </svg>
//         </button>
//       </div>
//       <div className="flex items-center justify-center pr-5 ">
//         <div className="px-3 ">
//           <DropdownMenu>
//             <DropdownMenuTrigger className="rounded-full bg-white text-gray-800 py-2 px-3">
//               LN
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>English</DropdownMenuItem>
//               <DropdownMenuItem>Hindi</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//         <div className="">
//             <ModeToggle />
//         </div>
//         <div className="px-3">
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" alt="user" />
//             <AvatarFallback>CN</AvatarFallback>
//           </Avatar>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { useState } from "react";

import { ModeToggle } from "./ModeToggle";
import Sidebar from "./Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#008080]  py-3">
      <div className="container mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Link href="/" className="text-white text-xl font-bold ">
            <h4 className="text-white">Blogger</h4>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/about" className="text-white">
            About
          </a>
          <a href="/blog" className="text-white">
            Blog
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className="md:hidden flex items-center justify-end ">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none ps-3"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-end space-x-3">
            <div className="h-10 w-10">
              <ModeToggle />
            </div>
            <Avatar className="h-10 w-10 ">
            <AvatarImage src="https://github.com/shadcn.png" alt="user" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
           {/* <Sidebar /> */}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-600 py-2">
          <Link href="/" className="block text-white px-4 py-2">
            Home
          </Link>
          <Link href="/about" className="block text-white px-4 py-2">
            About
          </Link>
          <Link href="/blog" className="block text-white px-4 py-2">
            Blog
          </Link>
          <Link href="/contact" className="block text-white px-4 py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
