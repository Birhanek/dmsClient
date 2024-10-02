import React from "react";
import { CalloutProps } from "../components/dataInterface";

const Callout: React.FC<CalloutProps> = ({ title }) => {
  return (
    <div className=" size-7 font-bold text-gray-700 left-3 w-full h-0 border-t-[20px] border-b-[20px] border-l-[40px] border-transparent border-l-red-600">
      {title}
    </div>
  );
};

export default Callout;
