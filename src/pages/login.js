import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import './login.css';

import AdminDashboard from './admin_dashboard';
import {Redirect} from 'react-router';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Login() {

    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false));

    const navigate = useNavigate();

    const loginfunc = () =>
    {     
            if(document.getElementById("user-value").value === "Admin" && document.getElementById("pass-value").value === "Admin")
            {
                alert("Successful!");  
                //<AdminDashboard/> 
                localStorage.setItem("authenticated", true)  ;          
                navigate("/dashboard") ;
                //return <Navigate replace to = "/dashboard"></Navigate>
                         
                
            }
            else{
                alert("Username or Password is wrong!");
            }
        
    }
    return(
        <div className="login-page">
            <h2>Loan Management Application</h2> 
            <h3>Admin Login</h3>
            <div className='uname-container'>
                <p>Enter Admin User id =&nbsp;
                <input type='Text' id = 'user-value' required></input>
                </p>
                <br></br>
            </div>
            <div className='pass-container'>
                <p>Enter Admin Password = &nbsp;
                <input type='password' id = 'pass-value' required></input>
                </p>
                <br></br>
            </div>
            <div className='submit'>
                <button name='login-button' onClick={loginfunc}><b>Login</b></button>
            </div>
        </div>          
    );
    
}

//export default Login;