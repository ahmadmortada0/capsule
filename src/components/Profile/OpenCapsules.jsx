import React, { useEffect, useState } from "react";
import Surprise from "./Surprise";

const OpenCapsules = ({ data }) => {
  const [capsule, setCapsule] = useState(null);
  const [ShowCapsule, setShowCapsule] = useState(false);

  const [date, time] = data.created_at.split("T");
  const viewCapsule = () => {
    setShowCapsule(true);
  };

  const HideCapsule = () => {
    setShowCapsule(false);
  };
  return (
    <>
      {ShowCapsule && <Surprise onclose={HideCapsule} id={data.id} />}
      <div className="capsule-card">
        <div className="capsule-info">
          <p className="capsule-name">{data.name || "Capsule"}</p>
          <p>
            <span>Date:</span> {date}
          </p>
          <p>
            <span>Time:</span> {time?.split(".")[0]}
          </p>
        </div>
        <button className="view-button" onClick={viewCapsule}>
          Open
        </button>
      </div>
    </>
  );
};

export default OpenCapsules;
