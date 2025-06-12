import React from "react";
import swimmingPhoto from "../assets/swimming.png";
import classPhoto from "../assets/class.png";
import playGroundPhoto from "../assets/playground.png";

const Q_Zone = () => {
  return (
    <div className="bg-[#e7e7e7] p-4 rounded-md">
      <h2 className="font-semibold mb-3">Q-Zone</h2>
      <div className="*:w-full space-y-4">
        <img src={swimmingPhoto} alt="" sizes="100px" />
        <img src={classPhoto} alt="" sizes="100px" />
        <img src={playGroundPhoto} alt="" sizes="100px" />
      </div>
    </div>
  );
};

export default Q_Zone;
