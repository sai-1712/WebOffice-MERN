import React from "react";
import { useState , useEffect} from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate";
import "../../public/assests/employee.css";
import EmployeeList from "../cards_container/EmployeeList";
import Addemployee from "../popup-models/Addemployee";
import Editemployee from "../popup-models/Editemployee";
import Deleteemployee from "../popup-models/Deleteemployee";
import { useSelector } from "react-redux";
import axios from "axios"

export default function Employee() {

  const [Employees, setEmployees] = useState([ ])


  const { user } = useSelector((state) => state.auth);
  const NULLURL = ""
  const [Emp, setEmp] = useState({})
  const useremail = String(user.email)
  const adminrole = useremail.includes("@manager")
  console.log(adminrole);

  const getUser = async () => {
    await axios
    .get('http://localhost:3000/employees')
    .then(res => setEmployees(res.data));
  };
  useEffect(() => {
      getUser()
  }, []);

  const EmployeeHandler = (event, eId) => {
    Employees.forEach(employee => {
      if(employee.id === eId) {
        console.log("from handler: ", employee);
        setEmp(employee);
        return;
      }
    })
  };

  const AddEmployeeHandler = async (e) => {
    const res = await axios.post('http://localhost:3000/employees', e);
    if (res) {
        alert("Data submitted successfully");

      }
      else {
        alert("Something went wrong");
      }
      getUser()
    }
    
    const EditEmployeeHandler = async (e) => {
      console.log("In Edit async: ", e);
      const res = await axios.put(`http://localhost:3000/employees/${e.id}`, e);
      if (res) {
        alert("Data submitted successfully");
        
      }
      else {
        alert("Something went wrong");
      }
      getUser()
  }

  const DeleteHandler = async(eid) => {
    await axios
      .delete('http://localhost:3000/employees/' + eid)
      .then(res => alert("deleted success"));
      getUser()
  }
  
  return (
    <Dashboardtemplate>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div className="row">
          <div className="col">
            <h3 className="page-title">Employee</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Employee</li>
            </ul>
          </div>
          {
            adminrole && <div className="col-auto float-right ml-auto">
            <a
              href={NULLURL}
              className="btn add-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_employee"
            >
              <i className="fa fa-plus"></i> Add Employee
            </a>
          </div>
          }
          
        </div>
      </div>

      {/* <!-- Search bar  --> */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div className="form-group form-focus">
            <input
              type="text"
              className="form-control floating"
              placeholder="Project Name"
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group form-focus">
            <input
              type="text"
              className="form-control floating"
              placeholder="Employee Name"
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group form-focus">
            <select className="select-focus">
              <option>Designation</option>
              <option>Web Developer</option>
              <option>Web Designer</option>
              <option>Android Developer</option>
              <option>Ios Developer</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <a href={NULLURL} className="btn btn-success btn-block">
            {" "}
            Search{" "}
          </a>
        </div>
      </div>

      {/* employees list */}
      <div className="row staff-grid-row" >
        { Employees && <EmployeeList employees={Employees} employeeHandler={EmployeeHandler} />}
      </div>

      <Addemployee submitHandler={AddEmployeeHandler}/>
      <Editemployee emp = {Emp} submitHandler={EditEmployeeHandler} />
      <Deleteemployee emp = {Emp} submitHandler={DeleteHandler} />

    </Dashboardtemplate>
  );
}

