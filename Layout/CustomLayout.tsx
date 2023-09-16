"use client";

import Dashboard from "@/components/Dashboard";
import { StickyNavbar } from "@/components/Navbar";
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
    
      <div className="flex">
        <Sidebar />
        <div
          className="flex-1 h-screen overflow-y-scroll"
          style={{ overflowY: "scroll" }}
        >
          {/* <StickyNavbar /> */}
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default CustomLayout;
