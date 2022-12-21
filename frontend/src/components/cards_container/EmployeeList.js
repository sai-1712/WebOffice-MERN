import React from "react";
import "../../public/assests/employee.css";
import { useSelector } from "react-redux";

export default function EmployeeList(props) {

  const NULLURL = "";
  const { user } = useSelector((state) => state.auth);
  const useremail = String(user.email)
  const adminrole = useremail.includes("@manager")
  console.log(adminrole);


  // Put this code in useEffect
  let EmployeeList = <p className="emptylist">No Employees Found</p>;

  if (props.employees.length > 0) {
    EmployeeList = props.employees.map((e) => (
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3" key={e.id}>
        <div className="profile-widget">
          <div className="profile-img">
            <a href="/employeeprofile" className="avatar">
              <img src={require("../../public/Images/review3.png")} alt="" />
            </a>
          </div>
          {
            adminrole && <div className="dropdown profile-action">
              <a
                href={NULLURL}
                className="action-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a
                  href={NULLURL}
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_employee"
                  onClick={(event) => props.employeeHandler(event, e.id)
                  }
                >
                  <i className="fa fa-pencil m-r-5"></i> Edit
                </a>
                <a
                  href={NULLURL}
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_employee"
                  onClick={(event) => props.employeeHandler(event, e.id)}
                >
                  <i className="fa fa-trash-o m-r-5"></i> Delete
                </a>
                {/* <a className="dropdown-item" href={`/edit/:${e.id}`}  >
                            <i className="fa fa-pencil m-r-5"></i> Edit
                        </a> */}
                {/* <a className="dropdown-item" href={`/deleteemployee/:${e.id}`}>
                            <i className="fa fa-trash-o m-r-5"></i> Delete
                        </a> */}
              </div>
            </div>
          }

          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="/profile">{e.fname}</a>
          </h4>
          <div className="small text-muted">{e.designation}</div>
        </div>
      </div>
    ));
  }

  return (
    <React.Fragment>
      {EmployeeList}
    </React.Fragment>
  )
}
