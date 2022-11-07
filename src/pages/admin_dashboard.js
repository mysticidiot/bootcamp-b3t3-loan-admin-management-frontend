import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AdminDashboard() {
    const isLoggedIn = localStorage.getItem("authenticated");
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);
    const adminButtonOnClick = (e) =>{
        let buttonName = e.target.name;
        navigate('/' + buttonName)
    }
    // useEffect(() => {
        
        
    //     console.log(loggedInUser);
    //     if(loggedInUser)
    //     {
    //         console.log("Hi");
    //         setauthenticated(loggedInUser);
            
    //     }        
        
    //     console.log("Hello");
        
    // },[console.log("Rishabh")]);
    if(!isLoggedIn)
    {
        alert("Please Login");
        return <Navigate replace to = "/"></Navigate>;
    }
    else{
        return (
            <div className = "dashboard-container">
                <div><b>Loan Management Application</b></div>
                <div>Admin Dashboard</div>
                <div className = "admin-dashboard-buttons-container">
                    <button onClick = {adminButtonOnClick} className ="dashboard-button" name = "customerDataManagement">Customer Data Management</button>
                    <button onClick = {adminButtonOnClick} className ="dashboard-button" name = "loanCardManagement">Loan Card Management</button>
                    <button onClick = {adminButtonOnClick} className ="dashboard-button" name = "itemsMasterData">Items Master Data</button>
                </div>
            </div>
        );

    }
    
    
    

    
}

export default AdminDashboard;