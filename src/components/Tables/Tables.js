import React from "react";
import "./Tables.css";

function Tables() {
  return (
    <div className="container">
      <h1 className="title">ReactJS Editable Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {/* {employeeData.map(({ employeeId, name, email, position }) => ( */}
          <tr>
            <td>
              {/* <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => onChange(e, employeeId)}
                  placeholder="Type Name"
                /> */}
            </td>
            <td>
              {/* <input
                  name="email"
                  value={email}
                  type="email"
                  onChange={(e) => onChange(e, employeeId)}
                  placeholder="Type Email"
                /> */}
            </td>
            <td>
              {/* <input
                  name="position"
                  type="text"
                  value={position}
                  onChange={(e) => onChange(e, employeeId)}
                  placeholder="Type Position"
                /> */}
            </td>
          </tr>
          ))
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
