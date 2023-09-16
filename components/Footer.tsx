"use client"

import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <div className=" bg-blue-gray-400">
      <footer className="flex container w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal text-gray-200">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-gray-200 transition-colors hover:text-white focus:text-white"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-gray-200 transition-colors hover:text-white focus:text-white"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-gray-200 transition-colors hover:text-white focus:text-white"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-gray-200 transition-colors hover:text-white focus:text-white"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
    </div>
  );
}