"use client";
import { callContext } from "@/context/call.context";
import { textContext } from "@/context/text.context";
import { videoContext } from "@/context/video.context";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { call} = useContext(callContext)
  const { text } = useContext(textContext);
  const { video } = useContext(videoContext);

  const data = [
    { name: "Call", value: call.length, fill: "#00C49F" },
    { name: "Text", value: text.length, fill: "#FF8042" },
    { name: "Video", value: video.length, fill: "#0088FE" },
  ];
  return (
    <div className="max-w-6xl flex flex-col gap-5 justify-center my-5 md:my-6 lg:my-10 shadow-lg border border-gray-300 container mx-auto p-5 rounded-lg">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">Friendship Analytics</h2>
      <div className="flex flex-col border border-gray-300 rounded-lg p-5">

        <h4 className="font-medium text-[#244D3F] text-sm md:text-lg lg:text-2xl">By Interaction Type</h4>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
            margin: "auto",
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default StatsPage;
