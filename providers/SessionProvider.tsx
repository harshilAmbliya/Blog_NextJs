"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";
type Props = {
  children: React.ReactNode;
};

const Provider = (props: Props) => {
  return (
    <ThemeProvider>
      <SessionProvider>{props.children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Provider;
