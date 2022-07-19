import React from "react";
import "./eCommerce/Ecommerce.css";

function UpdateDetails() {
  return (
    <form>
      <h2>Update Project Details</h2>
      <div className="form-group card-body--header">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          className="form-control"
          id="eCommerce-Website"
          placeholder="eCommerce Website"
        />
      </div>
      <div className="form-group card-body--header">
        <label htmlFor="Description">Description</label>
        <textarea
          className="form-control"
          id="description"
          placeholder="This is a description"
        />
      </div>
      <div className="form-group card-body--header">
        <label htmlFor="status">Status</label>
        <select
          multiple
          className="form-control"
          id="exampleFormControlSelect2"
        >
          <option>status</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default UpdateDetails;
