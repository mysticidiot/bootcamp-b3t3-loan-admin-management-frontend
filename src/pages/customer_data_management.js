import { Navigate } from "react-router-dom";
export default function CustomerDataManagement() {
  const loggedInUser = localStorage.getItem("authenticated");
  if (!loggedInUser) {
    alert("Please Login");
    return <Navigate replace to="/"></Navigate>;
  } else {
    return (
      <div>
        <div>Customer Data Management</div>
      </div>
    );
  }
}
