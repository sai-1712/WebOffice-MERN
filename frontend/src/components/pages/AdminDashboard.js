import React from 'react'
import Dashboardtemplate from "../UI/Dashboardtemplate"
import "../../public/assests/dashboard.css"
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux';

export default function AdminDashboard(props) {
    const {user} = useSelector((state) => state.auth);
return (
    <Dashboardtemplate>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="page-title">Welcome <span style={{textTransform: 'capitalize'}} > {props.user.name} </span> !</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item active"><a href="/dashboard">Dashboard</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- /Page Header --> */}

            {/* <!-- Cards  --> */}

            <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="card dash-widget">
                        <div className="card-body">
                            <span className="dash-widget-icon"><i className="fa fa-cubes"></i></span>
                            <div className="dash-widget-info">
                                <h3>{user.projects.length}</h3>
                                <span>Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="card dash-widget">
                        <div className="card-body">
                            <span className="dash-widget-icon"><i className="fa fa-usd"></i></span>
                            <div className="dash-widget-info">
                                <h3>4</h3>
                                <span>Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="card dash-widget">
                        <div className="card-body">
                            <span className="dash-widget-icon"><i className="fa fa-user"></i></span>
                            <div className="dash-widget-info">
                                <h3>10</h3>
                                <span>Employees</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="card dash-widget">
                        <div className="card-body">
                            <span className="dash-widget-icon"><i className="fa fa-user"></i></span>
                            <div className="dash-widget-info">
                                <h3>2</h3>
                                <span>Tasks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Statistics  --> */}

            <div className="row">
                <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
                    <div className="card flex-fill dash-statistics">
                        <div className="card-body">
                            <h5 className="card-title">Statistics</h5>
                            <div className="stats-list">
                                <div className="stats-info">
                                    <p>Today Leave <strong>4 <small>/ 65</small></strong></p>
                                    <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "31%"}} aria-valuenow={31} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className="stats-info">
                                    <p>Pending Invoice <strong>15 <small>/ 92</small></strong></p>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "31%"}} aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="stats-info">
                                    <p>Completed Projects <strong>85 <small>/ 112</small></strong></p>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "62%"}} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="stats-info">
                                    <p>Open Tickets <strong>190 <small>/ 212</small></strong></p>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "62%"}} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="stats-info">
                                    <p>Closed Tickets <strong>22 <small>/ 212</small></strong></p>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "22%"}} aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
                    <div className="card flex-fill">
                        <div className="card-body">
                            <h4 className="card-title">Project Statistics</h4>
                            <div className="statistics">
                                <div className="row">
                                    <div className="col-md-6 col-6 text-center">
                                        <div className="stats-box mb-4">
                                            <p>Total Projects</p>
                                            <h3>1</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 text-center">
                                        <div className="stats-box mb-4">
                                            <p>Overdue Projects</p>
                                            <h3>0</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-purple" role="progressbar" style={{width: "30%"}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>30%</div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "22%"}} aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">22%</div>
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "24%"}} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">24%</div>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "26%"}} aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">21%</div>
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">10%</div>
                            </div>
                            <div>
                                <p><i className="fa fa-dot-circle-o me-2" style={{color: "purple"}}></i>Completed Projects <span className="float-end">166</span></p>
                                <p><i className="fa fa-dot-circle-o text-warning me-2"></i>Inprogress Projects <span className="float-end">115</span></p>
                                <p><i className="fa fa-dot-circle-o text-success me-2"></i>On Hold Projects <span className="float-end">31</span></p>
                                <p><i className="fa fa-dot-circle-o text-danger me-2"></i>Pending Projects <span className="float-end">47</span></p>
                                <p className="mb-0"><i className="fa fa-dot-circle-o text-info me-2"></i>Review Projects <span className="float-end">5</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
                    <div className="card flex-fill">
                        <div className="card-body">
                            <h4 className="card-title">Today Absent <span className="badge bg-inverse-danger ml-2">5</span></h4>
                            <div className="leave-info-box">
                                <div className="d-flex align-items-center">
                                    <a href="/profile" className="avatar flex-shrink-0"><img alt="" src={require("../../public/Images/review3.png")}/></a>
                                    <div className="flex-grow-1">
                                        <div className="text-sm my-0">Vaibhav Lanister</div>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-6">
                                        <h6 className="mb-0">27 Mar 2022</h6>
                                        <span className="text-sm text-muted">Leave Date</span>
                                    </div>
                                    <div className="col-6 text-end">
                                        <span className="badge bg-inverse-danger">Pending</span>
                                    </div>
                                </div>
                            </div>
                            <div className="leave-info-box">
                                <div className="d-flex align-items-center">
                                    <a href="/profile" className="avatar flex-shrink-0"><img alt="" src={require("../../public/Images/review3.png")}/></a>
                                    <div className="flex-grow-1">
                                        <div className="text-sm my-0">Rahul Radon</div>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-6">
                                        <h6 className="mb-0">27 Mar 2022</h6>
                                        <span className="text-sm text-muted">Leave Date</span>
                                    </div>
                                    <div className="col-6 text-end">
                                        <span className="badge bg-inverse-success">Approved</span>
                                    </div>
                                </div>
                            </div>
                            <div className="load-more text-center">
                                <a className="text-dark" href="/leaves">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    </Dashboardtemplate>
  )
}
