"use client";

import { EventContext } from "@/context/EventContext";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Statspage = () => {
    const { eventsList } = useContext(EventContext);
  const data = [
    {
      name: "Call",
      value: eventsList.filter((event) => event.action === "Call").length,
      fill: "#6e11b0",
    },
    {
      name: "Video",
      value: eventsList.filter((event) => event.action === "Video").length,
      fill: "#00C49F",
    },
    {
      name: "Text",
      value: eventsList.filter((event) => event.action === "Text").length,
      fill: "#1d5a48",
    },
  ];

  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-zinc-50 font-sans text-gray-800">
      <div className="container mx-auto flex w-full max-w-5xl flex-col items-start justify-center gap-4 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Friendship Analytics
        </p>
        <div className="flex w-full flex-col items-start justify-center gap-4 rounded-lg bg-white p-4 shadow-lg sm:gap-5 sm:p-6 lg:p-8">
          <p className="w-full text-left text-base font-semibold text-emerald-800 sm:text-lg">
            By Interaction Type
          </p>
          <div className="flex w-full justify-center gap-4 pt-2 sm:pt-4">
            <PieChart
              className="bg-white"
              style={{
                width: "100%",
                maxWidth: "420px",
                aspectRatio: 1,
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
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statspage;
