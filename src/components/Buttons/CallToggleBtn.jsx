"use client";
import Image from "next/image";
import React, { useContext } from "react";
import callImg from "@/assets/call.png";
import { callContext } from "@/context/call.context";
import { toast } from "react-toastify";

const CallToggleBtn = ({ friend }) => {
  const { call, setCall } = useContext(callContext);

  const handleCall = () => {

  const now = new Date();
  const callData = {
    ...friend,
    type: "call",
    createdAt: now.toISOString(),
  };

  setCall([...call, callData]);
    toast.success(`Calling to ${friend.name}`)
  };
  return (
    <button
      onClick={handleCall}
      className="space-y-2 shadow-md border border-gray-100 py-2 px-11 md:py-4 md:px-16 cursor-pointer hover:bg-gray-50 hover:shadow-lg hover:scale-105 duration-300"
    >
      <Image src={callImg} alt="" width={32} height={32}></Image>
      <p className="text-[18px] text-[#1F2937] font-bold">Call</p>
    </button>
  );
};

export default CallToggleBtn;