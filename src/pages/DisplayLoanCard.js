
import React from "react"
import { DisplayCardAPI } from '../services/LoginService';
import { DeleteCardAPI } from '../services/LoginService';


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

    delete = (id)=>{
        DeleteCardAPI(id);
        window.location.reload(false);
    }

    render(){
        let tb = this.state.list.map((item)=>{return (
        <tr>
            <td>{item.loan_id}</td>
            <td>{item.loan_type}</td>
            <td>{item.duration_in_years}</td>
            <td>
                <button  className ="btn btn-outline-primary btn-sm">
                    Edit
                </button>
            </td>
            <td>
                <button  className ="btn btn-outline-danger btn-sm" onClick={()=>this.delete(item.loan_id)}>
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
            <button  className ="btn btn-outline-success btn-sm">
                    Add
                </button>
            </div>
            </div>
        )
    }
}
export default DisplayLoanCard