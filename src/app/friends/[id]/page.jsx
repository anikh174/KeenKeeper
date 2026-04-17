import Image from "next/image";
import React from "react";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoArchiveOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import CallToggleBtn from "@/components/Buttons/CallToggleBtn";
import TextToggleBtn from "@/components/Buttons/TextToggleBtn";
import VideoToggleBtn from "@/components/Buttons/VideoToggleBtn";

const friendsPromise = async function () {
  const res = await fetch("http://localhost:3000/friendData.json");
  const data = await res.json();
  return data;
};

const FriendsDetailsPage = async ({ params }) => {
  const friends = await friendsPromise();

  const { id } = await params;
  console.log(id, "params");

  const friend = friends.find((friend) => friend.id == id);
  console.log(friend, "friends");

  return (
    <div className="max-w-6xl mx-auto lg:my-10 p-10 lg:p-0">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-5">
          <div className="space-y-2 p-6 text-center shadow-md border border-gray-100 rounded-lg">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={80}
              height={80}
              className="rounded-full mx-auto"
            ></Image>

            <h1 className="font-semibold text-2xl text-[#1F2937]">
              {friend.name}
            </h1>

            <ul className="flex gap-2 justify-center">
              {friend.tags.map((tag, ind) => (
                <li
                  key={ind}
                  className="bg-[#CBFADB] text-[12px] text-[#244D3F] px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <p
              className={`text-xs text-white font-medium px-2 py-1 rounded-full w-20 text-center mx-auto
                                ${friend.status === "overdue" && "bg-[#EF4444]"}
                                ${friend.status === "due soon" && "bg-[#EFAD44]"}
                                ${friend.status === "on track" && "bg-[#244D3F]"}
                                ${friend.status === "active" && "bg-green-400"}
                              `}
            >
              {friend.status}
            </p>

            <p className="text-[#64748B] font-medium text-[16px]">
              {friend.bio}
            </p>
            <p className="text-[#64748B] text-sm">Preferred: {friend.email}</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex gap-1 justify-center items-center shadow-md border border-gray-100 py-7 bg-white hover:bg-gray-50 p-4 font-medium text-[#1F2937] btn rounded-lg">
              <HiOutlineBellSnooze className="h-6 w-6" />
              Snooze 2 Weeks
            </button>
            <button className="flex gap-1 justify-center items-center shadow-md border border-gray-100 p-4 font-medium text-[#1F2937] btn py-7 bg-white hover:bg-gray-50 rounded-lg">
              <IoArchiveOutline className="h-6 w-6" />
              Archive
            </button>
            <button className="flex gap-1 justify-center items-center shadow-md border border-gray-100 p-4 font-medium text-red-500 btn py-7 bg-white hover:bg-gray-50 rounded-lg">
              <MdOutlineDeleteOutline className="h-6 w-6" />
              Delete
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="shadow-md border border-gray-100 space-y-2 py-8 px-4 text-center rounded-lg">
              <p className="text-2xl font-semibold text-[#244D3F]">
                {friend.days_since_contact}
              </p>
              <p className="text-[#64748B]">Days Since Contact</p>
            </div>

            <div className="shadow-md border border-gray-100 space-y-2 py-8 px-4 text-center rounded-lg">
              <p className="text-2xl font-semibold text-[#244D3F]">
                {friend.goal}
              </p>
              <p className="text-[#64748B]">Goal (Days)</p>
            </div>

            <div className="shadow-md border border-gray-100 space-y-2 py-8 px-4 text-center rounded-lg">
              <p className="text-2xl font-semibold text-[#244D3F]">
                {friend.next_due_date}
              </p>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>

          <div className="shadow-md border border-gray-100 space-y-2 py-8 px-4 text-center rounded-lg">
            <div className="flex justify-between items-center">
              <h5 className="font-medium text-lg text-[#244D3F]">
                Relationship Goal
              </h5>
              <button className="btn">Edit</button>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-[#64748B] text-lg">Connect every</p>
              <p className="font-bold text-lg">{friend.goal} days</p>
            </div>
          </div>

          <div className="shadow-md border border-gray-100 space-y-4 py-8 px-4 text-center rounded-lg">
            <div>
              <h5 className="font-medium text-2xl text-[#244D3F] text-left">
                Quick Check-In
              </h5>
            </div>

            <div className="flex flex-wrap md:justify-between gap-3 items-center">
              <CallToggleBtn friend={friend}></CallToggleBtn>
              <TextToggleBtn friend={friend}></TextToggleBtn>
              <VideoToggleBtn friend={friend}></VideoToggleBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailsPage;
