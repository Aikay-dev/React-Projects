import React, { useContext } from "react";
import { AppContext } from "../App";

const Footer = ({ length }) => {
  const { items } = useContext(AppContext)
  length = items.length
    const footerstyle = {
        width: "100%",
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        position: "sticky"
    }
  return (
    <div style={footerstyle}>{length} List {length === 1 ? "item" : "items"}</div>
  )
}

export default Footer