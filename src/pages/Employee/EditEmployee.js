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

export default function EditEmployee(e)  {
    const employee = JSON.parse(localStorage.getItem('item'))

    const loggedInUser = localStorage.getItem("authenticated");
    const [open, setOpen] = React.useState(true);
    const [employeeDOB,setemployeeDOB] = React.useState(employee.date_of_birth);
    const [employeeDOJ,setemployeeDOJ] = React.useState(employee.date_of_joining);
    const [employeeDesignation,setemployeeDesignation] = React.useState(employee.designation);
    const [employeeDepartment,setemployeeDepartment] = React.useState(employee.department);
    const [employeeGender,setemployeeGender] = React.useState(employee.gender);
    const [employeeName,setemployeeName] = React.useState(employee.employee_name);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.href = '/employeesDataManagement'
        
    };
    const editEmployee = (employee_id,employeeDOB,employeeDOJ) =>
    {
        
        axios
        .post("http://localhost:8080/LAMA/employee/edit", {
            employee_id:document.getElementById("employeeId").value,
            date_of_birth:document.getElementById("employeeDOB").value ,
            date_of_joining:document.getElementById("employeeDOJ").value  ,
            gender : document.getElementById("employeeGender").value,
            designation :  document.getElementById("employeeDesignation").value,
            department : document.getElementById("employeeDepartment").value,
            employee_name : document.getElementById("employeeName").value
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
                    <DialogTitle>Edit Employee</DialogTitle>
                    <DialogContent>
                    Employee Id =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="employeeId"
                        value = {employee.employee_id}
                        // label="Loan Id"
                        type="text"
                        // fullWidth
                        variant="standard"
                        disabled
                        
                    />
                    <br/><br/>
                    Employee Name =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="employeeName"
                        value={employeeName}
                        // label="Loan employeeDOJ"
                        type="text"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setemployeeName(newval.target.value)}
                    />
                    <br/><br/>
                    Employee DOJ =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="employeeDOJ"
                        value={employeeDOJ}
                        // label="Loan employeeDOJ"
                        type="date"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setemployeeDOJ(newval.target.value)}
                    />
                    <br/><br/>
                    Employee DOB =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="employeeDOB"
                        value={employeeDOB}
                        // label="Loan employeeDOJ"
                        type="date"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setemployeeDOB(newval.target.value)}
                    />
                    <br/><br/>
                    Employee Department =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="employeeDepartment"
                        value={employeeDepartment}
                        // label="Loan employeeDOJ"
                        type="text"
                        // fullWidth
                        variant="standard"
                        onChange = {(newval) => setemployeeDepartment(newval.target.value)}
                    />
                    <br/><br/>
                    Employee Gender =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="employeeGender"
                        value={employeeGender}
                        // label="Loan employeeDOJ"
                        type="text"
                        // fullWidth
                        variant="standard"
                        inputProps={{ maxLength: 1 }}
                        onChange = {(newval) => setemployeeGender(newval.target.value)}
                    />
                    <br/><br/>
                    Employee Designation =&nbsp;
                    <TextField
                        autoFocus
                        margin="solid"
                        id="employeeDesignation"
                        value={employeeDesignation}
                        // label="Loan employeeDOJ"
                        type="text"
                        // fullWidth
                        variant="standard"
                        inputProps = {{maxLength : 1}}
                        onChange = {(newval) => setemployeeDesignation(newval.target.value)}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>editEmployee(employee.employee_id,employeeDOB,employeeDOJ)}>Edit</Button>
                    </DialogActions>
                </Dialog>
                
            </div>
        )
    }
    
}