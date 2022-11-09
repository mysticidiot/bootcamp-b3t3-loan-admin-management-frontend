import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const isLoggedIn = localStorage.getItem("authenticated");
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(null);
  const adminButtonOnClick = (e) => {
    let buttonName = e.target.name;
    navigate("/" + buttonName);
  };
  // useEffect(() => {

  //     console.log(loggedInUser);
  //     if(loggedInUser)
  //     {
  //         console.log("Hi");
  //         setauthenticated(loggedInUser);

  //     }

  //     console.log("Hello");

  // },[console.log("Rishabh")]);
  if (!isLoggedIn) {
    alert("Please Login");
    return <Navigate replace to="/"></Navigate>;
  } else {
    return (
      <div className="dashboard-container">
        <h3>
          <b>Loan Management Application</b>
        </h3>

        <div
          class="row"
          style={{ width: "80vw", marginLeft: "10vw", marginTop: "40px" }}
        >
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <button
                  onClick={adminButtonOnClick}
                  className="btn btn-primary"
                  name="employeesDataManagement"
                >
                  Employee Data Management
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <button
                  onClick={adminButtonOnClick}
                  className="btn btn-primary"
                  name="loanCardManagement"
                >
                  Loan Card Management
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <button
                  onClick={adminButtonOnClick}
                  className="btn btn-primary"
                  name="itemsMasterData"
                >
                  Items Master Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
