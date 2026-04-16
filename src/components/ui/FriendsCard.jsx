import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const FriendsCard = ({ friend }) => {
  return (
    <div className="hover:bg-gray-100 hover:scale-105 duration-300 hover:shadow-lg cursor-pointer">
      <div className="space-y-3 p-6 text-center shadow-md border border-gray-100">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={80}
          height={80}
          className="rounded-full mx-auto"
        ></Image>

        <h1 className="font-semibold text-2xl text-[#1F2937]">{friend.name}</h1>

        <p className="text-[#64748B]">{friend.days_since_contact}d ago</p>

        <ul className="flex gap-2 justify-center">
          {
            friend.tags.map((tag, ind)=>(<li key={ind} className="bg-[#CBFADB] text-[12px] text-[#244D3F] px-2 py-1 rounded-full font-medium">{tag}</li>))
          }
        </ul>

        <p  className={`text-xs text-white font-medium px-2 py-1 rounded-full w-20 text-center mx-auto
            ${friend.status === "overdue" && "bg-[#EF4444]"}
            ${friend.status === "due soon" && "bg-[#EFAD44]"}
            ${friend.status === "on track" && "bg-[#244D3F]"}
            ${friend.status === "active" && "bg-green-400"}
          `}>{friend.status}
        </p>
      </div>
    </div>
  );
};

export default FriendsCard;
