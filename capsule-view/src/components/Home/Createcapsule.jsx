import React, { useState } from "react";
import { Mic, Camera, Send, Earth, EarthLock } from "lucide-react";
import axios from "axios";

const CreateCapsule = ({ date, onClose }) => {
  const [selectedHashtag, setSelectedHashtag] = useState("");

  const [message, setMessage] = useState("");

  const [ispublic, setIspublic] = useState("public");
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    if (ispublic === "public") {
      setIspublic("private");
    } else {
      setIspublic("public");
    }
  };

  const handleChange = (e) => {
    setSelectedHashtag(e.target.value);
  };

  const getIpAddress = async () => {
    try {
      const res = await axios.get("https://api.ipify.org?format=json");
      return res.data.ip;
    } catch (error) {
      console.error("Failed to get IP address:", error);
      return "unknown";
    }
  };
  const sendValue = async () => {
    setLoading(true);
    const token = localStorage.getItem("isAuth");
    const ip = await getIpAddress();
    console.log(ip);
    const formData = new FormData();

    formData.append("message", message);
    formData.append("mood", selectedHashtag);
    formData.append("privacy", ispublic);
    formData.append("is_surprise", false);
    formData.append("revealdate", null);
    formData.append("location", ip);

    if (imageFile) formData.append("image", imageFile);
    if (audioFile) formData.append("voice", audioFile);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/user/createCapsule",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Sent successfully", res.data);
      onClose();
    } catch (error) {
      console.error(
        "Failed to send capsule:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="capsule-container">
      <div className="capsule-box">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <p className="capsule-date">A letter from {date}</p>

        <h3>Write a message for future self</h3>

        <button onClick={toggle} title="Earth" className="earth">
          {ispublic === "public" ? <Earth /> : <EarthLock />}
        </button>

        <textarea
          placeholder="write your message"
          className="capsule-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="capsule-footer">
          <select
            className="hashtag-select"
            onChange={handleChange}
            value={selectedHashtag}
          >
            <option>Choose a Hashtag</option>

            <option value="Happy">Happy</option>

            <option value="Love">Love</option>

            <option value="Sad">Sad</option>

            <option value="Tired">Tired</option>
          </select>

          <div className="icons">
            <label title="Attach Image" className="icon-button">
              <Camera />

              <input
                type="file"
                name="ImageStyle"
                className="invisible"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </label>

            <label title="Attach Audio" className="icon-button">
              <Mic />

              <input
                type="file"
                name="AudioStyle"
                className="invisible"
                onChange={(e) => setAudioFile(e.target.files[0])}
              />
            </label>

            <button title="Send" className="icon-button " onClick={sendValue}>
              {loading ? `sending...` : <Send />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCapsule;
