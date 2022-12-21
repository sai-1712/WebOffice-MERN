/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import "../../public/assests/aboutus.css";

function AboutUs() {
    const NULLURL = ""
    
    return (
        <React.Fragment>
            <div className="aboutbody">
                <div className="about-section">
                    <div className="about-header">
                        <img className="abt-img" src={require("../../public/Images/about-us.png")}/>
                        <h1>About Us Page</h1>
                        <b>Students from Indian Institute of Information Technology,Sricity</b>
                        <h2 style={{textAlign: "center"}} >Our Team</h2>
                    </div>
                    <div className="aboutrow">
                        <div className="aboutcolumn">
                            <div className="aboutcard">
                                <div className="aboutcontainer">
                                    <h2> Ravirala Sai Kiran</h2>
                                    <b>
                                    <p className="abouttitle">Developer - Lead</p>
                                    </b>
                                    <h4>Student</h4>
                                    <h3>Indian Institute of Information Technology,Sricity</h3>
                                    <li className="ticket-link">
                                        <a href="mailto:saikiran.r20@iiits.in"><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;saikiran.r20@iiits.in</a>
                                    </li>
                                    <li>
                                        <a href="tel:+9163XXX-XXX76"><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+91 - 63XXX-XXX76</a>
                                    </li>
                                    <p><button className="aboutbutton">Contact</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="aboutcolumn">
                        <div className="aboutcard">
                        <div className="aboutcontainer">
                            <h2>Vaibhav Dasari</h2>
                            <b>
                            <p className="abouttitle">Developer</p>
                            </b>
                            <h4>Student</h4>
                            <h3>Indian Institute of Information Technology,Sricity</h3>
                            <li className="ticket-link"><a href="mailto:vaibhav.d20@iiits.in"><i className="fa fa-envelope-o"aria-hidden="true"></i>&nbsp;vaibhav.d20@iiits.in</a>
                            </li>
                            <li>
                            <a href="tel:+9181XXX-XXX68"><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+91 - 81XXX-XXX68</a>
                            </li>
                
                            <p><button className="aboutbutton">Contact</button></p>
                        </div>
                        </div>
                    </div>
                    <div className="aboutcolumn">
                        <div className="aboutcard">
                            <div className="aboutcontainer">
                                <h2>Vaibhav Dasari</h2>
                                <b>
                                <p className="abouttitle">Developer</p>
                                </b>
                                <h4>Student</h4>
                                <h3>Indian Institute of Information Technology,Sricity</h3>
                                <li className="ticket-link">
                                <a href="mailto:vaibhav.d20@iiits.in"><i className="fa fa-envelope-o"aria-hidden="true"></i>&nbsp;vaibhav.d20@iiits.in</a></li>
                                <li><a href="tel:+9181XXX-XXX68"><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+91 - 81XXX-XXX68</a>
                                </li>
                                <p><button className="aboutbutton">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutcolumn">
                        <div className="aboutcard">
                            <div className="aboutcontainer">
                            <h2>Sneha H S </h2>
                            <b>
                                <p className="abouttitle">Developer</p>
                            </b>
                            <h4>Student</h4>
                            <h3>Indian Institute of Information Technology,Sricity</h3>
                            <li className="ticket-link"><a href="mailto:sneha.hs20@iiits.in"><i className="fa fa-envelope-o"
                                    aria-hidden="true"></i>&nbsp;sneha.hs20@iits.in</a></li>
                            <li><a href="tel:+9174XXX-XXX99"><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+91 - 74XXX-XXX99</a>
                            </li>
                    
                            <p><button className="aboutbutton">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutcolumn">
                        <div className="aboutcard">    
                            <div className="aboutcontainer">
                            <h2> Pasumurthy Manohar Shashank</h2>
                            <b>
                                <p className="abouttitle">Developer</p>
                            </b>
                            <h4>Student</h4>
                            <h3>Indian Institute of Information Technology,Sricity</h3>
                            <li className="ticket-link"><a href="mailto:pasumarthymanohar.s20@iiits.in"><i className="fa fa-envelope-o"
                                    aria-hidden="true"></i>&nbsp;pasumarthymanohar.s20@iiits.in</a></li>
                            <li><a href="tel:+9170XXX-XXX23"><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+91 - 70XXX-XXX23</a>
                            </li>
                            <p><button className="aboutbutton">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>        
    );
}

export default AboutUs;