import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function Adminlayout({ children }) {
  const data = [
    {
      type: "Users",
      logo: <FiUsers />,
      count: "20",
      link: "/allusers",
    },
    {
      type: "Biddings",
      logo: <FaBlogger />,
      count: "20",
      link: "/blogs",
    },
    {
      type: "Matches",
      logo: <BiCategoryAlt />,
      count: "20",
      link: "/categories",
    },
  ];

  // let dynamicStyle={}
  // if (hide) {
  //   dynamicStyle = {
  //     width: '40px',
  //   };
  // }

  return (
    <div className="w-full h-screen flex">
      <div className="fixed top-0 bg-purple-800 w-full h-14 shadow-xl items-center flex px-10">
        <div className="flex items-center justify-between w-full text-white text-xl">
          <div>RoyalBett</div>
        </div>
      </div>
      <div className="flex w-full min-h-full justify-between">
        <div className="w-[20%] bg-blue-800 min-h-full h-screen shadow-xl">
          <div className="pt-16 flex flex-col font-bold">
          <div className="text-lg text-white flex justify-center w-full py-3 hover:bg-blue-500">
            MATCHES
          </div>
          <div className="text-lg text-white flex justify-center w-full py-3 hover:bg-blue-500">
            MATCHES
          </div>
          </div>         
        </div>
        <div className="w-[79%] min-h-full overflow-y-auto">
          <div className="pt-16 w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Adminlayout;
