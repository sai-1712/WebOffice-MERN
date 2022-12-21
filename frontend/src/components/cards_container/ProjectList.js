import React from "react";
import "../../public/assests/projects.css";
import { useSelector, useDispatch } from "react-redux";
import { getProject } from "../store/actions/project-actions";
import { useEffect } from "react";


export default function ProjectList() {
    const dispatch = useDispatch();

    const NULLURL = "";
    let Projectcontent = <p className='emptylist'>No Projects Found</p>;
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProject(user._id));
    }, [dispatch, user._id]);

    const projects = user.projects;

    console.log("projects : ", projects);

    const teamview = (team) => {
        if(team){
            let teamwrap = <li><a href={NULLURL} className="all-users">+{team.length - 3}</a></li>;
            let teammembers = team.slice(0,3).map((t,index) => (
                // index for different static images, here get images by member name
                <li><a href={NULLURL} title=""><img alt={t} src={require(`../../public/Images/review${3+index}.png`)} /></a></li>
            ))
            return (
                <ul className="team-members">
                    {teammembers}
                    {team.length > 3 && teamwrap}
                </ul>
            )
        }
        return null
    }

    // const user = useSelector((state) => state.auth.user);
    // const projects = props.projects;
    // console.log(user);

    if (projects.length > 0) {
        Projectcontent = projects.map((project) => (
            <div className='col-lg-4 col-sm-6 col-md-4 col-xl-3' key={project._id}>
                <div className='card'>
                    <div className='card-body'>
                        <div className='dropdown profile-action'>
                            <a
                                href={NULLURL}
                                className='action-icon dropdown-toggle'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <i className='fa-solid fa-ellipsis-vertical'></i>
                            </a>
                            <div className='dropdown-menu dropdown-menu-right'>
                                <a
                                    className='dropdown-item'
                                    href={NULLURL}
                                    data-bs-toggle='modal'
                                    data-bs-target='#edit_project'
                                >
                                    <i className='fa fa-pencil m-r-5'></i> Edit
                                </a>
                                <a
                                    className='dropdown-item'
                                    href={NULLURL}
                                    data-bs-toggle='modal'
                                    data-bs-target='#delete_project'
                                    
                                >
                                    <i className='fa fa-trash-o m-r-5'></i> Delete
                                </a>
                            </div>
                        </div>
                        <h4 className='project-title'>
                            <a href={`/project-view/:${project._id}`}>{project.projectName}</a>
                        </h4>
                        <p className='text-muted'>{project.pdescription}</p>
                        <div className='pro-deadline mb-2'>
                            <div className='sub-title'>Deadline:</div>
                            <div className='text-muted'>{project.endDate}</div>
                        </div>
                        <div className='project-members mb-2'>
                            <div>Project Leader :</div>
                            <ul className='team-members'>
                                <li>
                                    <a
                                        href={NULLURL}
                                        data-bs-toggle='tooltip'
                                        title=''
                                        data-original-title='Jeffery Lalor'
                                    >
                                        <img alt='' src={require("../../public/Images/review3.png")} />
                                    </a>
                                </li>

                                <p style={{ marginLeft: "5px", marginTop: "5px" }}>{project.projectLeader}</p>
                            </ul>
                        </div>
                        <div className='project-members mb-2'>
                            <div>Team :</div>
                            {teamview(project.team)}
                        </div>
                        <p className='mb-2'>
                            Priority : <span className='text-success float-right'>{project.priority}</span>
                        </p>
                        <p className='mb-2'>
                            Status : <span className='text-success float-right'>{project.progress}</span>
                        </p>
                    </div>
                </div>
            </div>
        ));
    }

    return <div className='row'>{Projectcontent}</div>;
}
