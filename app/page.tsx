import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/(auth)/auth/[...nextauth]/route";
import Logout from "@/components/Logout";
import { SimpleCard } from "@/components/card";
type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {(session?.user.id, session?.user.email)}
      <pre>{session?.user.name}</pre>

      <SimpleCard />
      <Logout />
    </div>
  );
};

export default page;
