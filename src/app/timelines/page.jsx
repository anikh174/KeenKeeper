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
  const { text } = useContext(textContext);
  const { video } = useContext(videoContext);
  return (
    <div className="w-10/12 mx-auto my-5 lg:my-20">
      <div>
        <div>
          <h2 className="text-[#1F2937] text-3xl md:text-5xl font-bold mb-6">
            Timeline
          </h2>
        </div>
        {call.length === 0 && text.length === 0 && video.length === 0 ? (
          <div className="text-center border border-gray-300 rounded-lg p-10 lg:p-40 space-y-5">
            <h1 className="lg:text-4xl font-bold text-[#1F2937]">
              <span className="text-[#244D3F] text-2xl md:text-3xl lg:text-7xl font-bold">
                No Activity
              </span>{" "}
              Here...
            </h1>
            <p className="text-sm lg:text-3xl font-bold text-[#64748B]">
              Start a conversation with someone to see your activity appear
              here.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex flex-col">
              {call.map((calls, ind) => {
                return (
                  <div key={ind} className="mb-5">
                    <div className="flex gap-3 items-center space-y-2 p-6 shadow-md border border-gray-100 rounded-lg">
                      <Image
                        src={callImg}
                        alt=""
                        height={40}
                        width={40}
                      ></Image>

                      <div>
                        <p className="font-medium text-2xl text-[#244D3F]">
                          Call{" "}
                          <span className="text-lg text-[#64748B]">
                            with {calls.name}
                          </span>
                        </p>
                        <p className="font-medium text-lg text-[#64748B]">
                          {new Date(calls.createdAt).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mb-5">
              <div className="flex flex-col gap-5">
                {text.map((texts, ind) => {
                  return (
                    <div key={ind}>
                      <div className="flex gap-3 items-center space-y-2 p-6 shadow-md border border-gray-100 rounded-lg">
                        <Image
                          src={textImg}
                          alt=""
                          height={40}
                          width={40}
                        ></Image>

                        <div>
                          <p className="font-medium text-2xl text-[#244D3F]">
                            Text{" "}
                            <span className="text-lg text-[#64748B]">
                              with {texts.name}
                            </span>
                          </p>
                          <p className="font-medium text-lg text-[#64748B]">
                          {new Date(texts.createdAt).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
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
                        <Image
                          src={videoImg}
                          alt=""
                          height={40}
                          width={40}
                        ></Image>

                        <div>
                          <p className="font-medium text-2xl text-[#244D3F]">
                            Video{" "}
                            <span className="text-lg text-[#64748B]">
                              with {videos.name}
                            </span>
                          </p>
                          <p className="font-medium text-lg text-[#64748B]">
                          {new Date(videos.createdAt).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
