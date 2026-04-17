"use client";
import Image from "next/image";
import React, { useContext } from "react";
import videoImg from "@/assets/video.png";
import { toast } from "react-toastify";
import { videoContext } from "@/context/video.context";

const VideoToggleBtn = ({friend}) => {
  const { video, setVideo } = useContext(videoContext);

  const handleVideo = () => {
    setVideo([...video, friend]);
    toast.success(`Video to ${friend.name}`);
  };
  return (
    <button
      onClick={handleVideo}
      className="space-y-2 shadow-md border border-gray-100 py-2 px-11 md:py-4 md:px-16 cursor-pointer"
    >
      <Image src={videoImg} alt="" width={32} height={32}></Image>
      <p className="text-[18px] text-[#1F2937] font-bold">Video</p>
    </button>
  );
};

export default VideoToggleBtn;