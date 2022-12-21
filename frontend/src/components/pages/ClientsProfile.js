/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate";
import '../../public/assests/clients_profile.css';


export default function ClientsProfile() {
    return(
        <Dashboardtemplate>
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="page-title">Profile</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- /Page Header --> */}

            {/* <!-- Main html code goes here  --> */}
            <div className="card mb-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-view">
                                <div className="profile-img-wrap">
                                    <div className="profile-img">
                                        <a href="" className="avatar">
                                            <img src={require("../../public/Images/review3.png")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="profile-basic">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="profile-info-left">
                                                <h3 className="user-name m-t-0">Global Technologies</h3>
                                                <h5 className="company-role m-t-0 mb-0">Vaibhav</h5>
                                                <small className="text-muted">CEO</small>
                                                <div className="staff-id">Employee ID : CLT-0001</div>
                                                {/* <!-- <div className="staff-msg"><a href="chat.html"
                                                    className="btn btn-custom">Send Message</a>
                                                </div> --> */}
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="personal-info">
                                                <li>
                                                    <span className="title">Phone:</span>
                                                    <span className="text"><a href="">9876543210</a></span>
                                                </li>
                                                <li>
                                                    <span className="title">Email:</span>
                                                    <span className="text"><a href="">vaibhavd@example.com</a></span>
                                                </li>
                                                <li>
                                                    <span className="title">Birthday:</span>
                                                    <span className="text">2nd August</span>
                                                </li>
                                                <li>
                                                    <span className="title">Address:</span>
                                                    <span className="text">Sri city, A.P</span>
                                                </li>
                                                <li>
                                                    <span className="title">Gender:</span>
                                                    <span className="text">Male</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card tab-box">
                <div className="row user-tabs">
                    <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                        <ul className="nav nav-tabs nav-tabs-bottom">
                            <li className="nav-item col-sm-3"><a className="nav-link active" data-bs-toggle="tab"
                                href="#myprojects">Projects</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="tab-content profile-tab-content">

                        {/* <!-- Projects Tab --> */}
                        <div id="myprojects" className="tab-pane fade show active">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown profile-action">
                                                <a href="#" className="action-icon dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="fa-solid fa-ellipsis-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-target="#edit_project"><i
                                                            className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-target="#delete_project"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="project-view.html">Office
                                                Management</a></h4>
                                            <small className="block text-ellipsis m-b-15">
                                                <span className="text-xs">1</span> <span className="text-muted">open tasks,
                                                </span>
                                                <span className="text-xs">9</span> <span className="text-muted">tasks
                                                    completed</span>
                                            </small>
                                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing
                                                and
                                                typesetting industry. When an unknown printer took a galley of type
                                                and
                                                scrambled it...
                                            </p>
                                            <div className="pro-deadline m-b-15">
                                                <div className="sub-title">
                                                    Deadline:
                                                </div>
                                                <div className="text-muted">
                                                    17 Apr 2019
                                                </div>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Project Leader :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Jeffery Lalor"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Team :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="John Doe"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Richard Miles"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="John Smith"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Mike Litorus"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="m-b-5">Progress <span
                                                className="text-success float-right">40%</span></p>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-success" role="progressbar"
                                                    data-bs-toggle="tooltip" title="" style={{width: "40%"}}
                                                    data-original-title="40%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown profile-action">
                                                <a href="#" className="action-icon dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="fa-solid fa-ellipsis-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-target="#edit_project"><i
                                                            className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-target="#delete_project"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="project-view.html">Project
                                                Management</a></h4>
                                            <small className="block text-ellipsis m-b-15">
                                                <span className="text-xs">2</span> <span className="text-muted">open tasks,
                                                </span>
                                                <span className="text-xs">5</span> <span className="text-muted">tasks
                                                    completed</span>
                                            </small>
                                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing
                                                and
                                                typesetting industry. When an unknown printer took a galley of type
                                                and
                                                scrambled it...
                                            </p>
                                            <div className="pro-deadline m-b-15">
                                                <div className="sub-title">
                                                    Deadline:
                                                </div>
                                                <div className="text-muted">
                                                    17 Apr 2019
                                                </div>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Project Leader :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Jeffery Lalor"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Team :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="John Doe"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Richard Miles"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="John Smith"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Mike Litorus"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="m-b-5">Progress <span
                                                className="text-success float-right">40%</span></p>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-success" role="progressbar"
                                                    data-bs-toggle="tooltip" title="" style={{ width: "40%" }}
                                                    data-original-title="40%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown profile-action">
                                                <a href="#" className="action-icon dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="fa-solid fa-ellipsis-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-target="#edit_project"><i
                                                            className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-target="#delete_project"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="project-view.html">Video Calling
                                                App</a></h4>
                                            <small className="block text-ellipsis m-b-15">
                                                <span className="text-xs">3</span> <span className="text-muted">open tasks,
                                                </span>
                                                <span className="text-xs">3</span> <span className="text-muted">tasks
                                                    completed</span>
                                            </small>
                                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing
                                                and
                                                typesetting industry. When an unknown printer took a galley of type
                                                and
                                                scrambled it...
                                            </p>
                                            <div className="pro-deadline m-b-15">
                                                <div className="sub-title">
                                                    Deadline:
                                                </div>
                                                <div className="text-muted">
                                                    17 Apr 2019
                                                </div>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Project Leader :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Jeffery Lalor"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Team :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="John Doe"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Richard Miles"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="John Smith"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Mike Litorus"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="m-b-5">Progress <span
                                                className="text-success float-right">40%</span></p>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-success" role="progressbar"
                                                    data-bs-toggle="tooltip" title="" style={{ width: "40%" }}
                                                    data-original-title="40%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown profile-action">
                                                <a href="#" className="action-icon dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="fa-solid fa-ellipsis-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-target="#edit_project"><i
                                                            className="fa fa-pencil m-r-5"></i> Edit</a>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                        data-target="#delete_project"><i
                                                            className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="project-view.html">Hospital
                                                Administration</a></h4>
                                            <small className="block text-ellipsis m-b-15">
                                                <span className="text-xs">12</span> <span className="text-muted">open tasks,
                                                </span>
                                                <span className="text-xs">4</span> <span className="text-muted">tasks
                                                    completed</span>
                                            </small>
                                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing
                                                and
                                                typesetting industry. When an unknown printer took a galley of type
                                                and
                                                scrambled it...
                                            </p>
                                            <div className="pro-deadline m-b-15">
                                                <div className="sub-title">
                                                    Deadline:
                                                </div>
                                                <div className="text-muted">
                                                    17 Apr 2019
                                                </div>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Project Leader :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Jeffery Lalor"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Team :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="John Doe"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Richard Miles"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="John Smith"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="tooltip" title=""
                                                            data-original-title="Mike Litorus"><img alt=""
                                                                src={require("../../public/Images/review3.png")}/></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="m-b-5">Progress <span
                                                className="text-success float-right">40%</span></p>
                                            <div className="progress progress-xs mb-0">
                                                <div className="progress-bar bg-success" role="progressbar"
                                                    data-bs-toggle="tooltip" title="" style={{ width: "40%" }}
                                                    data-original-title="40%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Projects Tab --> */}

                    </div>
                </div>
            </div>
        </Dashboardtemplate>
    );
}