
import './App.css';
import HelloWorld from './pages/hello_world';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminDashboard from './pages/admin_dashboard'
import LoanCardManagement from './pages/LoanCard/AddLoanCard'
import Login from './pages/login';
import DisplayLoanCard from './pages/LoanCard/DisplayLoanCard';
import DisplayEmployee from './pages/Employee/DisplayEmployee'
import AddEmployee from './pages/Employee/AddEmployee';
import DisplayItem from './pages/Item/DisplayItem';
import AddItem from './pages/Item/AddItem';
import EditLoanCard from './pages/LoanCard/EditLoanCard';
import EditItem from './pages/Item/EditItem';
import EditEmployee from './pages/Employee/EditEmployee';
function App() {
 
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path ="helloworld" element = {<HelloWorld/>} />
        <Route path ="dashboard" element = {<AdminDashboard/>} />
        <Route path = "loanCardManagement" element = {<DisplayLoanCard/>}/>
        <Route path = "employeesDataManagement" element = {<DisplayEmployee/>}/>
        <Route path = "itemsMasterData" element = {<DisplayItem/>}/>
        <Route path = "login" element = {<Login/>}/>
        <Route path = "" element = {<Login/>}/>
         <Route path = "addLoanCard" element = {<LoanCardManagement/>}/>
         <Route path = "addEmployee" element = {<AddEmployee/>}/>
         <Route path = "addItem" element = {<AddItem/>}/>
         <Route path = "editLoanCard" element = {<EditLoanCard/>}/>
         <Route path = "editItem" element = {<EditItem/>}/>
         <Route path = "editEmployee" element = {<EditEmployee/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
