"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const CustomLayout = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <div className="flex h-screen ">
        <div
          className={`${
            open ? "w-72" : "w-0"
          } bg-gray-300 ease-in-out overflow-hidden`}
        >
          <Sidebar />
        </div>
        <div className="flex h-screen overflow-scroll flex-col flex-1">
          <Navbar toggle={handleToggle} />
          {/* <div className="flex justify-between items-center py-3  ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              aut tenetur repellendus?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              quibusdam necessitatibus, doloribus error molestias blanditiis.
            </p>
          </div> */}
          <div className="overflow-y-auto">{props.children}</div>
        </div>
      </div>
      {/* <div className="">
       
        <div className="w-full bg-gray-500">
          <Navbar />
        </div>

        <div className="h-screen flex flex-1">
        
          <div className="w-72 bg-red-200 overflow-y-auto">
            <Sidebar />
          </div>

         
          <div className="flex flex-col flex-1">
            <div className="bg-red-700 flex justify-between items-center py-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                aut tenetur repellendus?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi quibusdam necessitatibus, doloribus error molestias
                blanditiis.
              </p>
            </div>
            <div className="overflow-y-auto">{props.children}</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CustomLayout;
