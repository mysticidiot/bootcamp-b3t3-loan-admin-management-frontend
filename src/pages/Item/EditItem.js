import React from "react";
import { json, Navigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { EditCard} from '../../services/LoginService';
import axios from "axios";

import '../page.css';

export default function EditItem(e)  {
    const item = JSON.parse(localStorage.getItem('item'))

    const loggedInUser = localStorage.getItem("authenticated");
    const [open, setOpen] = React.useState(true);
    const [itemCategory,setitemCategory] = React.useState(item.item_category);
    const [itemDescription,setitemDescription] = React.useState(item.item_description);
    const [issueStatus,setissueStatus] = React.useState(item.issue_status);
    const [itemMake,setitemMake] = React.useState(item.item_make);
    const [itemValuation,setitemValuation] = React.useState(item.item_valuation);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.href = '/itemsMasterData'
        
    };
    const editItem = (item_id,itemCategory,itemDescription) =>
    {
        
        axios
        .post("http://localhost:8080/LAMA/item/edit", {
            item_id:document.getElementById("itemId").value,
            item_category:document.getElementById("itemCategory").value ,
            item_description:document.getElementById("itemDescription").value  ,
            item_valuation : document.getElementById("itemValuation").value,
            issue_status :  document.getElementById("issueStatus").value,
            item_make : document.getElementById("itemMake").value,
        })
        .then(
          (response) => {
            if(response.status != 200)
                throw new Error();
            console.log(response.data);
            // alert(response.data);
          },
          (error) => {
            console.log(error);
            alert("Some error occured. Try ");
          }
        ).catch((err) => {
            
            alert("Error in updating data");
        });
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
                    <DialogTitle>Edit Item Card</DialogTitle>
                    <DialogContent>
                    Item Id =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="itemId"
                        value = {item.item_id}
                        // label="Loan Id"
                        type="text"
                        // fullWidth
                        variant="standard"
                        disabled
                        
                    />
                    <br/><br/>
                    Item Description =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="itemDescription"
                        value={itemDescription}
                        // label="Loan itemDescription"
                        type="text"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setitemDescription(newval.target.value)}
                    />
                    <br/><br/>
                    Item Category =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="itemCategory"
                        value={itemCategory}
                        // label="Loan itemDescription"
                        type="text"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setitemCategory(newval.target.value)}
                    />
                    <br/><br/>
                    Item Make =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="itemMake"
                        value={itemMake}
                        // label="Loan itemDescription"
                        type="text"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setitemMake(newval.target.value)}
                    />
                    <br/><br/>
                    Item Valuation =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="itemValuation"
                        value={itemValuation}
                        // label="Loan itemDescription"
                        type="number"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setitemValuation(newval.target.value)}
                    />
                    <br/><br/>
                    Issue Status =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="issueStatus"
                        value={issueStatus}
                        // label="Loan itemDescription"
                        type="text"
                        // fullWidth
                        variant="standard"
                        inputProps = {{maxLength : 1}}
                        onChange = {(newval) => setissueStatus(newval.target.value)}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>editItem(item.item_id,itemCategory,itemDescription)}>Edit</Button>
                    </DialogActions>
                </Dialog>
                
            </div>
        )
    }
    
}