import { Spin } from "@/components/Spinner";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spin />
    </div>
  );
};

export default loading;
