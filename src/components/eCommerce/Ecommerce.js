import React from "react";
import ClientInformation from "../ClientInformation";
import UpdateDetails from "../UpdateDetails";
import "./Ecommerce.css";

function Ecommerce() {
  return (
    <section className="card container text-center">
      <div className="card-body">
        <div className="card-body--header flex-row">
          <h1>eCommerce Website</h1>
          <span>This is a description</span>
        </div>
        <div className="card-body--header flex-row">
          <h3>Project Status</h3>
          <span>In Progress</span>
        </div>
      </div>
      <div className="card-body">
        <ClientInformation />
        <UpdateDetails />
      </div>
    </section>
  );
}

export default Ecommerce;
