import React, { useState, useEffect } from "react";
import "../../public/assests/homepage.css";
import ProgressBar from "react-progressbar-on-scroll";

export default function Home() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <React.Fragment>
            <section className='homebody'>
                {/* <!-- Header  --> */}

                <section className={`head-home ${sticky ? "sticky" : ""}`}>
                    {/* <!-- SCROLL INDICATOR --> */}
                    <ProgressBar color='#092dcca1' />

                    {/* <!-- NAVBAR  --> */}
                    <nav className='navbar navbar-expand-lg navbar-dark'>
                        <div className='logo-home'>
                            <span>
                                <i className='fa-solid fa-chalkboard-user' style={{ color: "rgb(3, 42, 126)" }}></i>
                            </span>
                        </div>

                        <a className='navbar-brand' href='#'>
                            WebOffice
                        </a>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarNavDropdown'
                            aria-controls='navbarNavDropdown'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                            <ul className='navbar-nav ms-auto'>
                                <li className='nav-item'>
                                    <a className='nav-link active' aria-current='page' href='#'>
                                        Home
                                    </a>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a
                                        className='nav-link dropdown-toggle'
                                        href='#'
                                        id='navbarDropdownMenuLink'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        Features
                                    </a>
                                    <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Attendance
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Projects
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Salary Sanction
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#price'>
                                        Pricing
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/aboutus'>
                                        About us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href='/login' className='btn btn-outline-light login-button'>
                            Login
                        </a>
                    </nav>
                </section>

                {/* <!-- TITLE SECTION  --> */}

                <section id='title'>
                    <div className='container-fluid'>
                        {/* <!-- Title --> */}

                        <div className='row'>
                            <div className='col-lg-6 intro'>
                                <h1>
                                    Manage Your <br /> Employee's Schedule <br /> and Projects
                                </h1>
                                <div className='intro-desc'>
                                    <p className=''>
                                        Employee Management software for companies and remote teams
                                        <br />
                                        With our core features:
                                    </p>
                                    <ul className='bullet-list'>
                                        <li>
                                            <span>
                                                <a href='' className='bullet-list-links'>
                                                    Project Management
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <a href='' className='bullet-list-links'>
                                                    Time sheet and Attendance
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <a href='' className='bullet-list-links'>
                                                    Work Schedule
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <a href='/login' type='button' className='btn btn-dark btn-lg download-button'>
                                    Free Trail
                                </a>
                                <a href='/login' type='button' className='btn btn-lg get-started'>
                                    Get Started
                                </a>
                            </div>
                            {/* <!-- HOME IMAGE  --> */}

                            <div className='col-lg-6 homepic'>
                                <div className='intro-images'>
                                    <div className='row-img row1'>
                                        <img
                                            src={require("../../public/Images/1.png")}
                                            alt='Raise your revenues with WebWork Time Tracker'
                                            className='anim-1'
                                        />
                                        <img
                                            src={require("../../public/Images/2.png")}
                                            alt='time tracker with screenshots'
                                            className='anim-2'
                                        />
                                        <img
                                            src={require("../../public/Images/10.png")}
                                            alt='Boost Productivity with WebWork Time Tracker'
                                            className='anim-3'
                                        />
                                    </div>
                                    <div className='row-img row2'>
                                        <img
                                            src={require("../../public/Images/3.png")}
                                            alt='employee monitoring software'
                                            className='anim-4'
                                        />
                                        <img
                                            src={require("../../public/Images/4.png")}
                                            alt='time tracker with screenshots'
                                            className='anim-5'
                                        />
                                        <img
                                            src={require("../../public/Images/5.png")}
                                            alt='employee monitoring software'
                                            className='anim-6'
                                        />
                                        <img
                                            src={require("../../public/Images/6.png")}
                                            alt='time tracker with screenshots'
                                            className='anim-7'
                                        />
                                        <img
                                            src={require("../../public/Images/8.png")}
                                            alt='employee monitoring software'
                                            className='anim-8'
                                        />
                                    </div>
                                    <div className='row-img row3'>
                                        <img
                                            src={require("../../public/Images/7.png")}
                                            alt='image'
                                            className='anim-9'
                                        />
                                        <img
                                            src={require("../../public/Images/9.png")}
                                            alt='Save your time with WebWork Time Tracker'
                                            className='anim-10'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Features --> */}

                <section id='features'>
                    <img
                        src={require("../../public/Images/rect-outline-sm.png")}
                        className='img-fluid rect-bg rect-outline--1'
                        alt='tracked time'
                    />

                    <h2 className='feature-title'>Lead the industry with our features</h2>

                    <div className='feature-content'>
                        <div className='feature-card col-lg-4'>
                            <div className='feature-icon'>
                                <i className='fas fa-check-circle fa-2x'></i>
                            </div>
                            <h3 className='featurecard-title'>Easy to use.</h3>
                            <p className='feature-text'>All Features are clearly displayed under Dashboard.</p>
                            <img src={require("../../public/Images/arrow-down.png")} className='arrow-down' alt='' />
                        </div>
                        <div className='feature-card col-lg-4'>
                            <div className='feature-icon'>
                                <i className='fas fa-bullseye fa-2x'></i>
                            </div>
                            <h3 className='featurecard-title'>Job Scheduling</h3>
                            <p className='feature-text'>
                                Schedule daily tasks for your team and system will ensure they will follow it.
                            </p>
                            <img src={require("../../public/Images/arrow-down.png")} className='arrow-down' alt='' />
                        </div>
                        <div className='feature-card col-lg-4'>
                            <div className='feature-icon'>
                                <i className='fa-solid fa-business-time fa-2x'></i>
                            </div>
                            <h3 className='featurecard-title'>Time Sheet</h3>
                            <p className='feature-text'>
                                Manage attendance, clock-in and clock-out time and build timesheet.
                            </p>
                            <img src={require("../../public/Images/arrow-down.png")} className='arrow-down' alt='' />
                        </div>
                    </div>
                </section>

                {/* <!-- Testimonials --> */}

                <section id='testimonials'>
                    <div id='testimonial-carousel' className='carousel slide' data-ride='carousel'>
                        <div className='carousel-indicators'>
                            <button
                                type='button'
                                data-bs-target='#testimonial-carousel'
                                data-bs-slide-to='0'
                                className='active'
                                aria-current='true'
                                aria-label='Slide 1'
                            ></button>
                            <button
                                type='button'
                                data-bs-target='#testimonial-carousel'
                                data-bs-slide-to='1'
                                aria-label='Slide 2'
                            ></button>
                        </div>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <h2>KASPAR L. PALGI</h2>
                                <p>
                                    I have used most of the time tracking software out there by now and WebWork Tracker
                                    is the best one. The main feature that others are missing is the ability to delete
                                    time not worked on the project. WebWork Tracker is most cost effective software
                                    compared to others, has great project management, roles/permissions & invoicing
                                    functionality.
                                </p>
                                <img
                                    className='testimonials-image'
                                    src={require("../../public/Images/review4.png")}
                                    alt='dog-profile'
                                />
                                <span style={{ color: "white" }}>- e-stonia.co.uk </span>
                            </div>
                            <div className='carousel-item'>
                                <h2>MICHIEL BROEK</h2>
                                <p>
                                    WebWork Time Tracker is an awesome tool. It has been 8 months since we are using
                                    WebWork Time Tracker in our team. And I can tell you just one thing: our company has
                                    increased the profitability by 25% since then. This is all you need to know how
                                    WebWork Time Tracker can affect your business.
                                </p>
                                <img
                                    className='testimonials-image'
                                    src={require("../../public/Images/review6.png")}
                                    alt='lady-profile'
                                />
                                <span> - www.hakpro.nl</span>
                            </div>
                        </div>
                        <a
                            className='carousel-control-prev'
                            href='#testimonial-carousel'
                            role='button'
                            data-bs-slide='prev'
                        >
                            <span className='carousel-control-prev-icon'></span>
                        </a>
                        <a
                            className='carousel-control-next'
                            href='#testimonial-carousel'
                            role='button'
                            data-bs-slide='next'
                        >
                            <span className='carousel-control-next-icon'></span>
                        </a>
                    </div>
                </section>

                {/* <!-- Pricing panel  --> */}

                <section className='section-pricing' id='price'>
                    <div className='container'>
                        <div className='row'>
                            <div className='pricing-bg'>
                                <img
                                    src='https://www.webwork-tracker.com/images/rebranding/homepage/price-purple.png'
                                    className='img-fluid rect-bg price-bg pr-purple'
                                    alt='Cheap Time Tracker with Screenshots | WebWork'
                                />
                            </div>
                            <div className='col-sm-10 col-md-4 price-monthly'>
                                <p className='price-def'>user/month</p>
                                <div className='text-center'>
                                    <span>₹</span>
                                    <p className='price'>499</p>
                                </div>
                                <a href='login' type='button' className='btn btn-lg get-started'>
                                    Get Started
                                </a>
                            </div>
                            <div className='col-sm-10 col-md-4 price-monthly'>
                                <p className='price-def'>Admin/month</p>
                                <div className='text-center'>
                                    <span>₹</span>
                                    <p className='price'>999</p>
                                </div>
                                <a href='login' type='button' className='btn btn-lg get-started'>
                                    Get Started
                                </a>
                            </div>
                            <div className='col-sm-10 col-md-4 ps-lg-5 mt-3 z-index-1'>
                                <h4 className='title-large'>
                                    Affordable <br />
                                    simple pricing
                                </h4>
                                <ul className='bullet-list'>
                                    <li>
                                        <span>All features in one price</span>
                                    </li>
                                    <li>
                                        <span>Try Free for 7 days</span>
                                    </li>
                                    <li>
                                        <span>Use now, pay in 30 days</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Have any further questions  --> */}

                <section id='faq'>
                    <div class='container'>
                        <div class='col-sm-6 faq-desc'>
                            <h2 class='faq-title'>
                                Have any further <br /> questions ?
                            </h2>
                            <br />
                            <a type='button' href='/contactus' class='btn btn-lg btn-outline-dark'>
                                Contact us
                            </a>
                        </div>
                        <div class='col-sm-6 faq-image'>
                            <img src={require("../../public/Images/Chat.webp")} alt='' />
                        </div>
                    </div>
                </section>

                {/* <!-- Footer --> */}

                <footer id='footer'>
                    <pre>
                        <i class='fab fa-twitter'></i> <i class='fab fa-facebook'></i> <i class='fab fa-instagram'></i>{" "}
                        <i class='fas fa-envelope'></i>
                    </pre>
                    <p>© Copyright WebOffice</p>
                </footer>
            </section>
        </React.Fragment>
    );
}
