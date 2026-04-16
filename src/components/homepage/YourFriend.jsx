import React from "react";
import FriendsCard from "../ui/FriendsCard";

const friendsPromise = async function (){
  const res = await fetch("http://localhost:3000/friendData.json")
  const data = await res.json()
  return data;
}

const YourFriend = async () => {
  const friends = await friendsPromise()
  return (
    <div className="max-w-6xl mx-auto my-10 p-10 lg:p-0">
      <div>
        <h1 className="text-2xl font-semibold text-[#1F2937] mb-4">Your Friends</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {friends.map((friend, ind) => {
              return <FriendsCard key={ind} friend={friend}></FriendsCard>;
            })}
          </div>
      </div>
    </div>
  );
};

export default YourFriend;
