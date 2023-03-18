import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SkillIcons from "../Components/SkillIcons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import "../style/sass/AppStyle.scss";
import axios from "axios";
import DarkModeToggle from "../Components/DarkModeToggle";
import { useEffect } from "react";



library.add(fas);
library.add(far);
const Account = () => {
  useEffect(() => {
    const apiURL = "https://randomuser.me/api/";
    axios
      .get(apiURL)
      .then(res => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  
  const [styler, modeChanger] = useState({
    cardColor: "",
    buttonMove: "",
    tColor: "",
  });
  let skills = [
    "HTML",
    "SASS",
    "JS",
    "REACT",
    "REDUX",
    "NODE",
    "MONGODB",
    "PYTHON",
    "FLASK",
    "DJANGO",
    "NUMPAY",
    "PANDAS",
    "DATA ANALYSIS",
    "MYSQL",
    "GRAPHQL",
    "D3.JS",
    "GATSBY",
    "DOCKER",
    "HEROKU",
    "GIT",
  ];
  let mappedSkills = skills.map((skill) => (
    <SkillIcons skill={skill} key={skill} />
  ));

  const handleModeChange = (newColorstate) => {
    modeChanger(newColorstate);
  };

  return (
    <>
    <div className="faker"></div>
    <div
      className="profContainer"
      style={{ backgroundColor: styler.cardColor }}
    >
      <div className="prof">
        <DarkModeToggle 
              styler = {styler}
              modeChanger = {handleModeChange}
        />
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
          className="skillimg"
        />
        <p className={"profname"} style={{ color: styler.tColor }}>
          Emmanuel Esekhaigbe {""}
          <span className="skcheck">
            <FontAwesomeIcon icon={"fas fa-circle-check"} />
          </span>
        </p>
        <p className="senprof">Senior Developer, Finland</p>
      </div>
      <div className="profdets">
        <p className="profsk" style={{ color: styler.tColor }}>
          Skills
        </p>
        <div className="skich">{mappedSkills}</div>
        <p style={{ color: styler.tColor }}>
          <FontAwesomeIcon icon={"far fa-clock"} /> Joined on Aug 30, 2020
        </p>
      </div>
    </div>
    </>
  );
};

export default Account;
