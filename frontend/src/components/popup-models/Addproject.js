import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../store/actions/project-actions";
import "../../public/assests/login.css";

export default function Addproject(props) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [projectnameValid, setprojectNameValid] = useState(null);
    const [clientnameValid, setclientnameValid] = useState(null);
    const [startDateValid, setstartDateValid] = useState(null);
    const [endDateValid, setendDateValid] = useState(null);
    const [budgetValid, setbudgetValid] = useState(null);
    const [priorityValid, setpriorityValid] = useState(null);
    const [projectleaderValid, setprojectleaderValid] = useState(null);
    const [teamValid, setteamValid] = useState(null);
    const [descValid, setdescValid] = useState(null);

    const [project, setProject] = useState({
        _id: user._id,
        projectName: "",
        clientName: "",
        startDate: "",
        endDate: "",
        budget: "",
        priority: "",
        projectLeader: "",
        team: [],
        pdescription: "",
        progress: "Pending",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(project);
        if (
            project.projectName === "" ||
            project.clientName === "" ||
            project.startDate === "" ||
            project.endDate === "" ||
            project.budget === "" ||
            project.priority === "" ||
            project.projectLeader === "" ||
            project.team === "" ||
            project.pdescription === ""
        ) {
            if (project.projectName === "") setprojectNameValid(false);
            if (project.clientName === "") setclientnameValid(false);
            if (project.startDate === "") setstartDateValid(false);
            if (project.endDate === "") setendDateValid(false);
            if (project.budget === "") setbudgetValid(false);
            if (project.priority === "") setpriorityValid(false);
            if (project.projectLeader === "") setprojectleaderValid(false);
            if (project.team === "") setteamValid(false);
            if (project.pdescription === "") setdescValid(false);
            return;
        }

        const p = project;
        dispatch(addProject(p));
        window.location.reload();
    };

    const onChange = (e) => {
        if (e.target.name === "team") {
            const tasks = e.target.value.split(",");
            setProject({ ...project, [e.target.name]: tasks });
        } else {
            setProject({ ...project, [e.target.name]: e.target.value });
        }
    };

    const oncloseHandler = (e) => {
        setprojectNameValid(null);
        setclientnameValid(null);
        setstartDateValid(null);
        setendDateValid(null);
        setbudgetValid(null);
        setpriorityValid(null);
        setprojectleaderValid(null);
        setteamValid(null);
        setdescValid(null);

        setProject({
            _id: user._id,
            projectName: "",
            clientName: "",
            startDate: "",
            endDate: "",
            budget: "",
            priority: "",
            projectLeader: "",
            team: [],
            pdescription: "",
            progress: "Pending",
        });
    };

    return (
        <div id='create_project' className='modal custom-modal fade' role='dialog' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered modal-lg' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Create Project</h5>
                        <button
                            type='button'
                            className='btn-close btn-outline-light'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                            onClick={oncloseHandler}
                        ></button>
                    </div>
                    <div className='modal-body'>
                        <form action='/project' id='addproject' onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label>Project Title</label>
                                        <input
                                            name='projectName'
                                            className='form-control minput'
                                            placeholder='Project name'
                                            type='text'
                                            onChange={onChange}
                                        />
                                    </div>
                                    {projectnameValid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label>Client</label>
                                        <select
                                            name='clientName'
                                            onChange={onChange}
                                            className='select modal-select minput'
                                        >
                                            <option value=''>-- Select --</option>
                                            <option value='Global Technologies'>Global Technologies</option>
                                            <option value='Delta Infotech'>Delta Infotech</option>
                                        </select>
                                        {clientnameValid === false && (
                                            <div className='null_err'>
                                                <span>
                                                    {" "}
                                                    <i className='fa-solid fa-circle-exclamation'></i>
                                                    field is required
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label>Start Date</label>
                                        <div className='cal-icon'>
                                            <input
                                                name='startDate'
                                                className='form-control datetimepicker minput'
                                                type='text'
                                                onChange={onChange}
                                            />
                                        </div>
                                        {startDateValid === false && (
                                            <div className='null_err'>
                                                <span>
                                                    {" "}
                                                    <i className='fa-solid fa-circle-exclamation'></i>
                                                    field is required
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label>End Date</label>
                                        <div className='cal-icon'>
                                            <input
                                                name='endDate'
                                                className='form-control datetimepicker minput'
                                                type='text'
                                                onChange={onChange}
                                            />
                                        </div>
                                        {endDateValid === false && (
                                            <div className='null_err'>
                                                <span>
                                                    {" "}
                                                    <i className='fa-solid fa-circle-exclamation'></i>
                                                    field is required
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label>Rate</label>
                                        <input
                                            name='budget'
                                            placeholder='₹500'
                                            className='form-control minput'
                                            type='text'
                                            onChange={onChange}
                                        />
                                    </div>
                                    {budgetValid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation'></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label>Priority</label>
                                        <select
                                            name='priority'
                                            onChange={onChange}
                                            className='select modal-select minput'
                                        >
                                            <option value='Top'>High</option>
                                            <option value='Medium'>Medium</option>
                                            <option value='Low'>Low</option>
                                        </select>
                                    </div>
                                    {priorityValid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation'></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label>Add Project Leader</label>
                                        <input
                                            name='projectLeader'
                                            className='form-control minput'
                                            type='text'
                                            onChange={onChange}
                                        />
                                    </div>
                                    {projectleaderValid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation'></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label>Add Team</label>
                                        <input
                                            name='team'
                                            id='teaminput'
                                            className='form-control minput'
                                            type='text'
                                            onChange={onChange}
                                        />
                                    </div>
                                    {teamValid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation'></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Description</label>
                                <textarea
                                    name='pdescription'
                                    rows='4'
                                    className='form-control summernote minput'
                                    placeholder='Enter your message here'
                                    onChange={onChange}
                                ></textarea>
                            </div>
                            {descValid === false && (
                                <div className='null_err'>
                                    <span>
                                        {" "}
                                        <i className='fa-solid fa-circle-exclamation'></i>
                                        field is required
                                    </span>
                                </div>
                            )}
                            <div className='form-group'>
                                <label>Upload Files</label>
                                <input className='form-control minput' type='file' />
                            </div>

                            {/* <div className='null_err'>
                                <span>
                                    {" "}
                                    <i className='fa-solid fa-circle-exclamation'></i>
                                    field is required
                                </span>
                            </div> */}

                            <div className='submit-section'>
                                <button
                                    type='submit'
                                    className='btn btn-primary submit-btn'
                                    data-bs-dismiss={
                                        projectnameValid &&
                                        clientnameValid &&
                                        startDateValid &&
                                        endDateValid &&
                                        budgetValid &&
                                        priorityValid &&
                                        projectleaderValid &&
                                        teamValid &&
                                        descValid
                                            ? "modal"
                                            : ""
                                    }
                                    aria-label={
                                        projectnameValid &&
                                        clientnameValid &&
                                        startDateValid &&
                                        endDateValid &&
                                        budgetValid &&
                                        priorityValid &&
                                        projectleaderValid &&
                                        teamValid &&
                                        descValid
                                            ? "Close"
                                            : ""
                                    }
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
