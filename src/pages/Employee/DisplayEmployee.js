import React from "react";
import {
  DisplayEmployeeAPI,
  DeleteEmployeeAPI,
} from "../../services/EmployeeService";

import { Link, Routes, Route, useNavigate } from "react-router-dom";

class DisplayEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    DisplayEmployeeAPI().then((data) => {
      console.log(data);
      this.setState({ list: data });
    });
  }

  delete = (id) => {
    DeleteEmployeeAPI(id);
    window.location.reload(false);
  };

  parsefunc = (item) => {
    localStorage.setItem("item", JSON.stringify(item));
    console.log(item);
    window.location.href = "/EditEmployee";
  };

  render() {
    let tb = this.state.list.map((item) => {
      return (
        <tr>
          <td>{item.employee_id}</td>
          <td>{item.employee_name}</td>
          <td>{item.designation}</td>
          <td>{item.department}</td>
          <td>{item.gender}</td>
          <td>{item.date_of_birth}</td>
          <td>{item.date_of_joining}</td>

          <td>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => this.parsefunc(item)}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.delete(item.employee_id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div
        className="flex-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card text-center"
          style={{
            width: "85vw",
            marginTop: "30px",
          }}
        >
          <h5 class="card-header">Employee Details</h5>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <th>ID</th>
                <th>Employee Name </th>
                <th>Designation</th>
                <th>Department</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Date of Joining</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody className="table-group-divider">{tb}</tbody>
            </table>
          </div>
        </div>
        <div
          className="conatin"
          style={{
            marginTop: "30px",
          }}
        >
          <button
            className="btn btn-success btn-sm"
            style={{ margin: "10px" }}
            onClick={(e) => (window.location.href = "/addEmployee")}
          >
            Add Employee
          </button>
          <button className="btn btn-primary btn-sm">
            <Link className="link-light" to="/dashboard">
              Dashboard
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
export default DisplayEmployee;
