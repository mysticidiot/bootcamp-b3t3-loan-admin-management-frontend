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

export default function AddEmployee() {
  const loggedInUser = localStorage.getItem("authenticated");
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const add = () => {
    console.log(document.getElementById("a").value);
    if(document.getElementById("a").value == "") {
      alert("ID cant be empty");
      return;
    }
    axios
      .post("http://localhost:8080/LAMA/employee/add", {
        employee_id: document.getElementById("a").value,
        employee_name: document.getElementById("b").value,
        designation: document.getElementById("c").value,
        department: document.getElementById("d").value,
        gender: document.getElementById("e").value,
        date_of_birth: document.getElementById("f").value,
        date_of_joining: document.getElementById("g").value,
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
      return <Navigate to="/customerDataManagement"></Navigate>;
    }
    return (
      <div className="page">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Employee</DialogTitle>
          <DialogContent>
            Employee ID =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="a"
              // label="Loan Id"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Employee Name =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="b"
              // label="Loan Name"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Designation =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="c"
              // label="Loan Duration"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Department =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="d"
              // label="Loan Id"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Gender =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="e"
              // label="Loan Name"
              type="text"
              inputProps = {{ maxLength : 1}}
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Date of Birth =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="f"
              // label="Loan Duration"
              type="date"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Date of Joining =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="g"
              // label="Loan Duration"
              type="date"
              // fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={add}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
