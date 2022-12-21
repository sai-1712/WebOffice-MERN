import React from "react";
import { useState } from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate";
import "../../public/assests/Employeeprofile.css"
import { useDispatch, useSelector } from "react-redux";

export default function EmployeeProfile() {

    const UserObj  = useSelector((state) => state.auth);
    const user = UserObj.user
    console.log("user in ep: ", user);

    return (
        <Dashboardtemplate>
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="page-title">Profile</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ul>
                    </div>
                </div>
            </div>
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
                                                <h3 className="user-name m-t-0 mb-0">{user.name}</h3>
                                                <h6 className="text-muted">Web Design Team</h6>
                                                <small className="text-muted">Web Designer</small>
                                                <div className="staff-id">Employee ID : FT-0001</div>
                                                <div className="small doj text-muted">Date of Join : 1st April 2022</div>

                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="personal-info">
                                                <li>
                                                    <div className="title">Phone:</div>
                                                    <div className="text"><a href="">9876543210</a></div>
                                                </li>
                                                <li>
                                                    <div className="title">Email:</div>
                                                    <div className="text"><a href="">rahulk@example.com</a></div>
                                                </li>
                                                <li>
                                                    <div className="title">Birthday:</div>
                                                    <div className="text">24th July</div>
                                                </li>
                                                <li>
                                                    <div className="title">Address:</div>
                                                    <div className="text">Gnan marg, Sri City, A.P</div>
                                                </li>
                                                <li>
                                                    <div className="title">Gender:</div>
                                                    <div className="text">Male</div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-edit"><a data-target="#profile_info" data-bs-toggle="modal" className="edit-icon"
                                    href="#"><i className="fa fa-pencil"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card tab-box">
                <div className="row user-tabs">
                    <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                        <ul className="nav nav-tabs nav-tabs-bottom">
                            <li className="nav-item"><a href="#emp_profile" data-bs-toggle="tab" className="nav-link active">Profile</a></li>
                            <li className="nav-item"><a href="#emp_projects" data-bs-toggle="tab" className="nav-link">Projects</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tab-content">
                <div id="emp_profile" className="pro-overview tab-pane fade show active">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="card profile-box flex-fill">
                                <div className="card-body">
                                    <h3 className="card-title">Personal Informations <a href="#" className="edit-icon" data-bs-toggle="modal"
                                        data-bs-target="#personal_info_modal"><i className="fa fa-pencil"></i></a></h3>
                                    <ul className="personal-info">

                                        <li>
                                            <div className="title">Tel</div>
                                            <div className="text"><a href="">9876543210</a></div>
                                        </li>
                                        <li>
                                            <div className="title">Nationality</div>
                                            <div className="text">Indian</div>
                                        </li>
                                        <li>
                                            <div className="title">Religion</div>
                                            <div className="text">Christian</div>
                                        </li>
                                        <li>
                                            <div className="title">Marital status</div>
                                            <div className="text">Married</div>
                                        </li>
                                        <li>
                                            <div className="title">Employment of spouse</div>
                                            <div className="text">No</div>
                                        </li>
                                        <br />
                                        <li>
                                            <div className="title">No. of children</div>
                                            <div className="text">2</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="card profile-box flex-fill">
                                <div className="card-body">
                                    <h3 className="card-title">Emergency Contact <a href="#" className="edit-icon" data-bs-toggle="modal"
                                        data-bs-target="#emergency_contact_modal"><i className="fa fa-pencil"></i></a></h3>
                                    <h5 className="section-title">Primary</h5>
                                    <ul className="personal-info">
                                        <li>
                                            <div className="title">Name</div>
                                            <div className="text">Vaibhav</div>
                                        </li>
                                        <li>
                                            <div className="title">Relationship</div>
                                            <div className="text">Father</div>
                                        </li>
                                        <li>
                                            <div className="title">Phone </div>
                                            <div className="text">9876543210, 9876543210</div>
                                        </li>
                                    </ul>
                                    <hr />
                                    <h5 className="section-title">Secondary</h5>
                                    <ul className="personal-info">
                                        <li>
                                            <div className="title">Name</div>
                                            <div className="text">Sai</div>
                                        </li>
                                        <li>
                                            <div className="title">Relationship</div>
                                            <div className="text">Brother</div>
                                        </li>
                                        <li>
                                            <div className="title">Phone </div>
                                            <div className="text">9876543210, 9876543210</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="card profile-box flex-fill">
                                <div className="card-body">
                                    <h3 className="card-title">Education Informations <a href="#" className="edit-icon" data-bs-toggle="modal"
                                        data-target="#education_info"><i className="fa fa-pencil"></i></a></h3>
                                    <div className="experience-box">
                                        <ul className="experience-list">
                                            <li>
                                                <div className="experience-user">
                                                    <div className="before-circle"></div>
                                                </div>
                                                <div className="experience-content">
                                                    <div className="timeline-content">
                                                        <a href="#/" className="name">IIITS (UG)</a>
                                                        <div>Computer Science</div>
                                                        <span className="time">2012 - 2016</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="experience-user">
                                                    <div className="before-circle"></div>
                                                </div>
                                                <div className="experience-content">
                                                    <div className="timeline-content">
                                                        <a href="#/" className="name">International College of Arts and Science (PG)</a>
                                                        <div>Msc Computer Science</div>
                                                        <span className="time">2016 - 2018</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="card profile-box flex-fill">
                                <div className="card-body">
                                    <h3 className="card-title">Experience <a href="#" className="edit-icon" data-bs-toggle="modal"
                                        data-target="#experience_info"><i className="fa fa-pencil"></i></a></h3>
                                    <div className="experience-box">
                                        <ul className="experience-list">
                                            <li>
                                                <div className="experience-user">
                                                    <div className="before-circle"></div>
                                                </div>
                                                <div className="experience-content">
                                                    <div className="timeline-content">
                                                        <a href="#/" className="name">Web Designer at Flipkart</a>
                                                        <span className="time">Jan 2013 - Present</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="experience-user">
                                                    <div className="before-circle"></div>
                                                </div>
                                                <div className="experience-content">
                                                    <div className="timeline-content">
                                                        <a href="#/" className="name">Web Designer at Zenpact</a>
                                                        <span className="time">Mar 2010 - 2013</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="emp_projects">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="dropdown profile-action">
                                        <a aria-expanded="false" data-bs-toggle="dropdown" className="action-icon dropdown-toggle"
                                            href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a data-bs-target="#edit_project" data-bs-toggle="modal" href="#" className="dropdown-item"><i
                                                className="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a data-target="#delete_project" data-bs-toggle="modal" href="#" className="dropdown-item"><i
                                                className="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 className="project-title"><a href="project-view.html">Office Management</a></h4>
                                    <small className="block text-ellipsis m-b-15">
                                        <span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
                                        <span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
                                    </small>
                                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. When an unknown printer took a galley of type and
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
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Jeffery Lalor"><img
                                                    alt="" src="/Images/review3.png" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="project-members m-b-15">
                                        <div>Team :</div>
                                        <ul className="team-members">
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="John Doe"><img
                                                    alt="" src="/Images/review4.png" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Richard Miles"><img
                                                    alt="" src="/Images/review6.png" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="John Smith"><img
                                                    alt="" src="/Images/review3.png" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Mike Litorus"><img
                                                    alt="" src="/Images/review6.png" /></a>
                                            </li>
                                            <li>
                                                <a href="#" className="all-users">+15</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                    <div className="progress progress-xs mb-0">
                                        <div style={{ width: 40 }} title="" data-bs-toggle="tooltip" role="progressbar"
                                            className="progress-bar bg-success" data-original-title="40%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="dropdown profile-action">
                                        <a aria-expanded="false" data-bs-toggle="dropdown" className="action-icon dropdown-toggle"
                                            href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a data-target="#edit_project" data-bs-toggle="modal" href="#" className="dropdown-item"><i
                                                className="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a data-target="#delete_project" data-bs-toggle="modal" href="#" className="dropdown-item"><i
                                                className="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 className="project-title"><a href="project-view.html">Project Management</a></h4>
                                    <small className="block text-ellipsis m-b-15">
                                        <span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
                                        <span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
                                    </small>
                                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. When an unknown printer took a galley of type and
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
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Jeffery Lalor"><img
                                                    alt="" src="assets/img/profiles/avatar-16.jpg" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="project-members m-b-15">
                                        <div>Team :</div>
                                        <ul className="team-members">
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="John Doe"><img
                                                    alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Richard Miles"><img
                                                    alt="" src="assets/img/profiles/avatar-09.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="John Smith"><img
                                                    alt="" src="assets/img/profiles/avatar-10.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Mike Litorus"><img
                                                    alt="" src="assets/img/profiles/avatar-05.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" className="all-users">+15</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                    <div className="progress progress-xs mb-0">
                                        <div style={{ width: 40 }} title="" data-bs-toggle="tooltip" role="progressbar"
                                            className="progress-bar bg-success" data-original-title="40%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="dropdown profile-action">
                                        <a aria-expanded="false" data-bs-toggle="dropdown" className="action-icon dropdown-toggle"
                                            href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a data-target="#edit_project" data-bs-toggle="modal" href="#" className="dropdown-item"><i
                                                className="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a data-target="#delete_project" data-bs-toggle="modal" href="#" className="dropdown-item"><i
                                                className="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 className="project-title"><a href="project-view.html">Video Calling App</a></h4>
                                    <small className="block text-ellipsis m-b-15">
                                        <span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
                                        <span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
                                    </small>
                                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. When an unknown printer took a galley of type and
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
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Jeffery Lalor"><img
                                                    alt="" src="assets/img/profiles/avatar-16.jpg" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="project-members m-b-15">
                                        <div>Team :</div>
                                        <ul className="team-members">
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="John Doe"><img
                                                    alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Richard Miles"><img
                                                    alt="" src="assets/img/profiles/avatar-09.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="John Smith"><img
                                                    alt="" src="assets/img/profiles/avatar-10.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Mike Litorus"><img
                                                    alt="" src="assets/img/profiles/avatar-05.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" className="all-users">+15</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                    <div className="progress progress-xs mb-0">
                                        <div style={{ width: 40 }} title="" data-bs-toggle="tooltip" role="progressbar"
                                            className="progress-bar bg-success" data-original-title="40%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="dropdown profile-action">
                                        <a aria-expanded="false" data-bs-toggle="dropdown" className="action-icon dropdown-toggle"
                                            href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a data-target="#edit_project" data-bs-toggle="modal" href="#" className="dropdown-item"><i
                                                className="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a data-target="#delete_project" data-bs-toggle="modal" href="#" className="dropdown-item"><i
                                                className="fa fa-trash-o m-r-5"></i> Delete</a>
                                        </div>
                                    </div>
                                    <h4 className="project-title"><a href="project-view.html">Hospital Administration</a></h4>
                                    <small className="block text-ellipsis m-b-15">
                                        <span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
                                        <span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
                                    </small>
                                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. When an unknown printer took a galley of type and
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
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Jeffery Lalor"><img
                                                    alt="" src="assets/img/profiles/avatar-16.jpg" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="project-members m-b-15">
                                        <div>Team :</div>
                                        <ul className="team-members">
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="John Doe"><img
                                                    alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Richard Miles"><img
                                                    alt="" src="assets/img/profiles/avatar-09.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="John Smith"><img
                                                    alt="" src="assets/img/profiles/avatar-10.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="" data-original-title="Mike Litorus"><img
                                                    alt="" src="assets/img/profiles/avatar-05.jpg" /></a>
                                            </li>
                                            <li>
                                                <a href="#" className="all-users">+15</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                    <div className="progress progress-xs mb-0">
                                        <div style={{ width: 40 }} title="" data-bs-toggle="tooltip" role="progressbar"
                                            className="progress-bar bg-success" data-original-title="40%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Dashboardtemplate>
    )
}