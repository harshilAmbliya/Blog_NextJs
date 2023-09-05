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
      <div className="flex ">
        <div
          className={`${
            open ? "w-72" : "hidden"
          } bg-gray-300 ease-in-out transition-all duration-300 shadow-md `}
        >
          <Sidebar />
        </div>
        <div
          className="flex h-screen overflow-scroll flex-col "
          style={{ overflow: "scroll" }}
        >
          <Navbar togglestatus={open} toggle={handleToggle} />

          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default CustomLayout;
