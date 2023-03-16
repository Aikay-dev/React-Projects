import React, { Component } from "react";
import '../style/sass/AppStyle.scss'

class DarkModeToggle extends Component {
  render() {
    const { styler, modeChanger } = this.props
    return (
      <div
        className="sptog"
        onClick={() => {
          if (styler.cardColor === "") {
            modeChanger({
              cardColor: "black",
              buttonMove: "50%",
              tColor: "white",
            });
          } else {
            modeChanger({
              cardColor: "",
              buttonMove: "",
              tColor: "",
            });
          }
        }}
      >
        <div className="sptogball" style={{ left: styler.buttonMove }}></div>
      </div>
    );
  }
}

export default DarkModeToggle;
