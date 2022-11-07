import { Navigate} from "react-router-dom";
export default function ItemsMasterData() {
    const loggedInUser = localStorage.getItem("authenticated");
    if(!loggedInUser)
    {
        alert("Please Login");
        return <Navigate replace to = "/"></Navigate>;
    }
    else
    {
        return (
            <div>Items Master Data</div>
        )
    }
    
}