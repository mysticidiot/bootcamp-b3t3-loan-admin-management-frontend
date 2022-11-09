import React from "react";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import "../page.css";

export default function LoanCardManagement() {
  const loggedInUser = localStorage.getItem("authenticated");
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addLoanCard = () => {
    console.log(document.getElementById("loanId").value);
    if (
      document.getElementById("loanId").value == "" ||
      document.getElementById("loanName").value == "" ||
      document.getElementById("loanduration").value == ""
    ) {
      alert("Fields cant be empty");
      setValue(true);
      return;
    }
    axios
      .post("http://localhost:8080/LAMA/card/add", {
        loan_id: document.getElementById("loanId").value,
        loan_type: document.getElementById("loanName").value,
        duration_in_years: document.getElementById("loanduration").value,
      })
      .then((response) => {
        if (response.status != 200) {
          console.log(response);
          throw new Error(response);
        }
        console.log(response.data);
        alert(response.data);
        //   },
        //   (error) => {
        //     console.log(error);
        //     alert("Some error occured. Try ");
        //   }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.Exception);
      });

    setOpen(false);
    setValue(true);
  };
  if (!loggedInUser) {
    alert("Please Login");
    return <Navigate replace to="/"></Navigate>;
  } else {
    if (value) {
      return <Navigate to="/loanCardManagement"></Navigate>;
    }
    return (
      <div className="page">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Loan Card</DialogTitle>
          <DialogContent>
            Loan Id =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="loanId"
              // label="Loan Id"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Loan Name =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="loanName"
              // label="Loan Name"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Duration (In Years) =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="loanduration"
              // label="Loan Duration"
              type="number"
              // fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={addLoanCard}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
