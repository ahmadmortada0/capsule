import React, { useEffect, useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

import axios from "axios";

const Surprise = ({ onclose, id }) => {
  const capsuleId = id;
  const [capsule, setCapsule] = useState(null);
  const token = localStorage.getItem("isAuth");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchCapsule = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/v0.1/user/getCapsule/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data.payload);
        setCapsule(res.data.payload);
      } catch (err) {
        console.error("Error fetching capsule:", err);
      }
    };

    fetchCapsule();
  }, [id]);
  if (!capsule) {
    return (
      <div className="capsule-container">
        <p>Loading capsule...</p>
      </div>
    );
  }

  const handleDownload = async () => {
    const zip = new JSZip();

    zip.file("data.json", JSON.stringify(capsule, null, 2));

    const content = await zip.generateAsync({ type: "blob" });

    saveAs(content, "my_data.zip");
  };

  return (
    <div className="capsule-container">
      <div className="capsule-box">
        <button className="quit-button" onClick={onclose}>
          X
        </button>
        <div className="content-box flex">
          <div className="info-section">
            <h3>USer </h3>
            <br />
            <p>
              Message: <strong>{capsule.message}</strong>
            </p>
            <br />

            <p>
              Date: <strong>{capsule.created_at}</strong>
            </p>
            <br />

            <p>
              Location: <strong>{capsule.location}</strong>
            </p>
            <br />

            <p>
              Mood: <strong>{capsule.mood}</strong>
            </p>
          </div>
          <div className="profile-image-section">
            {capsule.image ? (
              <img
                src={`http://127.0.0.1:8000/${capsule.image}`}
                alt="capsule"
              />
            ) : null}
            {capsule.voice && (
              <audio controls>
                <source
                  src={`http://127.0.0.1:8000/${capsule.voice}`}
                  type="audio/wav"
                />
                ...
              </audio>
            )}
          </div>
        </div>
        <button
          className="view-button surprise-button"
          onClick={handleDownload}
        >
          Download
        </button>
        <button
          onClick={async () => {
            try {
              await axios.post(
                `http://127.0.0.1:8000/api/v0.1/user/surpriseCapsule`,
                {
                  id: capsuleId,
                  revealdate: selectedDate,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              onclose();
            } catch (error) {
              console.error("Failed to update capsule date:", error);
            }
          }}
          className="view-button surprise-button"
        >
          Surprise mode
        </button>

        <input
          type="date"
          value={selectedDate}
          min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Surprise;
