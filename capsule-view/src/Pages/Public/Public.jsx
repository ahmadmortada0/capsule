import React, { useState, useEffect } from "react";
import Header from "../../components/Home/Header";
import Cards from "../../components/Public/Cards";
import "./Public.css";
// import capsules from '../../assets/api/capsules.json'
import Filter from "../../components/Public/FilterCards";
import NoPage from "../../pages/NoPage/NoPage";
import axios from "axios";

const Public = () => {
  const [filter, setFilter] = useState("All");

  const [filterLocation, setFilterLocation] = useState("All");
  const [capsules, setCapsules] = useState([]);
  const [users, setUsers] = useState([]);

  const [hidden, setHidden] = useState();

  const [unfoundPage, setUnfoundPage] = useState("invisible");

  const filteredCapsules =
    filter === "All"
      ? capsules
      : capsules.filter(
          (capsule) => capsule.mood?.toLowerCase() === filter.toLowerCase()
        );

  useEffect(() => {
    if (localStorage.getItem("isAuth") === "false") {
      setHidden("invisible");
      setUnfoundPage("block");
    }

    const fetchCapsules = async () => {
      try {
        const token = localStorage.getItem("isAuth");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v0.1/user/getCapsuleByPrivacy",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setCapsules(response.data.payload);
      } catch (err) {
        console.error("Failed to fetch public capsules", err);
        setCapsules([]);
      }
    };

    fetchCapsules();
  }, []);
  console.log(filteredCapsules);
  // const filteredCapsulesLocation = filterLoaction === "All"? capsules: capsules.filter(capsules => capsules.location === filter);

  return (
    <>
      <Header />

      <div className="filter-container hidden">
        <p>Public Wall</p>

        <Filter choosenfilter={setFilter} />
      </div>

      <div className="cards-container">
        {filteredCapsules.map((capsule, index) => (
          <Cards
            key={index}
            id={capsule.id}
            name={capsule.name || "Unknown"}
            mood={capsule.mood}
            location={capsule.location}
            createddate={capsule.created_at}
          />
        ))}
      </div>
      <NoPage visible={unfoundPage} />
    </>
  );
};

export default Public;
