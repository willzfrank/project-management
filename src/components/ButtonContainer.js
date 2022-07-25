import React from "react";
import AddClient from "./AddClient";
import NewProject from "./NewProject";
import "./ButtonContainer.css";

function ButtonContainer() {
  return (
    <div className="btn--container">
      <AddClient />
      <NewProject />
    </div>
  );
}

export default ButtonContainer;
