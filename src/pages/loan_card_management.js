import React from "react";
import { Navigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './page.css';

export default function LoanCardManagement()  {
    const loggedInUser = localStorage.getItem("authenticated");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const addLoanCard = () =>
    {

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
                <div><h2>Loan Card Management</h2></div>
                <br/>
                <br/>
                <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
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
                    <br/><br/>
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
                    <br/><br/>
                    Duration (In Months) =&nbsp;
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
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Add</Button>
                    </DialogActions>
                </Dialog>
                </div>
            </div>
        )
    }
    
}