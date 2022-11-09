
import React from "react"
import { DisplayCardAPI } from '../services/LoginService';
import { DeleteCardAPI } from '../services/LoginService';
import {Routes,Route,useNavigate} from 'react-router-dom'
import EditLoanCard from "./EditLoanCard";

class DisplayLoanCard extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            list:[]      
        }
       
        DisplayCardAPI().then((data)=>{console.log(data)
            this.setState({list:data})
        });
    }

    parsefunc=(item)=>
    {
        localStorage.setItem('item',JSON.stringify(item));
        console.log(item);
        window.location.href='/EditLoanCard';
    }
    delete = (id)=>{
        DeleteCardAPI(id);
        window.location.reload(false);
    }

    render(){
        let tb = this.state.list.map((item)=>{return (
        < tr id="tr">
            <td id = "tid">{item.loan_id}</td>
            <td id = "ttype">{item.loan_type}</td>
            <td id="tdur">{item.duration_in_years}</td>
            <td id="button1">
                <button  className ="btn btn-outline-primary btn-sm" id="button1" onClick={() => this.parsefunc(item)}>
                    Edit
                </button>
            </td>
            <td id="button2">
                <button  className ="btn btn-outline-danger btn-sm" id="button21" onClick={()=>this.delete(item.loan_id)}>
                    Delete
                </button>
            </td>
        </tr>
        )})
        return(
            <div className="flex-container" style={{display:'flex',
            flexDirection:'column',justifyContent:'center'
            ,alignItems:'center'}}>

            
            <div className="card" style={{
                    width:"85vw",
                    marginTop : "30px"
            }} >
                    <table className = "table table-striped">
                        <thead>
                            <th>
                                ID
                            </th>
                            <th>
                                Card Type
                            </th>
                            <th>
                                Duration
                            </th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Delete
                            </th>

                        </thead>
                        <tbody>
                            {tb}
                        </tbody>
                       
                    </table>
            </div>
            <div className="conatin" style={{
                    
                    marginTop : "30px"
            }}>
            <button  className ="btn btn-outline-success btn-sm" onClick={(e)=>window.location.href='/addLoanCard'}>
                    Add Card
            </button>
            </div>
            </div>
        )
    }
}
export default DisplayLoanCard