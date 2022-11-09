import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./admin_dashboard";
import HelloWorld from "./hello_world";
import LoanCardManagement from "./loan_card_management";
import CustomerDataManagement from "./customer_data_management";
import ItemsMasterData from "./items_master_data";
function navigate() {
  return (
    <div>
      <AdminDashboard />
      <BrowserRouter>
        <Routes>
          <Route path="helloworld" element={<HelloWorld />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="loanCardManagement" element={<LoanCardManagement />} />
          <Route
            path="customerDataManagement"
            element={<CustomerDataManagement />}
          />
          <Route path="itemsMasterData" element={<ItemsMasterData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default navigate;
