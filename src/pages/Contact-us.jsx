import React, { useState } from "react";
import UserMemory from "../Components/UserMemory";
import "../style/sass/AppStyle.scss";
import localStorageSave from "../Components/hooks/localStorageSave";

const Contactus = () => {
  /* const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; */

  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  /* Getting the local data */

  let localData = JSON.parse(localStorage.getItem("userMemory"));

  const handleSubmit = () => {
    if (localData === null) {
      localData = [];
      localData.push(userData);
      localStorageSave("userMemory", localData)

      setUserData({
        email: "",
        username: "",
        password: "",
      });
    } else {
      localData.push(userData);
      localStorageSave("userMemory", localData)
      setUserData({
        email: "",
        username: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="contactContain">
        <section className="contactSide">
          <h1 className="contacth1">USERS MEMORY</h1>
          <UserMemory localData={localData} />
        </section>
        <section className="contactMain">
          <div className="container">
            <div className="card">
              <p className="login">Log in</p>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
                <span className="user">Email</span>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  name="username"
                  required="required"
                  value={userData.username}
                  onChange={handleChange}
                />
                <span className="user">Username</span>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  required="required"
                  value={userData.password}
                  onChange={handleChange}
                />
                <span>Password</span>
              </div>

              <button className="enter" onClick={handleSubmit}>
                Enter
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contactus;
