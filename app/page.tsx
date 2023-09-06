import React from "react";
import LoginForm from "@/components/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/(auth)/auth/[...nextauth]/route";
type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      hello
      {(session?.user.id, session?.user.name)}
      <LoginForm />
    </div>
  );
};

export default page;
