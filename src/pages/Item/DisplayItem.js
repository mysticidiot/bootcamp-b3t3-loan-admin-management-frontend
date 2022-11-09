import React from "react";
import { DisplayItemAPI, DeleteItemAPI } from "../../services/ItemService";
import { Link, useHistory } from "react-router-dom";

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

class DisplayItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    DisplayItemAPI().then((data) => {
      console.log(data);
      this.setState({ list: data });
    });
  }

  delete = (id) => {
    DeleteItemAPI(id);
    window.location.reload(false);
  };
  fun() {
    this.props.history.push("/dashboard");
  }

  parsefunc = (item) => {
    localStorage.setItem("item", JSON.stringify(item));
    console.log(item);
    window.location.href = "/EditItem";
  };

  render() {
    let tb = this.state.list.map((item) => {
      return (
        <tr>
          <td>{item.item_id}</td>
          <td>{item.item_description}</td>
          <td>{item.issue_status}</td>
          <td>{item.item_make}</td>
          <td>{item.item_category}</td>
          <td>{item.item_valuation}</td>

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
              onClick={() => this.delete(item.item_id)}
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
          <h5 class="card-header">Item Details</h5>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <th>ID</th>
                <th>Item Description</th>
                <th>Issue Status</th>
                <th>Item Make</th>
                <th>Item Category</th>
                <th>Item Valuation</th>

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
          <div className="flex">
            <button
              className="btn btn-success btn-sm"
              style={{ margin: "10px" }}
              onClick={(e) => (window.location.href = "/addItem")}
            >
              Add Item
            </button>
            <button className="btn btn-primary btn-sm">
              <Link className="link-light" to="/dashboard">
                Dashboard
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayItem;
