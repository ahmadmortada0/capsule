import React from "react";
import { MapPin, Smile, CalendarDays } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const Cards = ({ id, name, mood, location, createddate }) => {
  const [ShowCapsule, setShowCapsule] = useState(false);

  console.log(id);

  const viewCapsule = () => {
    setShowCapsule(true);
  };

  const HideCapsule = () => {
    setShowCapsule(false);
  };

  return (
    <>
      {ShowCapsule && <Card onclose={HideCapsule} id={id} />}

      <div className="capsule-card">
        <h2 className="capsule-name">{name}</h2>

        <div className="capsule-info">
          <p>
            <Smile /> Mood: <strong>{mood}</strong>
          </p>

          <p>
            <MapPin /> Location: <strong>{location}</strong>
          </p>

          <p>
            <CalendarDays /> Created: <strong>{createddate}</strong>
          </p>
        </div>

        <button className="view-button" type="button" onClick={viewCapsule}>
          View
        </button>
      </div>
    </>
  );
};

export default Cards;
