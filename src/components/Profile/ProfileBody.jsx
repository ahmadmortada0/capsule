import React, { useState, useEffect } from "react";
import background from "../../assets/images/landing.jpg";
import userIcon from "../../assets/images/usericon.jpg";
import { CameraIcon } from "lucide-react";
import NoPage from "../../pages/NoPage/NoPage";
import axios from "axios";
import OpenCapsules from "./OpenCapsules";
import OpemCapsule from "./OpemCapsule";
const ProfileBody = () => {
  const [hidden, setHidden] = useState();
  const token = localStorage.getItem("isAuth");
  const [pending, setPending] = useState([]);
  const [capsule, setCapsule] = useState([]);
  const [unfoundPage, setUnfoundPage] = useState("invisible");
  useEffect(() => {
    if (localStorage.getItem("isAuth") === "false") {
      setHidden("invisible");

      setUnfoundPage("block");
      return;
    }
    const capsules = async () => {
      const pen = [];
      const cap = [];
      const res = await axios.get(
        "http://127.0.0.1:8000/api/v0.1/user/getUserCapsule",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.payload);
      const allCapsule = res.data.payload;
      allCapsule.forEach((oneCapsule) => {
        if (oneCapsule.is_surprise) {
          pen.push(oneCapsule);
        } else {
          cap.push(oneCapsule);
        }
      });
      setCapsule(cap);
      setPending(pen);
    };

    capsules();
  }, []);

  return (
    <>
      <div className="profile_body flex hidden">
        <div className="user-info">
          <div className="profile-img-wrapper">
            <img src={userIcon} alt="profile" className="profile_img" />
            <CameraIcon className="user_camera_icon" />
          </div>
          <div className="user-text">
            <h3>Ahmad Mortada</h3>
            <p>mortadaahmad81@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="profile_container flex">
        <div className="profile_open_capsules">
          <h3>Your Capsules</h3>
          <div className="flex">
            {capsule.map((item, index) => (
              <OpenCapsules key={index} data={item} />
            ))}
          </div>
        </div>
        <hr />
        <div className="profile_pending_capsules">
          <h3>Pending</h3>
          <div className="flex">
            {pending.map((item) => (
              <OpemCapsule data={item} />
            ))}
          </div>
        </div>
      </div>
      <NoPage visible={unfoundPage} />
    </>
  );
};

export default ProfileBody;
