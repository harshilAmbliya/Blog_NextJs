import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="bg-violet-300  w-full px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h3 className="text-2xl text-white flex px-3 ">
            
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
