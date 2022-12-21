import React from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate"
import "../../public/assests/dashboard.css"
import moment from "moment";


export default function EmployeeDashboard(props) {
  return (
    <Dashboardtemplate>
                <div class="row">
                    <div class="col-md-12">
                        <div class="welcome-box">
                        <div class="welcome-img">
                            <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </div>
                        <div class="welcome-det">
                            <h3>Welcome, <span style={{textTransform: 'capitalize'}} > {props.user.name} </span> </h3>
                            <p>{moment().format('dddd')}, {moment().format('MMM Do YYYY')}</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <section class="col-md-6 d-flex">
                        <div class="card flex-fill">
                            <h5 class="card-header">Projects</h5>
                            <div class="card-body">
                            <div class="time-list">
                                <div class="dash-stats-list">
                                <h4>71</h4>
                                <p>Total Tasks</p>
                                </div>
                                <div class="dash-stats-list">
                                <h4>14</h4>
                                <p>Pending Tasks</p>
                                </div>
                            </div>
                            <div class="request-btn">
                                <div class="dash-stats-list">
                                <h4>2</h4>
                                <p>Total Projects</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-6 d-flex">
                        <div class="card flex-fill">
                            <h5 class="card-header">Your Leave</h5>
                            <div class="card-body">
                            <div class="time-list">
                                <div class="dash-stats-list">
                                <h4>4.5</h4>
                                <p>Leave Taken</p>
                                </div>
                                <div class="dash-stats-list">
                                <h4>12</h4>
                                <p>Remaining</p>
                                </div>
                            </div>
                            <div class="request-btn">
                                <a class="btn btn-primary" href="#">
                                Apply Leave
                                </a>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-6 d-flex">
                        <div class="card flex-fill">
                            <h5 class="card-header">Your time off allowance</h5>
                            <div class="card-body">
                            <div class="time-list">
                                <div class="dash-stats-list">
                                <h4>5.0 Hours</h4>
                                <p>Approved</p>
                                </div>
                                <div class="dash-stats-list">
                                <h4>15 Hours</h4>
                                <p>Remaining</p>
                                </div>
                            </div>
                            <div class="request-btn">
                                <a class="btn btn-primary" href="#">
                                Apply Time Off
                                </a>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-6 d-flex">
                        <div class="card flex-fill">
                            <h5 class="card-header">Upcoming Holiday</h5>
                            <div class="card-body text-center">
                            <h4 class="holiday-title mb-0">Mon 20 May 2019 - Ramzan</h4>
                            </div>
                        </div>
                    </section>
                </div>  
    </Dashboardtemplate>
  );
}
