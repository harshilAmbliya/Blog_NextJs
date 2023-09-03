import React from "react";
import Sidebar from "./Sidebar";

const SIdebarData = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" text-black flex h-screen">
      <div className="w-[350px] bg-green-300 h-full">
        <Sidebar />
      </div>
      <div className="w-full bg-red-300 h-full px-6 py-8">{children}</div>
    </div>
  );
};

export default SIdebarData;
