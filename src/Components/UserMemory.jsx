import React from "react";

const UserMemory = ({ localData }) => {
  let memory;
  if (localData !== null) {
    memory = localData.map((item) => {
      return (
        <div className="contactli" key={localData.indexOf(item)}>
          <p>EMAIL: {item.email}</p>
          <p>USERNAME: {item.username}</p>
          <p>PASSWORD: {item.password}</p>
        </div>
      );
    });
  } else {
    localData = [];
    memory = <div className="contactli">MEMORY EMPTY</div>;
  }
  return <ul className="contactui">{memory}</ul>;
};

export default UserMemory;
