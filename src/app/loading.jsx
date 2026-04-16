import React from "react";
import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <FadeLoader />
      </div>
    </div>
  );
};

export default loading;
