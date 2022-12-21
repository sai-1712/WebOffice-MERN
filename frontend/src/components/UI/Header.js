import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Header(props) {
    const logoutHandler = () => {
        console.log("item removed");
        localStorage.removeItem("jwttoken");
    };
    const UserObj  = useSelector((state) => state.auth);
    console.log(UserObj);
    const user = UserObj.user
    console.log("user in header: ", user);

    return (
        <React.Fragment>
            <div className='header'>
                {/* logo */}
                <div className='header-left'>
                    <a href='' className='logo'>
                        <img src={require("../../public/Images/review3.png")} alt='' />
                    </a>
                </div>

                {/* toggle button */}
                <a id='toggle_btn' onClick={props.onToggle}>
                    <i className='fa fa-bars'></i>
                </a>

                {/* <!-- Header Title --> */}
                <div className='page-title-box'>
                    <a href='/home'>
                        <h3>WebOffice</h3>
                    </a>
                </div>

                {/* <!-- Header Menu --> */}
                <ul className='nav user-menu'>
                    {/* <!-- Search --> */}
                    <li className='nav-item'>
                        <div className='top-nav-search'>
                            <form action='search.html'>
                                <input className='form-control' type='text' placeholder='Search here' />
                                <button className='btn' type='submit'>
                                    <i className='fa fa-search'></i>
                                </button>
                            </form>
                        </div>
                    </li>
                    {/* <!-- /Search --> */}

                    {/* <!-- Notifications --> */}
                    <li className='nav-item dropdown'>
                        <a href='#' className='dropdown-toggle nav-link' data-bs-toggle='dropdown'>
                            <i className='fa fa-bell-o'></i> <span className='badge badge-pill'>3</span>
                        </a>
                        <div className='dropdown-menu notifications'>
                            <div className='topnav-dropdown-header'>
                                <span className='notification-title'>Notifications</span>
                                <a href='' className='clear-noti'>
                                    {" "}
                                    Clear All{" "}
                                </a>
                            </div>
                            <div className='noti-content'>
                                <ul className='notification-list'>
                                    <li className='notification-message'>
                                        <a href=''>
                                            <div className=''>
                                                <span className='avatar'>
                                                    <img alt='' src={require("../../public/Images/review3.png")} />
                                                </span>
                                                <div className=''>
                                                    <p className='noti-details'>
                                                        <span className='noti-title'>Vaibhav</span> added new task{" "}
                                                        <span className='noti-title'>Patient appointment booking</span>
                                                    </p>
                                                    <p className='noti-time'>
                                                        <span className='notification-time'>4 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='topnav-dropdown-footer'>
                                <a href='activities.html'>View all Notifications</a>
                            </div>
                        </div>
                    </li>
                    {/* <!-- /Notifications --> */}

                    {/* <!-- Message Notifications --> */}
                    <li className='nav-item dropdown'>
                        <a href='#' className='dropdown-toggle nav-link' data-bs-toggle='dropdown'>
                            <i className='fa fa-comment-o'></i> <span className='badge badge-pill'>8</span>
                        </a>
                        <div className='dropdown-menu notifications'>
                            <div className='topnav-dropdown-header'>
                                <span className='notification-title'>Messages</span>
                                <a href='' className='clear-noti'>
                                    {" "}
                                    Clear All{" "}
                                </a>
                            </div>
                            <div className='noti-content'>
                                <ul className='notification-list'>
                                    <li className='notification-message'>
                                        <a href=''>
                                            <div className='list-item'>
                                                <div className=''>
                                                    <span className='avatar'>
                                                        <img alt='' src={require("../../public/Images/review3.png")} />
                                                    </span>
                                                </div>
                                                <div className=''>
                                                    <span className='message-author'>Vaibhav </span>
                                                    <span className='message-time'>12:28 AM</span>
                                                    <div className='clearfix'></div>
                                                    <span className='message-content'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className='notification-message'>
                                        <a href=''>
                                            <div className='list-item'>
                                                <div className=''>
                                                    <span className='avatar'>
                                                        <img alt='' src={require("../../public/Images/review3.png")} />
                                                    </span>
                                                </div>
                                                <div className=''>
                                                    <span className='message-author'> Rahul </span>
                                                    <span className='message-time'>6 Mar</span>
                                                    <div className='clearfix'></div>
                                                    <span className='message-content'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className='notification-message'>
                                        <a href=''>
                                            <div className='list-item'>
                                                <div className=''>
                                                    <span className='avatar'>
                                                        <img alt='' src={require("../../public/Images/review3.png")} />
                                                    </span>
                                                </div>
                                                <div className=''>
                                                    <span className='message-author'> Krishna </span>
                                                    <span className='message-time'>5 Mar</span>
                                                    <div className='clearfix'></div>
                                                    <span className='message-content'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='topnav-dropdown-footer'>
                                <a href='chat.html'>View all Messages</a>
                            </div>
                        </div>
                    </li>
                    {/* <!-- /Message Notifications --> */}

                    {/* Profile and Logout drop  */}
                    <li className='nav-item dropdown has-arrow main-drop'>
                        <a href='#' className='dropdown-toggle nav-link' data-bs-toggle='dropdown'>
                            <span className='user-img'>
                                <img alt='' src={require("../../public/Images/review3.png")} />
                            </span>
                            <span className='status online'></span>
                            <span style={{ fontSize: "1.25rem", textTransform: "capitalize" }}> {user.name}</span>
                        </a>
                        <div className='dropdown-menu'>
                            <a className='dropdown-item' href='/employeeprofile'>
                                My Profile
                            </a>
                            <a className='dropdown-item' href='#'>
                                Settings
                            </a>
                            <a className='dropdown-item' href='/login' onClick={logoutHandler}>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
                {/* <!-- /Header Menu --> */}
            </div>
        </React.Fragment>
    );
}
