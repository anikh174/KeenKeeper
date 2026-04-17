"use client";
import Image from "next/image";
import React, { useContext } from "react";
import textImg from "@/assets/text.png";
import { toast } from "react-toastify";
import { textContext } from "@/context/text.context";

const TextToggleBtn = ({friend}) => {
  const { text, setText } = useContext(textContext);

  const handleText = () => {
  
    const now = new Date();
    const textData = {
      ...friend,
      type: "text",
      createdAt: now.toISOString(),
    };
  
    setText([...text, textData]);
      toast.success(`Text to ${friend.name}`)
    };
  return (
    <button
      onClick={handleText}
      className="space-y-2 shadow-md border border-gray-100 py-2 px-11 md:py-4 md:px-16 cursor-pointer hover:bg-gray-50 hover:shadow-lg hover:scale-105 duration-300"
    >
      <Image src={textImg} alt="" width={32} height={32}></Image>
      <p className="text-[18px] text-[#1F2937] font-bold">Text</p>
    </button>
  );
};

export default TextToggleBtn;
