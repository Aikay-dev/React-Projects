import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import "../style/sass/AppStyle.scss";

library.add(fas);

function About() {
  const [icon, setIcon] = useState("fas fa-play");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const startCountdown = () => {
    const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

    let remainingSeconds = totalSeconds;

    const intervalId = setInterval(() => {
      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        toast.success("Countdown Finished")
        setIcon("fas fa-play")
      } else {
        const remainingDays = Math.floor(remainingSeconds / 86400);
        const remainingHours = Math.floor((remainingSeconds % 86400) / 3600);
        const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
        const remainingSecondsDisplay = remainingSeconds % 60;

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSecondsDisplay);
      }
    }, 1000);
  };

  return (
    <>
    <div className="faker"></div>
    <form className="stopcontainer">
      <Toaster />
      <div className="stopdisplay">
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="times"
          placeholder="00"
        />
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="times"
          placeholder="00"
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="times"
          placeholder="00"
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="times"
          placeholder="00"
        />
      </div>
      <div className="stopWbutHold">
          <button className="stopWbutton">
            <FontAwesomeIcon
              icon={icon}
              className="hella"
              onClick={(e) => {
                if(icon === "fas fa-rotate-right"){
                  window.location.reload()
                }
                e.preventDefault()
                startCountdown()
                setIcon("fas fa-rotate-right")
              }}
            />
          </button>
          </div>
    </form>
    </>
  );
}

export default About;
