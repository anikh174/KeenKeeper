import React from "react";

const Banner = () => {
  return (
    <div className="mt-5 md:mt-8 lg:mt-14">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
        <p className="text-[#64748B] text-[10px] md:text-[16px]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>

        <button className="btn font-medium md:font-semibold px-2 py-1 md:px-4 md:py-2 bg-[#244D3F] text-white md:mt-1 lg:mt-4 rounded-lg">+ Add a Friend</button>
      </div>
    </div>
  );
};

export default Banner;
