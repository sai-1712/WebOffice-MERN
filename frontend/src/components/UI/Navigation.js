import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function Navigation(props) {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return (
    <>
        <div className={props.activeClass ? "navigation active" : "navigation"} >
            <ul>
                <li className={splitLocation[1] === "dashboard" ? "active-btn" : ""}>
                    < Link  to='/dashboard'>
                        <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "employee" ? "active-btn" : ""} >
                    <Link to='/employee'>
                      <span className="icon">
                        <i className="fa-solid fa-users"></i>
                      </span>
                      <span className="title">Employees</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "projects" ? "active-btn" : ""}>
                    <Link to='/projects'>
                      <span className="icon">
                        <i className="fa-solid fa-list-check"></i>
                      </span>
                      <span className="title">Projects</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "attendance" ? "active-btn" : ""}>
                    <Link to='/attendance'>
                        <span className="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span className="title">Attendance</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "clients" ? "active-btn" : ""}>
                    <Link to='/clients'>
                        <span className="icon">
                            <i className="fa-solid fa-people-group"></i>
                        </span>
                        <span className="title">Clients</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "leaves" ? "active-btn" : ""}>
                    <Link to='/leaves'>
                        <span className="icon">
                            <ion-icon name="newspaper-outline"></ion-icon>
                        </span>
                        <span className="title">Leaves</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "clientprofile" ? "active-btn" : ""}>
                    <Link to='/clientprofile'>
                        <span className="icon">
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <span className="title">Clients profile</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "settings" ? "active-btn" : ""}>
                    <Link to='/settings'>
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
    </>
  )
}
