"use client";

import React, { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return <div className={`${open ? "w-64" : "w-0"} bg-blue-200`}></div>;
};
export default Sidebar;
