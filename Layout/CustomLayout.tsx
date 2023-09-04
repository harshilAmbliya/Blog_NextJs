import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CustomLayout = (props: Props) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-72 bg-white overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="bg-green-500 flex justify-between items-center py-3 border-b-2 border-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              aut tenetur repellendus?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              quibusdam necessitatibus, doloribus error molestias blanditiis.
            </p>
          </div>
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
