"use client";
import { callContext } from "@/context/call.context";
import Image from "next/image";
import React, { useContext } from "react";
import callImg from "@/assets/call.png";
import textImg from "@/assets/text.png";
import videoImg from "@/assets/video.png";
import { textContext } from "@/context/text.context";
import { videoContext } from "@/context/video.context";


const TimelinePage = () => {
  const { call } = useContext(callContext);
  const {text} = useContext(textContext);
  const {video} = useContext(videoContext);
  return (
    <div className="w-10/12 mx-auto my-20 min-h-[60vh]">
      <div>
        <div>
          <h2 className="text-[#1F2937] text-5xl font-bold mb-6">Timeline</h2>
        </div>
        <div className="flex flex-col gap-5">
          {call.map((calls, ind) => {
            return (
              <div key={ind}>
                <div className="flex gap-3 items-center space-y-2 p-6 shadow-md border border-gray-100 rounded-lg">
                  <Image src={callImg} alt="" height={40} width={40}></Image>

                  <div>
                    <p className="font-medium text-2xl text-[#244D3F]">
                      Call{" "}
                      <span className="text-lg text-[#64748B]">
                        with {calls.name}
                      </span>
                    </p>
                    <p className="font-medium text-lg text-[#64748B]">
                      {calls.next_due_date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

        <div>
        <div className="flex flex-col gap-5">
          {text.map((texts, ind) => {
            return (
              <div key={ind}>
                <div className="flex gap-3 items-center space-y-2 p-6 shadow-md border border-gray-100 rounded-lg">
                  <Image src={textImg} alt="" height={40} width={40}></Image>

                  <div>
                    <p className="font-medium text-2xl text-[#244D3F]">
                      Text{" "}
                      <span className="text-lg text-[#64748B]">
                        with {texts.name}
                      </span>
                    </p>
                    <p className="font-medium text-lg text-[#64748B]">
                      {texts.next_due_date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-5">
          {video.map((videos, ind) => {
            return (
              <div key={ind}>
                <div className="flex gap-3 items-center space-y-2 p-6 shadow-md border border-gray-100 rounded-lg">
                  <Image src={videoImg} alt="" height={40} width={40}></Image>

                  <div>
                    <p className="font-medium text-2xl text-[#244D3F]">
                      Video{" "}
                      <span className="text-lg text-[#64748B]">
                        with {videos.name}
                      </span>
                    </p>
                    <p className="font-medium text-lg text-[#64748B]">
                      {videos.next_due_date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
