import { Spin } from "@/components/Spinner";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div>
      <Spin />
    </div>
  );
};

export default loading;
