import React from "react";
import MyLink from "./MyLink";


const Navbar = () => {

  const navItems = [
    {
      path: '/',
      text: "Home"
    },
    {
      path: '/timelines',
      text: "Timelines"
    },
    {
      path: '/stats',
      text: "Stats"
    },
  ];

  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="flex justify-between items-center container mx-auto py-4">
        <h1 className="text-[#244D3F] text-2xl font-bold"><span className="text-black font-bold md:font-extrabold">Keen</span>Keeper</h1>

        <div>
            <ul className="flex gap-1 md:gap-3 items-center">
                {navItems.map((item, ind)=>
                  <MyLink key={ind} href={item.path}>{item.text}</MyLink>
                )}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
  