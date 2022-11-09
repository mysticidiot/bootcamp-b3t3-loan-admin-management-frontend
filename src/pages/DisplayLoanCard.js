import React from "react";
import { DisplayCardAPI } from "../services/LoginService";
import { DeleteCardAPI } from "../services/LoginService";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import EditLoanCard from "./EditLoanCard";
class DisplayLoanCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    DisplayCardAPI().then((data) => {
      console.log(data);
      this.setState({ list: data });
    });
  }

  delete = (id) => {
    DeleteCardAPI(id);
    window.location.reload(false);
  };

  parsefunc=(item)=>
  {
      localStorage.setItem('item',JSON.stringify(item));
      console.log(item);
      window.location.href='/EditLoanCard';
  }


  render() {
    let tb = this.state.list.map((item) => {
      return (
        <tr>
          <td>{item.loan_id}</td>
          <td>{item.loan_type}</td>
          <td>{item.duration_in_years}</td>
          <td>
            <button className="btn btn-outline-primary btn-sm" onClick={() => this.parsefunc(item)}>Edit</button>
          </td>
          <td>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => this.delete(item.loan_id)}
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
          <h5 class="card-header">Loan Cards</h5>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <th>ID</th>
                <th>Card Type</th>
                <th>Duration</th>
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
            onClick={(e) => (window.location.href = "/addLoanCard")}
          >
            Add Card
          </button>
          <button className="btn btn-warning btn-sm">
            <Link to="/dashboard">Dashboard</Link>
          </button>
        </div>
      </div>
    );
  }
}
export default DisplayLoanCard;
