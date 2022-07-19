import React from "react";
import "./MainButton.scss";

function MainButton(props) {
  return (
    <>
      <button className="btn first ">
        <i className={props.icon}></i>
        <>{props.name}</>
      </button>
    </>
  );
}

export default MainButton;
