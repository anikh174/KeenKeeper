import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const FriendsCard = ({ friend }) => {
  return (
    <div>
      <div>
        <Image
          src={friend.picture}
          alt={friend.name}
          width={40}
          height={40}
        ></Image>
        <h1>{friend.name}</h1>
        <p>{friend.days_since_contact}d ago</p>
        <ul>
          {
            friend.tags.map((tag, ind)=>(<li key={ind}>{tag}</li>))
          }
        </ul>
        <p  className={`px-3 py-1 text-xs rounded-full text-white
            ${friend.status === "overdue" && "bg-orange-500"}
            ${friend.status === "due soon" && "bg-blue-500"}
            ${friend.status === "on track" && "bg-green-500"}
            ${friend.status === "active" && "bg-green-900"}
          `}>{friend.status}
        </p>
      </div>
    </div>
  );
};

export default FriendsCard;
