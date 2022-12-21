import React from "react";
import { useState } from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate";
import ProjectList from "../cards_container/ProjectList";
import "../../public/assests/projects.css";
import Addproject from "../popup-models/Addproject";
import Editproject from "../popup-models/Editproject";
import DeleteProject from "../popup-models/DeleteProject";
import { useSelector } from "react-redux";

export default function Projects(props) {
    const { user } = useSelector((state) => state.auth);
    const NULLURL = "";
    const [Prj, setPrj] = useState({});

    const ProjectHandler = (event, pId) => {
        Projects.forEach((project) => {
            if (project._id === pId) {
                console.log(project);
                setPrj(project);
                return;
            }
        });
    };

    const useremail = String(user.email)
    const adminrole = useremail.includes("@manager")
    console.log(adminrole);

    return (
        <Dashboardtemplate>
            {/* <!-- Page Header --> */}
            <div className='page-header'>
                <div className='row align-items-center'>
                    <div className='col'>
                        <h3 className='page-title'>Projects</h3>
                        <ul className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <a href='/dashboard'>Dashboard</a>
                            </li>
                            <li className='breadcrumb-item active'>Projects</li>
                        </ul>
                    </div>
                    {
                        adminrole && <div className='col-auto float-end ms-auto'>
                        <a
                            href={NULLURL}
                            className='btn add-btn'
                            data-bs-toggle='modal'
                            data-bs-target='#create_project'
                        >
                            <i className='fa fa-plus'></i> Create Project
                        </a>
                        <div className='view-icons'>
                            <a href='/projects' className='grid-view btn active'>
                                <i className='fa fa-th'></i>
                            </a>
                            <a href={NULLURL} className='list-view btn'>
                                <i className='fa fa-bars'></i>
                            </a>
                        </div>
                    </div>
                    }
                    
                </div>
            </div>

            {/* <!-- Search bar  --> */}
            <div className='row filter-row'>
                <div className='col-sm-6 col-md-3'>
                    <div className='form-group form-focus'>
                        <input type='text' className='form-control floating' placeholder='Project Name' />
                    </div>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <div className='form-group form-focus'>
                        <input type='text' className='form-control floating' placeholder='Employee Name' />
                    </div>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <div className='form-group form-focus'>
                        <select className='select-focus'>
                            <option>Designation</option>
                            <option>Web Developer</option>
                            <option>Web Designer</option>
                            <option>Android Developer</option>
                            <option>Ios Developer</option>
                        </select>
                    </div>
                </div>
                <div className='col-sm-6 col-md-3'>
                    <a href={NULLURL} className='btn btn-success btn-block'>
                        {" "}
                        Search{" "}
                    </a>
                </div>
            </div>

            {/* <!-- Cards  --> */}
            {user && <ProjectList projectHandler={ProjectHandler} />}

            <Addproject />
            <Editproject prj={Prj} />
            <DeleteProject/>
        </Dashboardtemplate>
    );
}
