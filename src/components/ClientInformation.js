import React from "react";
import "./eCommerce/Ecommerce.css";

function ClientInformation() {
  return (
    <div className="card card-body--header" style={{ width: "100%" }}>
      <h3>Client Information</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i class="uil uil-user-square"></i>Cras justo odio
        </li>
        <li className="list-group-item">
          <i class="uil uil-envelope"></i>Dapibus ac facilisis in
        </li>
        <li className="list-group-item">
          <i class="uil uil-phone-alt"></i>Vestibulum at eros
        </li>
      </ul>
    </div>
  );
}

export default ClientInformation;
