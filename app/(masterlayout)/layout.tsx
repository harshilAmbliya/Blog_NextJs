import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SIdebarData from "@/components/SIdebarData";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f5f5f5]">
    
      <main className=" text-[#333333] flex ">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </main>
      <footer className="bg-[#008080]">
        <Footer />
      </footer>
    </div>
  );
};

export default layout;
