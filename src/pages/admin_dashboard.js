import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const adminButtonOnClick = (e) =>{
        let buttonName = e.target.name;
        navigate('/' + buttonName)
    }
    
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

