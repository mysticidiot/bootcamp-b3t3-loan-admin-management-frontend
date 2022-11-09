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

export default function AddItem() {
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
    console.log(document.getElementById("item_id").value);
    if(document.getElementById("item_id").value == "") {
      alert("ID cant be empty");
      return;
    }
    axios
      .post("http://localhost:8080/LAMA/item/add", {
        item_id: document.getElementById("item_id").value,
        item_description: document.getElementById("item_description").value,
        issue_status: document.getElementById("issue_status").value,
        item_make: document.getElementById("item_make").value,
        item_category: document.getElementById("item_category").value,
        item_valuation: document.getElementById("item_valuation").value,
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
      return <Navigate to="/itemsMasterData"></Navigate>;
    }
    return (
      <div className="page">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Item</DialogTitle>
          <DialogContent>
            Item ID =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="item_id"
              // label="Loan Id"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Item Description =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="item_description"
              // label="Loan Name"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Issue Status =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="issue_status"
              // label="Loan Duration"
              type="text"
              inputProps = {{ maxLength : 1}}
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Item Make =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="item_make"
              // label="Loan Id"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Item Category =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="item_category"
              // label="Loan Name"
              type="text"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
            Item Valuation =&nbsp;
            <TextField
              autoFocus
              margin="solid"
              id="item_valuation"
              // label="Loan Duration"
              type="number"
              // fullWidth
              variant="standard"
            />
            <br />
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={add}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
