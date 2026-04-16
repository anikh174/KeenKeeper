'use client'
import React from "react";

import FriendsCard from "../ui/FriendsCard";
import useFriends from "@/hooks/Friends";
import { FadeLoader } from "react-spinners";



const YourFriend = () => {
  const { friends, loading } = useFriends();
  return (
    <div className="max-w-6xl mx-auto my-10 p-10 lg:p-0">
      <div>
        <h1 className="text-2xl font-semibold text-[#1F2937] mb-4">Your Friends</h1>

          {
            loading? (<div className="flex justify-center items-center">
          <FadeLoader />
        </div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {friends.map((friend, ind) => {
              return <FriendsCard key={ind} friend={friend}></FriendsCard>;
            })}
          </div>)
          }
      </div>
    </div>
  );
};

export default YourFriend;
