import React from "react";
import { json, Navigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { EditCard} from '../services/LoginService';
import axios from "axios";

import './page.css';

export default function EditLoanCard(e)  {
    const loan = JSON.parse(localStorage.getItem('item'))

    const loggedInUser = localStorage.getItem("authenticated");
    const [open, setOpen] = React.useState(true);
    const [loanname,setLoanname] = React.useState(loan.loan_type);
    const [duration,setDuration] = React.useState(loan.duration_in_years);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.href = '/LoanCardManagement'
        
    };
    const editLoanCard = (loan_id,loanname,duration) =>
    {
        
        axios
        .post("http://localhost:8080/LAMA/card/edit", {
            loan_id:document.getElementById("loanId").value,
            loan_type:document.getElementById("loanName").value ,
            duration_in_years:document.getElementById("loanduration").value   
        })
        .then(
          (response) => {
            console.log(response.data);
            // alert(response.data);
          },
          (error) => {
            console.log(error);
            alert("Some error occured. Try ");
          }
        );
        handleClose();

    };



    if(!loggedInUser)
    {
        alert("Please Login");
        return <Navigate replace to = "/"></Navigate>;
    }
    else
    {
        return (
            <div className="page">                

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Loan Card</DialogTitle>
                    <DialogContent>
                    Loan Id =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="loanId"
                        value = {loan.loan_id}
                        // label="Loan Id"
                        type="text"
                        // fullWidth
                        variant="standard"
                        disabled
                        
                    />
                    <br/><br/>
                    Loan Name =&nbsp;
                    <TextField
                    name = "lonname"
                        autoFocus
                        margin="solid"
                        id="loanName"
                        value = {loanname}
                        // label="Loan Name"
                        type="text"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setLoanname(newval.target.value)}
                    />
                    <br/><br/>
                    Duration (In Years) =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="loanduration"
                        value={duration}
                        // label="Loan Duration"
                        type="number"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setDuration(newval.target.value)}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>editLoanCard(loan.loan_id,loanname,duration)}>Edit</Button>
                    </DialogActions>
                </Dialog>
                
            </div>
        )
    }
    
}