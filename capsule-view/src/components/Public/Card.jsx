import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ onclose, id }) => {
  const [capsule, setCapsule] = useState(null);
  const token = localStorage.getItem("isAuth");

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
  return (
    <div className="capsule-container">
      <div className="capsule-box  flex">
        <div className="capsule-box ">
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

          <button onClick={onclose} className="view-button">
            close
          </button>
        </div>
        <div className="profile-image-section">
          {capsule.image ? (
            <img src={`http://127.0.0.1:8000/${capsule.image}`} alt="capsule" />
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
    </div>
  );
};

export default Card;
