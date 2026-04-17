import React from "react";
import MyLink from "./MyLink";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";


const Navbar = () => {

  const navItems = [
    {
      path: '/',
      icon: <TiHomeOutline />,
      text: "Home"
    },
    {
      path: '/timelines',
      icon: <MdOutlineAccessTime />,
      text: "Timelines"
    },
    {
      path: '/stats',
      icon: <TfiStatsUp />,
      text: "Stats"
    },
  ];

  return (
    <div className=" bg-base-100 shadow-sm px-2 md:px-10 lg:px-0">
      <div className="flex justify-between items-center container mx-auto py-4">
        <h1 className="text-[#244D3F] text-2xl md:text-4xl font-bold"><span className="text-black font-bold md:font-extrabold">Keen</span>Keeper</h1>

        <div>
            <ul className="flex gap-1 md:gap-3 items-center">
                {navItems.map((item, ind)=>
                  <MyLink key={ind} href={item.path}><div className="flex gap-1 items-center text-[11px] font-bold md:text-lg">{item.icon}{item.text}</div></MyLink>
                )}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
  