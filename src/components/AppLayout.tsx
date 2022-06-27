import React from "react";
import { GoSettings } from "react-icons/go";
import { FaUserAstronaut } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="w-full h-full flex">
      <div className="flex-none bg-gray-800">
        <div className="flex flex-col text-3xl text-gray-500 h-full">
          <div className="p-2 m-1 text-white bg-green-600 rounded-lg">
            <TiThMenu />
          </div>
          <div className="p-2 m-1 hover:text-white cursor-pointer">
            <FaUserAstronaut />
          </div>
          <div className="flex-auto"></div>
          <div className="p-2 m-1 hover:text-white cursor-pointer">
            <GoSettings />
          </div>
        </div>
      </div>
      <div className="flex-none w-64 bg-gray-100"></div>
      <div className="flex-auto">{children}</div>
    </div>
  );
};

export default AppLayout;
