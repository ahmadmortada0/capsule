import { useEffect, useState } from "react";

const OpenCapsule = ({ data }) => {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const revealDate = new Date(data.revealdate);

      const diff = revealDate - now;
      if (diff === 0) {
        console.log("hello");
        surprise(data.id);
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const formatted = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
      setRemainingTime(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, [data.revealdate]);
  const surprise = async (id) => {};
  const [date, time] = data.created_at.split("T");

  return (
    <>
      <div className="capsule-card">
        <div className="capsule-info">
          <p>
            <span>Date:</span> {date}
          </p>
          <p>
            <span>Time:</span> {time?.split(".")[0]}
          </p>
          <p className="capsule-timer">{remainingTime}</p>
        </div>
        <button className="view-button">PENDING</button>
      </div>
    </>
  );
};

export default OpenCapsule;
