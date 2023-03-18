import React, { useState, useRef } from "react";
import UserMemory from "../Components/UserMemory";
import "../style/sass/AppStyle.scss";

const Contactus = () => {
  let strlocalMemory = localStorage.getItem("userMemory");
  let localMemory = JSON.parse(strlocalMemory);
  const inputRefs = useRef([]);
  let memory


    if (localMemory === null) {
      localMemory = [];
      console.log("i ran");
    } else {
      memory = localMemory.map((item) => {
        <div className="contactli">
          <div className="contactlimail">MAIL: {item.email}</div>
          <div className="contactliname">NAME: {item.username}</div>
          <div className="contactlinick">Nick-Name: {item.password}</div>
        </div>;
      });
    }
  

  const handleClick = () => {
    inputRefs.current.forEach((input) => {
      input.value = "";
      console.log(input.value);
    });
  };

  let loginDetails = {
    email: "",
    username: "",
    password: "",
  };
  const [saveUser, setSaveUser] = useState([loginDetails]);

  const getEmail = (e) => {
    update(e, "email");
  };

  const getUserName = (e) => {
    update(e, "username");
  };

  const getPassword = (e) => {
    update(e, "password");
  };

  const update = (e, section) => {
    loginDetails = saveUser;
    loginDetails[section] = e;
    setSaveUser([loginDetails]);
  };

  const saveLocal = () => {
    if(localMemory === null){
      localStorage.setItem("userMemory", JSON.stringify([saveUser]));
    }else{
      [saveUser].push(localMemory)
      console.log(saveUser);
      console.log(localMemory);
      localStorage.setItem("userMemory", JSON.stringify([saveUser]));
      console.log("object");
    }
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <>
      <div className="contactContain">
        <section className="contactSide">
          <h1 className="contacth1">USERS MEMORY</h1>
          <UserMemory memory = {memory}/>
        </section>
        <section className="contactMain">
          <div className="container">
            <div className="card">
              <p className="login">Log in</p>
              <div className="inputBox">
                <input
                  ref={(el) => inputRefs.current.push(el)}
                  type="text"
                  required="required"
                  onChange={(e) => {
                    getEmail(e.target.value);
                  }}
                />
                <span className="user">Email</span>
              </div>

              <div className="inputBox">
                <input
                  ref={(el) => inputRefs.current.push(el)}
                  type="text"
                  required="required"
                  onChange={(e) => {
                    getUserName(e.target.value);
                  }}
                />
                <span className="user">Username</span>
              </div>

              <div className="inputBox">
                <input
                  ref={(el) => inputRefs.current.push(el)}
                  type="password"
                  required="required"
                  onChange={(e) => {
                    getPassword(e.target.value);
                  }}
                />
                <span>Password</span>
              </div>

              <button
                className="enter"
                onClick={() => {
                  saveLocal();
                  handleClick();
                }}
              >
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
