import React from "react";

function AddClient() {
  return (
    <div>
      {" "}
      return (
      <>
        <button
          type="button"
          className="btn first button--container "
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="uil uil-user"></i>
          Add Client
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Client
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
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
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eCommerce-Website"
                      placeholder="eCommerce Website"
                    />
                  </div>

                  <div className="form-group card-body--header">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="eCommerce-Website"
                      placeholder="eCommerce Website"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn " data-dismiss="modal">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      );
    </div>
  );
}

export default AddClient;
