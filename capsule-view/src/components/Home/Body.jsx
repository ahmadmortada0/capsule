import React, { useState, useEffect } from "react";
import landing from "../../assets/images/landing.jpg";
import CreateCapsule from "./Createcapsule";
import NoPage from "../../pages/NoPage/NoPage";
const Body = () => {
  const today = new Date();

  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  const [ShowForm, setShowForm] = useState(false);

  const [hidden, setHidden] = useState();

  const [unfoundPage, setUnfoundPage] = useState("invisible");

  // const [hideContent,setHideContent]=useState(false);

  const show = () => {
    setShowForm(true);

    // setHideContent(false);
  };

  const close = () => {
    setShowForm(false);

    // setHideContent(true);
  };

  useEffect(() => {
    if (localStorage.getItem("isAuth") === "false") {
      setHidden("invisible");

      setUnfoundPage("block");
    }
  }, []);

  return (
    <>
      <main className={hidden}>
        {/* className={hideContent?"":"disable "} */}

        <div className="landing-container ">
          <div className="landing-text">
            <h1>
              🌍 Welcome to <span className="highlight">Surprise Me</span>
            </h1>

            <p>Your moments. Your memories. Your message to the future.</p>

            <p>
              Craft a message for your future self — or for the world. Attach
              images, audio, text, even your location. Seal it with a reveal
              date, then forget it... until the time is right.
            </p>

            <ul>
              <li>⏳ Private, Public, or Unlisted.</li>

              <li>🎁 Surprise Mode available.</li>

              <li>📍 Location-Tagged. Emoji-Enhanced. Countdown-Shown.</li>
            </ul>

            <p>
              When your moment arrives, your capsule opens — for your eyes only,
              or for all to see on our global memory wall.
            </p>

            <button className="create-button" onClick={show}>
              Start Creating
            </button>
          </div>

          {ShowForm && <CreateCapsule date={date} onClose={close} />}

          <div className="landing-image">
            <img src={landing} alt="Time capsule" />
          </div>
        </div>
      </main>

      <NoPage visible={unfoundPage} />
    </>
  );
};

export default Body;
