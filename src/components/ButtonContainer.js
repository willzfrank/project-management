import React from "react";
import MainButton from "./Buttons/MainButton";
import "./ButtonContainer.css";

function ButtonContainer() {
  return (
    <div>
      <MainButton
        className="button--container"
        icon="uil uil-user"
        name="Add Client"
      />
      <MainButton
        className="button--container"
        icon="uil uil-grip-horizontal-line"
        name="New Project"
      />
    </div>
  );
}

export default ButtonContainer;
