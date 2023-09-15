import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/(auth)/auth/[...nextauth]/route";

import { CustomCrousel } from "@/components/Crousel";
import { Navbar } from "@material-tailwind/react";
import { StickyNavbar } from "@/components/Navbar";
import { BlogRelatedData } from "@/components/BlogRelatedData";
import { WhatsappMenu } from "@/components/WhatsappMenu";
import { SimpleCard } from "@/components/card";
("@/components/Crousel");
type Props = {};

const page = async (props: Props) => {
  const data = [1, 2, 3, 4, 5];
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      {/* {(session?.user.id, session?.user.email)}
      <pre>{session?.user.name}</pre> */}
      <StickyNavbar />
      <CustomCrousel />
      <BlogRelatedData />
      <WhatsappMenu />

      <div className=" container">
        <h2 className="text-3xl text-gray-800 p-4">Blog Details</h2>
        <div className="grid grid-cols-3 gap-4 ">
          {data.map((index) => {
            return <SimpleCard cardkey={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
