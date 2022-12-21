/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate";
import "../../public/assests/clients.css";
import Addclient from "../popup-models/Addclient";
import Editclient from "../popup-models/Editclient";
import Deleteclient from "../popup-models/Deleteclient";
import { useSelector } from "react-redux";

export default function Clients() {
    
    let clientsDetails = [
        {
            _id: "c101",
            fname: "Vaibhav",
            lname: "kiran",
            uname: "Rao",
            email: "saikiran@gmail.com",
            designation: "Web Developer",
            phone: "123456789",
            company: "InfoTech"
        }
    ]
    const NULLURL = ""
    const [Client, setClient] = useState({})
    const ClientHandler = (event, eId) => {
        clientsDetails.forEach(Client => {
            if (Client.id === eId) {
                console.log(Client);
                setClient(Client);
                return;
            }
        })
        // console.log(event, editId);
    };

    const { user } = useSelector((state) => state.auth);
    const useremail = String(user.email)
    const adminrole = useremail.includes("@manager")
    console.log(adminrole);

    let ClientsList = <p className="emptylist">No Clients Found</p>;

    if (clientsDetails.length > 0) {
        ClientsList = clientsDetails.map((e) => (
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div className="profile-widget">
                    <div className="profile-img">
                        <a href="/clientprofile" className="avatar">
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
                            <a href={NULLURL} className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_client" onClick={event => ClientHandler(event, e.id)} >
                                <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a href={NULLURL} class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_client" onClick={event => ClientHandler(event, e.id)}>
                                <i class="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                        </div>
                    </div>
                    }
                    
                    <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="/clientprofile">{e.fname}</a>
                    </h4>
                    <div className="small text-muted">{e.designation}</div>
                </div>
            </div>
        ));
                }

    return (
        <Dashboardtemplate>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div className="row">
                    <div className="col">
                        <h3 className="page-title">Clients</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item active">Client</li>
                        </ul>
                    </div>
                    {
                        adminrole && <div className="col-auto float-right ml-auto">
                        <a
                            href={NULLURL}
                            className="btn add-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add_client"
                        >
                            <i className="fa fa-plus"></i> Add Client
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
                            placeholder="Client ID"
                        />
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <input
                            type="text"
                            className="form-control floating"
                            placeholder="Username"
                        />
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <select className="select-focus">
                            <option>CompanyName</option>
                            <option>Globol Technologies</option>
                            <option>Infotech</option>
                            <option>Zoltan</option>
                            <option>Uracle</option>
                            <option>Delta Infotech</option>
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
            {/* <div class="row filter-row">
                <div class="col-sm-12 col-md-12">
                    <div class="form-group form-focus">
                        <input type="text" class="form-control floating" placeholder="Client ID" id="filter" onkeyup="searchBlog()"/>
                    </div>
                </div>
                {/* <!--<div class="col-sm-6 col-md-3">
                    <div class="form-group form-focus">
                        <input type="text" class="form-control floating" placeholder="Client Name">
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="form-group form-focus">
                        <select class="select-focus">
                            <option>Select Company</option>
                            <option>Global Technologies</option>
                            <option>Delta Infotech</option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <a href="#" class="btn btn-success btn-block"> Search </a>
                </div>--> 
            </div> */}
            

            {/* employees list */}
            <div className="row staff-grid-row">
                {ClientsList}
            </div>

            <Addclient />
            
            <Editclient client={Client} />
            <Deleteclient client={Client} />

        </Dashboardtemplate>
    );
}
