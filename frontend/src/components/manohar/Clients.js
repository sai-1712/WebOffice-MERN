/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate";
import "../../public/assests/clients.css";
import Addclient from "../popup-models/Addclient";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import Modal from "react-modal";

import { useSelector } from "react-redux";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",

        width: 750,
        height: 640,
    },
}


const NULLURL = ""

const Clients = ({ client, Deleteclient }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const clients = useSelector(state => state);


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

                    <div className="col-auto float-right ml-auto">
                        <a
                            href={NULLURL}
                            className="btn add-btn"
                            onClick={setModalOpen}
                            data-bs-toggle="modal"
                            data-bs-target="#add_client"
                        >
                            <i className="fa fa-plus"></i> Add Client
                        </a>
                    </div>
                    <Modal
                        isOpen={modalOpen}
                        onRequestClose={() => setModalOpen(false)}
                        style={customStyles}

                    >
                        <Addclient />
                        <div class="add-btn1">
                            <button class="btn btn-primary submit-btn" onClick={() => setModalOpen(false)} >Close</button>
                        </div>
                    </Modal>
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
            <div className="row">
                <div class="col-md-12">

                    <div class="table-responsive">
                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table table-striped custom-table datatable dataTable no-footer"
                                        id="DataTables_Table_0" role="grid"
                                        aria-describedby="DataTables_Table_0_info">
                                        <thead>
                                                
                                            <tr role="row">
                                                <th class="sorting_asc" tabindex="0"
                                                    aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                    style={{ width: "230.262px;" }}>Id
                                                </th>
                                                <th class="sorting_asc" tabindex="0"
                                                    aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                    style={{ width: "230.262px;" }}>Name
                                                </th>
                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                                    rowspan="1" colspan="1"
                                                    aria-label="Client ID: activate to sort column ascending"
                                                    style={{ width: "74.95px;" }}>Client ID</th>
                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                                    rowspan="1" colspan="1"
                                                    aria-label="Email: activate to sort column ascending"
                                                    style={{ width: "209.25px" }}>Email</th>
                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                                    rowspan="1" colspan="1"
                                                    aria-label="Mobile: activate to sort column ascending"
                                                    style={{ width: "78.3875px;" }}>Mobile</th>
                                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                                    rowspan="1" colspan="1"
                                                    aria-label="Status: activate to sort column ascending"
                                                    style={{ width: "102.488px;" }}>Company</th>
                                                <th class="text-right sorting" tabindex="0"
                                                    aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                                    aria-label="Action: activate to sort column ascending"
                                                    style={{ width: "56.5625px;" }}>Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        {clients.length > 0 ? (
                                            clients.map((clients, id) => (
                                                <tr key={id}>
                                                    <td>{id + 1}</td>
                                                    <td>{clients.Name}</td>
                                                    <td>{clients.ClientID}</td>
                                                    <td>{clients.Email}</td>
                                                    <td>{clients.Mobile}</td>
                                                    <td>{clients.Company}</td>
                                                    <td>{clients.Actions}</td>

                                                    <Link
                                                        to={`/Editclient/${client.id}`}
                                                        className="btn btn-sm btn-primary mr-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() => Deleteclient(client.id)}
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                        Delete
                                                    </button>

                                                </tr>
                                            ))
                                        ) : (
                                                    <tr>
                                                        <th>No clients found</th>
                                                    </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
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
            </div>

            {/* employees list */}


        </Dashboardtemplate>
    );
};
const mapStateToProps = (state) => ({
    client: state,
});

const mapDispatchToProps = (dispatch) => ({
    Deleteclient: (id) => {
        dispatch({ type: "DELETE_Client", payload: id });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
